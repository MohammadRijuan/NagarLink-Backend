"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentServices = void 0;
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const createDepartmentService = async (payload) => {
    const name = payload.name.trim();
    // Check duplicate department name
    const existingDepartment = await prisma_1.prisma.department.findFirst({
        where: {
            name: {
                equals: name,
                mode: "insensitive",
            },
        },
    });
    if (existingDepartment) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Department already exists");
    }
    const department = await prisma_1.prisma.department.create({
        data: {
            name,
        },
    });
    return department;
};
const getAllDepartmentService = async () => {
    const Departments = await prisma_1.prisma.department.findMany({
        include: {
            categories: {
                select: {
                    id: true,
                    name: true,
                    departmentId: false
                }
            }
        }
    });
    return Departments;
};
const getDepartmentByIdService = async (departmentId) => {
    const department = await prisma_1.prisma.department.findUnique({
        where: {
            id: departmentId,
        },
    });
    if (!department) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Department does not exist");
    }
    return department;
};
const updateDepartmentByIdService = async (payload, departmentId) => {
    const isDepartment = await prisma_1.prisma.department.findUnique({
        where: {
            id: departmentId,
        },
    });
    if (!isDepartment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Department does not exist");
    }
    const newName = payload.name.trim();
    // Same name
    if (isDepartment.name.toLowerCase() === newName.toLowerCase()) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Department name is already up to date");
    }
    const existingDepartment = await prisma_1.prisma.department.findFirst({
        where: {
            name: {
                equals: newName,
                mode: "insensitive",
            },
            NOT: {
                id: departmentId,
            },
        },
    });
    if (existingDepartment) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "This department name already exists");
    }
    const updatedDepartment = await prisma_1.prisma.department.update({
        where: {
            id: departmentId,
        },
        data: {
            name: payload.name?.trim(),
        },
    });
    return updatedDepartment;
};
const deleteDepartmentByIdService = async (departmentId) => {
    const department = await prisma_1.prisma.department.findUnique({
        where: {
            id: departmentId,
        },
    });
    if (!department) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Department does not exist");
    }
    const deletedDepartment = await prisma_1.prisma.department.delete({
        where: {
            id: departmentId,
        },
    });
    return deletedDepartment;
};
exports.departmentServices = {
    createDepartmentService,
    getAllDepartmentService,
    getDepartmentByIdService,
    updateDepartmentByIdService,
    deleteDepartmentByIdService,
};
//# sourceMappingURL=department.service.js.map