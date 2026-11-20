"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../config"));
const crypto_1 = __importDefault(require("crypto"));
const redis_1 = require("../../lib/redis");
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
const nodemailer_1 = require("../../lib/nodemailer");
const enums_1 = require("../../../generated/prisma/enums");
const jwt_1 = require("../../utils/jwt");
const registerUserService = async (payload) => {
    const { name, password } = payload;
    const email = payload.email.trim().toLowerCase();
    //   finding user in database through email
    const isUserExist = await prisma_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    //   if exist throw an error
    if (isUserExist) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "User with this email already exist");
    }
    //   if not exist then hashing the password
    const hashedPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
    // set one otp limit time
    const expirationSeconds = 5 * 60;
    // making otp line for existing email
    const otpKey = `citizen-registration-otp:${email}`;
    //   generate otp randomly 6digit
    const otpValue = crypto_1.default.randomInt(100000, 999999).toString();
    //   setting otp line and otp in redis
    await redis_1.redisClient.set(otpKey, otpValue, {
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
    await redis_1.redisClient.set(otpRegistrationkey, JSON.stringify(redisUserDataPayload), {
        expiration: {
            type: "EX",
            value: expirationSeconds,
        },
    });
    //   making template for otp
    const templatePath = path_1.default.join(process.cwd(), "src/templates/registration-user-otp.ejs");
    //   making template format what required to send in email
    const templateData = {
        name,
        email,
        otp: otpValue,
        expirationMinutes: expirationSeconds / 60,
    };
    //   preparing html with required data to render that file
    const html = await ejs_1.default.renderFile(templatePath, templateData);
    await nodemailer_1.transporter.sendMail({
        from: config_1.default.email_sender,
        to: email,
        subject: "Email Verification",
        html,
    });
};
const verifyUserEmailService = async (payload) => {
    // const otp = payload.otp
    // const email = payload.email
    const { otp } = payload;
    const email = payload.email.trim().toLowerCase();
    // user exist or not
    const isUserExist = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    // user account delete or not
    if (isUserExist?.isDeleted) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is Deleted");
    }
    // user active or not
    if (isUserExist && !isUserExist.isActive) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is Blocked");
    }
    // user email verified or not
    if (isUserExist?.emailVerified) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Email ALready Verified");
    }
    if (isUserExist) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "User with this email already exists");
    }
    // the line of email
    const otpKey = `citizen-registration-otp:${email}`;
    // get that otp from redis
    const redisOtp = await redis_1.redisClient.get(otpKey);
    // if not exist throw an error
    if (!redisOtp) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid OTP");
    }
    // if not match throw an error
    if (redisOtp !== otp) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "OTP Does Not Match");
    }
    // the line of user data
    const userRegistrationKey = `citizen-registration-data:${email}`;
    // get user data from redis
    const redisUserData = await redis_1.redisClient.get(userRegistrationKey);
    // if user data not exist in redis throw an error
    if (!redisUserData) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "citizen Doesnt Exist");
    }
    // parsing user data from redis
    const userPayload = JSON.parse(redisUserData);
    // create the new user
    const createUser = await prisma_1.prisma.user.create({
        data: {
            name: userPayload.name,
            email: userPayload.email,
            password: userPayload.password,
            role: enums_1.Role.CITIZEN,
            // emailVerified: true,
            phone: userPayload.phone || "",
        },
        omit: { password: true },
        include: { staffLocation: true },
    });
    // delete the user data from redis
    await redis_1.redisClient.del(userRegistrationKey);
    // set a welcome email template for new user
    const tempatePath = path_1.default.join(process.cwd(), "src/templates/citizen-welcome-email.ejs");
    // templateData will be created by user name
    const templateData = {
        name: createUser.name,
    };
    const html = await ejs_1.default.renderFile(tempatePath, templateData);
    await nodemailer_1.transporter.sendMail({
        from: config_1.default.email_sender,
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
    const accessToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_access_token, config_1.default.jwt_access_expires_in);
    const refreshToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_refresh_token, config_1.default.jwt_refresh_expires_in);
    return {
        user,
        accessToken,
        refreshToken,
    };
};
const loginUserService = async () => { };
const getMyProfileService = async () => { };
const refreshTokenService = async () => { };
const forgotPasswordService = async () => { };
const resetPasswordService = async () => { };
const googleLoginService = async () => { };
exports.authServices = {
    registerUserService,
    loginUserService,
    getMyProfileService,
    googleLoginService,
    refreshTokenService,
    resetPasswordService,
    forgotPasswordService,
    verifyUserEmailService,
};
//# sourceMappingURL=auth.service.js.map