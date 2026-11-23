"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const getAssignmentContactsService = async (requestId, user) => {
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: { requestId },
        include: {
            request: {
                select: {
                    title: true,
                    phone: true,
                },
            },
            citizen: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            staff: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                },
            },
        },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    if ((user.role === enums_1.Role.CITIZEN && assignment.citizenId !== user.userId) ||
        (user.role === enums_1.Role.STAFF && assignment.staffId !== user.userId)) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not part of this assignment");
    }
    return {
        assignmentId: assignment.id,
        requestId: assignment.requestId,
        requestTitle: assignment.request.title,
        citizen: {
            name: assignment.citizen.name,
            email: assignment.citizen.email,
            phone: assignment.request.phone,
        },
        staff: {
            name: assignment.staff.name,
            email: assignment.staff.email,
            phone: assignment.staff.phone,
        },
    };
};
exports.assignmentServices = {
    getAssignmentContactsService,
};
//# sourceMappingURL=assignment.service.js.map