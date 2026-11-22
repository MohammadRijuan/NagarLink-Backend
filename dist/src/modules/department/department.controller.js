"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const department_service_1 = require("./department.service");
const createDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await department_service_1.departmentServices.createDepartmentService(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Created a new department successfully",
        data: result,
    });
});
const getAllDepartments = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await department_service_1.departmentServices.getAllDepartmentService();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Department retrieved successfully",
        data: result,
    });
});
const getDepartmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await department_service_1.departmentServices.getDepartmentByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "department retrieved successfully",
        data: result,
    });
});
const updateDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await department_service_1.departmentServices.updateDepartmentByIdService(payload, id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Deprtment data updated successfully",
        data: result,
    });
});
const deleteDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await department_service_1.departmentServices.deleteDepartmentByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "department deleted successfully",
        data: result,
    });
});
exports.departmentControllers = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
};
//# sourceMappingURL=department.controller.js.map