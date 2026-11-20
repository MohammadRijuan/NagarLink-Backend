import bcrypt from "bcryptjs";
import { Role } from "../../generated/prisma/enums";
import config from "../config";
import { prisma } from "../lib/prisma";
import { AppError } from "./AppError";
import httpStatus from "http-status";

export const seedAdmin = async () => {
  try {
    const isAdmin = await prisma.user.findFirst({
      where: {
        role: Role.ADMIN,
      },
    });

    if (isAdmin) {
      console.log("Admin already exist");
      return;
    }

    const name = config.tester_admin_name;
    const email = config.tester_admin_email;
    const password = config.tester_admin_password;

    if (!name || !email || !password) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        " Admin name,email,password missing in env file",
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const admin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.ADMIN,
        needPasswordChange: true,
        emailVerified: true,
      },
    });

    console.log("tester Admin created successfully", admin);
  } catch (error) {
    console.log("Error seeding admin", error);

    await prisma.user.delete({
      where: {
        email: config.tester_admin_email,
      },
    });
  }
};

export const seedManager = async () => {
  try {
    const isManager = await prisma.user.findFirst({
      where: {
        role: Role.MANAGER,
      },
    });

    if (isManager) {
      console.log("Manger already exist");
      return;
    }

    const name = config.tester_manager_name;
    const email = config.tester_manager_email;
    const password = config.tester_manager_password;

    if (!name || !email || !password) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "tester Manager name,email,password missing in env file",
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const manager = await prisma.user.create({
      data: {
        name,
        email,
        role: Role.MANAGER,
        password: hashedPassword,
        needPasswordChange: true,
        emailVerified: false,
      },
    });

    console.log("tester manager created successfully", manager);
  } catch (error) {
    console.log("error seeding manager", error);

    await prisma.user.delete({
      where: {
        email: config.tester_manager_email,
      },
    });
  }
};

export const seedStaff = async () => {
  try {
    const istaff = await prisma.user.findFirst({
      where: {
        role: Role.STAFF,
      },
    });

    if (istaff) {
      console.log("tester staff already exist");
      return;
    }

    const name = config.tester_staff_name;
    const email = config.tester_staff_email;
    const password = config.tester_staff_password;

    if (!name || !email || !password) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "tester staff name,email,password missing in env file",
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const manager = await prisma.user.create({
      data: {
        name,
        email,
        role: Role.STAFF,
        password: hashedPassword,
        needPasswordChange: true,
        emailVerified: false,
      },
    });

    console.log("tester staff created successfully", manager);
  } catch (error) {
    console.log("error seeding staff", error);

    await prisma.user.delete({
      where: {
        email: config.tester_staff_email,
      },
    });
  }
};
