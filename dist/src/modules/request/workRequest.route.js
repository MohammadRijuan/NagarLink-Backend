"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRequestRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const workRequest_controller_1 = require("./workRequest.controller");
const router = (0, express_1.Router)();
// Citizen creates a work request
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), workRequest_controller_1.workRequestControllers.createWorkRequest);
// Citizen, Manager and Admin can view all work requests
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.MANAGER, enums_1.Role.ADMIN), workRequest_controller_1.workRequestControllers.getAllWorkRequests);
// View a single work request
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.MANAGER, enums_1.Role.ADMIN), workRequest_controller_1.workRequestControllers.getWorkRequestById);
// Citizen updates their own work request
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), workRequest_controller_1.workRequestControllers.updateWorkRequest);
// Manager/Admin updates work request status
router.patch("/:id/status", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), workRequest_controller_1.workRequestControllers.updateWorkRequestStatus);
// Citizen deletes their own work request
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), workRequest_controller_1.workRequestControllers.deleteWorkRequest);
exports.workRequestRoutes = router;
//# sourceMappingURL=workRequest.route.js.map