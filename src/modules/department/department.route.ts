import { Router } from "express"
import { Role } from "../../../generated/prisma/enums";
import { departmentControllers } from "./department.controller";
import { auth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createDepartmentSchema,
  departmentIdParamsSchema,
  updateDepartmentSchema,
} from "./department.validation";

const router = Router()

router.post(
  "/",
  auth(Role.ADMIN),
  validateRequest({ body: createDepartmentSchema }),
  departmentControllers.createDepartment,
);

router.get("/", auth(Role.ADMIN, Role.MANAGER), departmentControllers.getAllDepartments);

router.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: departmentIdParamsSchema }),
  departmentControllers.getDepartmentById,
);

router.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: departmentIdParamsSchema,
    body: updateDepartmentSchema,
  }),
  departmentControllers.updateDepartment,
);

router.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: departmentIdParamsSchema }),
  departmentControllers.deleteDepartment,
);

export const departmentRoutes = router