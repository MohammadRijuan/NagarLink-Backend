"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const staffManagement_controller_1 = require("./staffManagement.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const staffManagement_validation_1 = require("./staffManagement.validation");
const router = express_1.default.Router();
// Get all staff
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), staffManagement_controller_1.staffControllers.getAllStaff);
// Get staff by ID
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), (0, validateRequest_1.validateRequest)({ params: staffManagement_validation_1.staffIdParamsSchema }), staffManagement_controller_1.staffControllers.getStaffById);
// Delete staff
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), (0, validateRequest_1.validateRequest)({ params: staffManagement_validation_1.staffIdParamsSchema }), staffManagement_controller_1.staffControllers.deleteStaff);
exports.staffRoutes = router;
//# sourceMappingURL=staffManagement.route.js.map