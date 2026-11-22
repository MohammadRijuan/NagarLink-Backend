import express, {
  Request,
  Response,
  urlencoded,
  type Application,
} from "express";
import config from "./config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { NotFound } from "./middlewares/notFound";
import { authRoutes } from "./modules/auth/auth.route";
import { globalHandleError } from "./middlewares/globalErrorHandler";
import { userRoutes } from "./modules/user/user.route";
import { departmentRoutes } from "./modules/department/department.route";
import { categoryRoutes } from "./modules/category/category.route";
import { staffApplicationRoutes } from "./modules/staffApplication/staffApplication.route";
import { staffRoutes } from "./modules/staffManagement/staffManagement.route";
import { staffCategoryRoutes } from "./modules/staffCategory/staffCategory.route";
import { quotationRoutes } from "./modules/quotation/quotation.route";

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// all api
app.use("/api/v1/auth",authRoutes)

app.use("/api/v1/users",userRoutes)

app.use("/api/v1/departments",departmentRoutes)

app.use("/api/v1/categories",categoryRoutes)

app.use("/api/v1/staff-application",staffApplicationRoutes)

app.use("/api/v1/staff",staffRoutes)

app.use("/api/v1/staff-category",staffCategoryRoutes)

app.use("/api/v1/quotation",quotationRoutes)

app.use("/", (req: Request, res: Response) => {
  // res.send("NagarLink Server working perfectly")
  res.json({
    success: true,
    message: "NagarLink Server is now live",
  });
});

app.use(globalHandleError)
app.use(NotFound)

export default app;
