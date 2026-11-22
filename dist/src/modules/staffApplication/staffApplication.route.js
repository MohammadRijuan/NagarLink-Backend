"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffApplicationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const staffApplication_controller_1 = require("./staffApplication.controller");
const router = express_1.default.Router();
// Apply to become staff
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), staffApplication_controller_1.staffApplicationControllers.createStaffApplication);
// Get all applications
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), staffApplication_controller_1.staffApplicationControllers.getAllStaffApplications);
// Get single application
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), staffApplication_controller_1.staffApplicationControllers.getStaffApplicationById);
// Update application (e.g. approve/reject)
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), staffApplication_controller_1.staffApplicationControllers.updateStaffApplication);
// Delete application
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), staffApplication_controller_1.staffApplicationControllers.deleteStaffApplication);
exports.staffApplicationRoutes = router;
//# sourceMappingURL=staffApplication.route.js.map