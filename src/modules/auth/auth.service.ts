import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import {
  IForgotPasswordPayload,
  IGoogleLoginPayload,
  ILoginUserPayload,
  IRegisterUserPayload,
  IRequestUser,
  IResetPasswordPayload,
  IVerifyEmailPayload,
} from "./auth.interface";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import config from "../../config";
import crypto from "crypto";
import { redisClient } from "../../lib/redis";
import path from "path";
import ejs from "ejs";
import { transporter } from "../../lib/nodemailer";
import { AuthProvider, Role } from "../../../generated/prisma/enums";
import { jwtUtils } from "../../utils/jwt";
import { JwtPayload, SignOptions } from "jsonwebtoken";
import { TokenPayload } from "google-auth-library";
import { googleClient } from "../../lib/googleAuth";

const registerUserService = async (payload: IRegisterUserPayload) => {
  const { name, password } = payload;

  const email = payload.email.trim().toLowerCase();

  //   finding user in database through email
  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  //   if exist throw an error
  if (isUserExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      "User with this email already exist",
    );
  }

  //   if not exist then hashing the password
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  // set one otp limit time
  const expirationSeconds = 5 * 60;

  // making otp line for existing email
  const otpKey = `citizen-registration-otp:${email}`;

  //   generate otp randomly 6digit
  const otpValue = crypto.randomInt(100000, 999999).toString();

  //   setting otp line and otp in redis
  await redisClient.set(otpKey, otpValue, {
    expiration: {
      type: "EX",
      value: expirationSeconds,
    },
  });

  //   now setting data line for desire email
  const otpRegistrationkey = `citizen-registration-data:${email}`;

  //   get the register data from frontend
  const redisUserDataPayload = {
    name,
    email,
    password: hashedPassword,
    phone: payload.phone,
  };

  //   setting data line and register data in redis
  await redisClient.set(
    otpRegistrationkey,
    JSON.stringify(redisUserDataPayload),
    {
      expiration: {
        type: "EX",
        value: expirationSeconds,
      },
    },
  );

  //   making template for otp
  const templatePath = path.join(
    process.cwd(),
    "src/templates/registration-user-otp.ejs",
  );

  //   making template format what required to send in email
  const templateData = {
    name,
    email,
    otp: otpValue,
    expirationMinutes: expirationSeconds / 60,
  };

  //   preparing html with required data to render that file
  const html = await ejs.renderFile(templatePath, templateData);

  await transporter.sendMail({
    from: config.email_sender,
    to: email,
    subject: "Email Verification",
    html,
  });
};

const verifyUserEmailService = async (payload: IVerifyEmailPayload) => {
  // const otp = payload.otp
  // const email = payload.email

  const { otp } = payload;
  const email = payload.email.trim().toLowerCase();

  // user exist or not
  const isUserExist = await prisma.user.findUnique({
    where: { email },
  });

  // user account delete or not
  if (isUserExist?.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  // user active or not
  if (isUserExist && !isUserExist.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is Blocked");
  }

  // user email verified or not
  if (isUserExist?.emailVerified) {
    throw new AppError(httpStatus.CONFLICT, "Email ALready Verified");
  }

  if (isUserExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      "User with this email already exists",
    );
  }

  // the line of email
  const otpKey = `citizen-registration-otp:${email}`;

  // get that otp from redis
  const redisOtp = await redisClient.get(otpKey);

  // if not exist throw an error
  if (!redisOtp) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid OTP");
  }

  // if not match throw an error
  if (redisOtp !== otp) {
    throw new AppError(httpStatus.BAD_REQUEST, "OTP Does Not Match");
  }

  // the line of user data
  const userRegistrationKey = `citizen-registration-data:${email}`;

  // get user data from redis
  const redisUserData = await redisClient.get(userRegistrationKey);

  // if user data not exist in redis throw an error
  if (!redisUserData) {
    throw new AppError(httpStatus.NOT_FOUND, "citizen Doesnt Exist");
  }

  // parsing user data from redis
  const userPayload: IRegisterUserPayload = JSON.parse(redisUserData);

  // create the new user
  const createUser = await prisma.user.create({
    data: {
      name: userPayload.name,
      email: userPayload.email,
      password: userPayload.password,
      role: Role.CITIZEN,
      emailVerified: true,
      phone: userPayload.phone || "",
    },
    omit: { password: true },
    include: { staffLocation: true },
  });

  // delete the user data from redis
  await redisClient.del(userRegistrationKey);

  // set a welcome email template for new user
  const tempatePath = path.join(
    process.cwd(),
    "src/templates/citizen-welcome-email.ejs",
  );

  // templateData will be created by user name
  const templateData = {
    name: createUser.name,
  };

  const html = await ejs.renderFile(tempatePath, templateData);

  await transporter.sendMail({
    from: config.email_sender,
    to: email,
    subject: "Welcome To NagarLink",
    html,
  });

  const { ...user } = createUser;

  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_token,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_token,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    user,
    accessToken,
    refreshToken,
  };
};

