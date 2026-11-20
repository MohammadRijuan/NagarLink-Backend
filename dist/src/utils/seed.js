"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedStaff = exports.seedManager = exports.seedAdmin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const enums_1 = require("../../generated/prisma/enums");
const config_1 = __importDefault(require("../config"));
const prisma_1 = require("../lib/prisma");
const AppError_1 = require("./AppError");
const http_status_1 = __importDefault(require("http-status"));
const seedAdmin = async () => {
    try {
        const isAdmin = await prisma_1.prisma.user.findFirst({
            where: {
                role: enums_1.Role.ADMIN,
            },
        });
        if (isAdmin) {
            console.log("Admin already exist");
            return;
        }
        const name = config_1.default.tester_admin_name;
        const email = config_1.default.tester_admin_email;
        const password = config_1.default.tester_admin_password;
        if (!name || !email || !password) {
            throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, " Admin name,email,password missing in env file");
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
        const admin = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: enums_1.Role.ADMIN,
                needPasswordChange: true,
                emailVerified: true,
            },
        });
        console.log("tester Admin created successfully", admin);
    }
    catch (error) {
        console.log("Error seeding admin", error);
        await prisma_1.prisma.user.delete({
            where: {
                email: config_1.default.tester_admin_email,
            },
        });
    }
};
exports.seedAdmin = seedAdmin;
const seedManager = async () => {
    try {
        const isManager = await prisma_1.prisma.user.findFirst({
            where: {
                role: enums_1.Role.MANAGER,
            },
        });
        if (isManager) {
            console.log("Manger already exist");
            return;
        }
        const name = config_1.default.tester_manager_name;
        const email = config_1.default.tester_manager_email;
        const password = config_1.default.tester_manager_password;
        if (!name || !email || !password) {
            throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "tester Manager name,email,password missing in env file");
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
        const manager = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                role: enums_1.Role.MANAGER,
                password: hashedPassword,
                needPasswordChange: true,
                emailVerified: false,
            },
        });
        console.log("tester manager created successfully", manager);
    }
    catch (error) {
        console.log("error seeding manager", error);
        await prisma_1.prisma.user.delete({
            where: {
                email: config_1.default.tester_manager_email,
            },
        });
    }
};
exports.seedManager = seedManager;
const seedStaff = async () => {
    try {
        const istaff = await prisma_1.prisma.user.findFirst({
            where: {
                role: enums_1.Role.STAFF,
            },
        });
        if (istaff) {
            console.log("tester staff already exist");
            return;
        }
        const name = config_1.default.tester_staff_name;
        const email = config_1.default.tester_staff_email;
        const password = config_1.default.tester_staff_password;
        if (!name || !email || !password) {
            throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "tester staff name,email,password missing in env file");
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
        const manager = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                role: enums_1.Role.STAFF,
                password: hashedPassword,
                needPasswordChange: true,
                emailVerified: false,
            },
        });
        console.log("tester staff created successfully", manager);
    }
    catch (error) {
        console.log("error seeding staff", error);
        await prisma_1.prisma.user.delete({
            where: {
                email: config_1.default.tester_staff_email,
            },
        });
    }
};
exports.seedStaff = seedStaff;
//# sourceMappingURL=seed.js.map