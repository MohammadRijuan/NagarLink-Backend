import { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { userControllers } from "./user.controller";

const router = Router()

router.get("/",userControllers.getAllUsers)
router.patch("/:id",userControllers.updateUserById)
router.delete("/:id",auth(Role.ADMIN),userControllers.deleteUserById)
router.get("/:id",auth(Role.ADMIN),userControllers.getUserById)
router.get("/all-staffs",auth(Role.ADMIN,Role.MANAGER),userControllers.getAllStaffs)


export const userRoutes = router