const loginUserService = async (payload: ILoginUserPayload) => {
  const { password } = payload;

  const email = payload.email.trim().toLowerCase();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User not found");
  }

  // user account delete or not
  if (user?.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  // user active or not
  if (user && !user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is Blocked");
  }

  if (user.password === null && user.googleId !== null) {
    throw new AppError(
      httpStatus.CONFLICT,
      "User already has account with google... try to login with google",
    );
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password as string,
  );

  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_token,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_token,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getMyProfileService = async (user: IRequestUser) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    omit: {
      password: true,
    },
  });

  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
  }

  return isUserExist;
};

const googleLoginService = async (payload: IGoogleLoginPayload) => {
  let googleIdTokenPayload: TokenPayload | null | undefined = null;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: payload.idToken,
      audience: config.google_client_id,
    });

    googleIdTokenPayload = ticket.getPayload();
  } catch (error) {
    console.log("Google ID Token Verification Failed", error);
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "Invalid Or Expired Google Id Token",
    );
  }

  if (!googleIdTokenPayload) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "Invalid Or Expired Google Id Token",
    );
  }

  if (!googleIdTokenPayload.email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Google Email Not Found");
  }
  if (!googleIdTokenPayload.name) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Google Email User Name Not Found",
    );
  }

  const ifCitizenExistWithGoogleAuth = await prisma.user.findUnique({
    where: {
      email: googleIdTokenPayload.email,
      role: Role.CITIZEN,
      googleId: googleIdTokenPayload.sub,
    },
  });

  let user = ifCitizenExistWithGoogleAuth;

  if (!ifCitizenExistWithGoogleAuth) {
    const ifCitizenExistWithCredentials = await prisma.user.findUnique({
      where: {
        email: googleIdTokenPayload.email,
        role: Role.CITIZEN,
        authProvider: AuthProvider.CREDENTIAL,
      },
    });

    if (ifCitizenExistWithCredentials) {
      if (!ifCitizenExistWithCredentials.emailVerified) {
        throw new AppError(httpStatus.FORBIDDEN, "Email Not Verified");
      }

      if (!ifCitizenExistWithCredentials.isActive) {
        throw new AppError(httpStatus.FORBIDDEN, "User Is not active");
      }

      if (ifCitizenExistWithCredentials.isDeleted) {
        throw new AppError(httpStatus.FORBIDDEN, "User Is Deleted");
      }

      user = await prisma.user.update({
        where: {
          id: ifCitizenExistWithCredentials.id,
        },

        data: {
          googleId: googleIdTokenPayload.sub,
        },
      });
    } else {
      // Google Register
      user = await prisma.user.create({
        data: {
          name: googleIdTokenPayload.name,
          email: googleIdTokenPayload.email,
          role: Role.CITIZEN,
          googleId: googleIdTokenPayload.sub,
          authProvider: AuthProvider.GOOGLE,
          emailVerified: true,
        },
      });
      const tempatePath = path.join(
        process.cwd(),
        "src/app/templates/citizen-welcome-email.ejs",
      );

      const templateData = {
        name: user.name,
      };

      const html = await ejs.renderFile(tempatePath, templateData);

      await transporter.sendMail({
        from: config.email_sender,
        to: user.email,
        subject: "Welcome To NagarLink",

        html,
      });
    }
  }

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User Not Found");
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User Is not active");
  }

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User Is Deleted");
  }

  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_token,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_token,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshTokenService = async (token: string) => {
  const verifiedRefreshToken = jwtUtils.verifyToken(
    token,
    config.jwt_refresh_token,
  );

  if (!verifiedRefreshToken.success || !verifiedRefreshToken.data) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      config.node_env === "development"
        ? verifiedRefreshToken.error
        : "Invalid Refresh token",
    );
  }

  const data = verifiedRefreshToken.data as JwtPayload;

  const user = await prisma.user.findUnique({
    where: {
      id: data?.userId,
    },
  });

  // Check whether user exists, is deleted, or inactive
  if (!user || user.isDeleted || !user.isActive) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "User is inactive, deleted, or not found",
    );
  }

  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_token,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_token,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const forgotPasswordService = async (payload: IForgotPasswordPayload) => {
  const { email } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User Does not exist");
  }

  if (isUserExist.emailVerified === false) {
    throw new AppError(httpStatus.FORBIDDEN, "User email is not verified");
  }

  if (!isUserExist.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked");
  }

  if (isUserExist.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted");
  }

  if (isUserExist.googleId && isUserExist.authProvider === "GOOGLE") {
    throw new AppError(httpStatus.CONFLICT, "user has account with google id");
  }

  const key = `forgot-password-otp : ${isUserExist.email}`;
  const otp = crypto.randomInt(100000, 1000000);

  const expirationSeconds = 5 * 60;

  await redisClient.set(key, otp, {
    expiration: {
      type: "EX",
      value: 5 * 60,
    },
  });

  // set a template structure for getting otp message
  // starting
  const tempatePath = path.join(
    process.cwd(),
    "src/templates/forgot-password.ejs",
  );

  const templateData = {
    name: isUserExist.name,
    otp,
    expirationMinutes: expirationSeconds / 60,
  };

  const html = await ejs.renderFile(tempatePath, templateData);
  // end

  await transporter.sendMail({
    from: config.email_sender,
    to: isUserExist.email,
    subject: "Forgot password",
    html,
  });
};

