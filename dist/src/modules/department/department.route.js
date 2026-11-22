"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const department_controller_1 = require("./department.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), department_controller_1.departmentControllers.createDepartment);
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), department_controller_1.departmentControllers.getAllDepartments);
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), department_controller_1.departmentControllers.getDepartmentById);
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), department_controller_1.departmentControllers.updateDepartment);
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), department_controller_1.departmentControllers.deleteDepartment);
exports.departmentRoutes = router;
//# sourceMappingURL=department.route.js.map