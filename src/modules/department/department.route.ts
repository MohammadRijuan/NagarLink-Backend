import { Router } from "express"
import { Role } from "../../../generated/prisma/enums";
import { departmentControllers } from "./department.controller";
import { auth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/", auth(Role.ADMIN), departmentControllers.createDepartment);

router.get("/", auth(Role.ADMIN, Role.MANAGER), departmentControllers.getAllDepartments);

router.get("/:id", auth(Role.ADMIN, Role.MANAGER), departmentControllers.getDepartmentById);

router.patch("/:id", auth(Role.ADMIN), departmentControllers.updateDepartment);

router.delete("/:id", auth(Role.ADMIN), departmentControllers.deleteDepartment);

export const departmentRoutes = router