const resetPasswordService = async (payload: IResetPasswordPayload) => {
  const { email, otp, newPassword } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User Does not exist");
  }

  if (isUserExist.emailVerified === false) {
    throw new AppError(httpStatus.FORBIDDEN, "User email is not verified");
  }

  if (!isUserExist.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked");
  }

  if (isUserExist.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted");
  }

  if (isUserExist.googleId && isUserExist.authProvider === "GOOGLE") {
    throw new AppError(httpStatus.CONFLICT, "user has account with google id");
  }

  const key = `forgot-password-otp : ${isUserExist.email}`;

  const redisOtp = await redisClient.get(key);

  if (!redisOtp) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid otp");
  }

  if (redisOtp !== otp) {
    throw new AppError(httpStatus.BAD_REQUEST, "Otp does not match");
  }

  const hashedNewPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  await prisma.user.update({
    where: {
      email: isUserExist.email,
    },
    data: {
      password: hashedNewPassword,
    },
  });

  await redisClient.del([key]);

  // set a template structure for getting otp message
  // starting

  const tempatePath = path.join(
    process.cwd(),
    "src/templates/reset-password-success.ejs",
  );

  const templateData = {
    name: isUserExist.name,
  };

  const html = await ejs.renderFile(tempatePath, templateData);

  await transporter.sendMail({
    from: config.email_sender,
    to: isUserExist.email,
    subject: "Password Changed",
    html,
  });
};

export const authServices = {
  registerUserService,
  loginUserService,
  getMyProfileService,
  googleLoginService,
  refreshTokenService,
  resetPasswordService,
  forgotPasswordService,
  verifyUserEmailService,
};
