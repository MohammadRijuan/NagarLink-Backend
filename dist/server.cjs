"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/config/index.ts
var import_dotenv = __toESM(require("dotenv"), 1);
var import_path = __toESM(require("path"), 1);
import_dotenv.default.config({
  path: import_path.default.join(process.cwd(), ".env")
});
var config_default = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  app_url: process.env.APP_URL,
  frontend_url: process.env.FRONTEND_URL,
  jwt_access_token: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_token: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  tester_admin_name: process.env.ADMIN_NAME,
  tester_admin_email: process.env.ADMIN_EMAIL,
  tester_admin_password: process.env.ADMIN_PASSWORD,
  tester_manager_name: process.env.MANAGER_NAME,
  tester_manager_email: process.env.MANAGER_EMAIL,
  tester_manager_password: process.env.MANAGER_PASSWORD,
  tester_staff_name: process.env.STAFF_NAME,
  tester_staff_email: process.env.STAFF_EMAIL,
  tester_staff_password: process.env.STAFF_PASSWORD,
  redis_user: process.env.REDIS_USER,
  redis_password: process.env.REDIS_PASSWORD,
  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT,
  smtp_user: process.env.SMTP_USER,
  smtp_password: process.env.SMTP_PASSWORD,
  email_sender: process.env.EMAIL_SENDER,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  bkash_base_url: process.env.BKASH_BASE_URL,
  bkash_username: process.env.BKASH_USERNAME,
  bkash_password: process.env.BKASH_PASSWORD,
  bkash_app_key: process.env.BKASH_APP_KEY,
  bkash_app_secret: process.env.BKASH_APP_SECRET,
  bkash_callback_url: process.env.BKASH_CALLBACK_URL,
  ssl_store_id: process.env.SSLCOMMERZ_STORE_ID,
  ssl_store_password: process.env.SSLCOMMERZ_STORE_PASSWORD,
  ssl_base_url: process.env.SSLCOMMERZ_BASE_URL,
  ssl_is_live: process.env.SSL_IS_LIVE === "true",
  google_client_id: process.env.GOOGLE_CLIENT_ID
};

// src/app.ts
var import_express13 = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_cookie_parser = __toESM(require("cookie-parser"), 1);

// src/middlewares/notFound.ts
var import_http_status = __toESM(require("http-status"), 1);
var NotFound = (req, res) => {
  res.status(import_http_status.default.NOT_FOUND).json({
    message: "Route not found",
    path: req.originalUrl,
    date: /* @__PURE__ */ new Date()
  });
};

// src/modules/auth/auth.route.ts
var import_express = require("express");

// src/utils/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// src/lib/prisma.ts
var dotenv2 = __toESM(require("dotenv"), 1);
var import_adapter_pg = require("@prisma/adapter-pg");

// generated/prisma/internal/class.ts
var runtime = __toESM(require("@prisma/client/runtime/client"), 1);
var config = {
  "previewFeatures": [],
  "clientVersion": "7.10.1",
  "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
  "activeProvider": "postgresql",
  "inlineSchema": 'model Assignment {\n  id String @id @default(uuid())\n\n  status AssignmentStatus @default(ONGOING)\n\n  amount Decimal @db.Decimal(10, 2)\n\n  advanceAmount Decimal @db.Decimal(10, 2)\n\n  requestId String\n  request   WorkRequest @relation(fields: [requestId], references: [id], onDelete: Restrict)\n\n  staffId String\n  staff   User   @relation("StaffAssignments", fields: [staffId], references: [id], onDelete: Cascade)\n\n  citizenId String\n  citizen   User   @relation("CitizenAssignments", fields: [citizenId], references: [id], onDelete: Cascade)\n\n  attachments WorkAttachment[]\n  feedbacks   Feedback[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([requestId])\n  @@index([staffId])\n  @@index([citizenId])\n  @@map("assignments")\n}\n\nmodel WorkAttachment {\n  id           String  @id @default(uuid())\n  assignmentId String\n  fileUrl      String\n  publicId     String\n  resourceType String\n  fileType     String?\n  fileName     String?\n\n  assignment Assignment @relation(fields: [assignmentId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n\n  @@index([assignmentId])\n  @@map("attachments")\n}\n\nmodel Category {\n  id   String @id @default(uuid())\n  name String\n\n  departmentId String\n  department   Department @relation(fields: [departmentId], references: [id])\n\n  staffCategories StaffCategory[]\n\n  @@map("categories")\n}\n\nmodel Department {\n  id   String @id @default(uuid())\n  name String @unique\n\n  categories   Category[]\n  workRequests WorkRequest[]\n\n  @@map("departments")\n}\n\nenum Role {\n  ADMIN\n  MANAGER\n  STAFF\n  CITIZEN\n}\n\nenum AuthProvider {\n  GOOGLE\n  CREDENTIAL\n}\n\nenum StaffApplicationStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\nenum WorkStatus {\n  PENDING\n  REQUESTED\n  ACCEPTED\n  CITIZEN_ACCEPTED\n  CITIZEN_DECLINED\n  ADVANCE_PAID\n  ASSIGNED\n  COMPLETED\n  REJECTED\n}\n\nenum QuotationStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\nenum AssignmentStatus {\n  ONGOING\n  COMPLETION_SUBMITTED\n  COMPLETED\n  CANCELLED\n}\n\nenum InvitationStatus {\n  REQUESTED\n  ACCEPTED\n  REJECTED\n}\n\nenum PaymentStatus {\n  PENDING\n  PAID\n  FAILED\n  REFUNDED\n}\n\nmodel Feedback {\n  id String @id @default(uuid())\n\n  rating  Int\n  comment String?\n\n  assignmentId String     @unique\n  assignment   Assignment @relation(fields: [assignmentId], references: [id], onDelete: Cascade)\n\n  citizenId String\n  citizen   User   @relation(fields: [citizenId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([citizenId])\n  @@map("feedbacks")\n}\n\nmodel Payment {\n  id String @id @default(uuid())\n\n  status PaymentStatus @default(PENDING)\n\n  amount   Decimal @db.Decimal(10, 2)\n  currency String  @default("BDT")\n\n  paymentGateway        String @default("sslcommerz")\n  merchantInvoiceNumber String @unique\n\n  paidAt          DateTime?\n  gatewayResponse Json?\n\n  refundTrxId  String?\n  refundAmount Decimal?  @db.Decimal(10, 2)\n  refundReason String?\n  refundedAt   DateTime?\n\n  requestId String\n  request   WorkRequest @relation(fields: [requestId], references: [id], onUpdate: Cascade)\n\n  sslcommerzPayment SslCommerzPayment?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([requestId])\n  @@index([status])\n  @@map("payments")\n}\n\nmodel SslCommerzPayment {\n  id String @id @default(uuid())\n\n  paymentId String  @unique\n  payment   Payment @relation(fields: [paymentId], references: [id], onDelete: Cascade)\n\n  tranId String @unique\n\n  bankTranId String?\n  valId      String?\n\n  cardType          String?\n  cardIssuer        String?\n  cardBrand         String?\n  cardIssuerCountry String?\n\n  storeAmount Decimal? @db.Decimal(10, 2)\n\n  gatewayResponse Json?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([tranId])\n  @@map("sslcommerz_payments")\n}\n\nmodel Quotation {\n  id          String          @id @default(uuid())\n  proposedFee Decimal         @db.Decimal(10, 2)\n  status      QuotationStatus @default(PENDING)\n\n  requestId String\n  request   WorkRequest @relation(fields: [requestId], references: [id], onDelete: Cascade)\n\n  staffId String\n  staff   User   @relation(fields: [staffId], references: [id], onDelete: Cascade)\n\n  selectedFor WorkRequest? @relation("SelectedQuotation")\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([requestId, staffId])\n  @@index([staffId])\n  @@map("quotations")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel StaffApplication {\n  id                String                 @id @default(uuid())\n  experience        Int\n  experienceDetails String\n  status            StaffApplicationStatus @default(PENDING)\n\n  applicantId String @unique\n  applicant   User   @relation(fields: [applicantId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("staff_applications")\n}\n\nmodel StaffCategory {\n  id String @id @default(uuid())\n\n  staffId String\n  staff   User   @relation(fields: [staffId], references: [id], onDelete: Cascade)\n\n  categoryId String\n  category   Category @relation(fields: [categoryId], references: [id])\n\n  @@unique([staffId, categoryId])\n  @@map("staff_category")\n}\n\nmodel StaffInvitation {\n  id           String           @id @default(uuid())\n  requestId    String\n  staffId      String\n  status       InvitationStatus @default(REQUESTED)\n  responseNote String?\n\n  request WorkRequest @relation(fields: [requestId], references: [id], onDelete: Cascade)\n  staff   User        @relation(fields: [staffId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([requestId, staffId])\n  @@index([requestId])\n  @@index([staffId])\n  @@map("staff_invitations")\n}\n\nmodel StaffLocation {\n  id String @id @default(uuid())\n\n  division String\n  address  String\n\n  staffId String\n  Staff   User   @relation(fields: [staffId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("staff_location")\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  name     String\n  email    String  @unique\n  password String?\n\n  needPasswordChange Boolean @default(false)\n  emailVerified      Boolean @default(false)\n\n  googleId     String?      @unique\n  authProvider AuthProvider @default(CREDENTIAL)\n\n  phone      String?\n  role       Role      @default(CITIZEN)\n  division   String?\n  district   String?\n  address    String?\n  postalCode String?\n  isActive   Boolean   @default(true)\n  isDeleted  Boolean   @default(false)\n  deletedAt  DateTime?\n\n  staffApplications  StaffApplication[]\n  staffCategories    StaffCategory[]\n  staffLocation      StaffLocation[]\n  workRequest        WorkRequest[]\n  quotations         Quotation[]\n  staffAssignments   Assignment[]       @relation("StaffAssignments")\n  citizenAssignments Assignment[]       @relation("CitizenAssignments")\n  feedbacks          Feedback[]\n  staffInvitations   StaffInvitation[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("users")\n}\n\nmodel WorkRequest {\n  id          String     @id @default(uuid())\n  title       String\n  description String\n  division    String\n  city        String\n  address     String\n  postalCode  String\n  phone       String\n  approvedFee Decimal?   @db.Decimal(10, 2)\n  status      WorkStatus @default(PENDING)\n\n  rejectionReason String?\n\n  citizenId String\n  citizen   User   @relation(fields: [citizenId], references: [id])\n\n  departmentId String\n  department   Department @relation(fields: [departmentId], references: [id])\n\n  selectedQuotationId String?    @unique\n  selectedQuotation   Quotation? @relation("SelectedQuotation", fields: [selectedQuotationId], references: [id], onDelete: SetNull)\n\n  quotations       Quotation[]\n  staffInvitations StaffInvitation[]\n  payments         Payment[]\n\n  createdAt  DateTime    @default(now())\n  updatedAt  DateTime    @updatedAt\n  assignment Assignment?\n\n  @@index([citizenId])\n  @@index([status])\n  @@map("work_requests")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Assignment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"AssignmentStatus"},{"name":"amount","kind":"scalar","type":"Decimal"},{"name":"advanceAmount","kind":"scalar","type":"Decimal"},{"name":"requestId","kind":"scalar","type":"String"},{"name":"request","kind":"object","type":"WorkRequest","relationName":"AssignmentToWorkRequest"},{"name":"staffId","kind":"scalar","type":"String"},{"name":"staff","kind":"object","type":"User","relationName":"StaffAssignments"},{"name":"citizenId","kind":"scalar","type":"String"},{"name":"citizen","kind":"object","type":"User","relationName":"CitizenAssignments"},{"name":"attachments","kind":"object","type":"WorkAttachment","relationName":"AssignmentToWorkAttachment"},{"name":"feedbacks","kind":"object","type":"Feedback","relationName":"AssignmentToFeedback"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"assignments","schema":null},"WorkAttachment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"assignmentId","kind":"scalar","type":"String"},{"name":"fileUrl","kind":"scalar","type":"String"},{"name":"publicId","kind":"scalar","type":"String"},{"name":"resourceType","kind":"scalar","type":"String"},{"name":"fileType","kind":"scalar","type":"String"},{"name":"fileName","kind":"scalar","type":"String"},{"name":"assignment","kind":"object","type":"Assignment","relationName":"AssignmentToWorkAttachment"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"attachments","schema":null},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"departmentId","kind":"scalar","type":"String"},{"name":"department","kind":"object","type":"Department","relationName":"CategoryToDepartment"},{"name":"staffCategories","kind":"object","type":"StaffCategory","relationName":"CategoryToStaffCategory"}],"dbName":"categories","schema":null},"Department":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"categories","kind":"object","type":"Category","relationName":"CategoryToDepartment"},{"name":"workRequests","kind":"object","type":"WorkRequest","relationName":"DepartmentToWorkRequest"}],"dbName":"departments","schema":null},"Feedback":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"assignmentId","kind":"scalar","type":"String"},{"name":"assignment","kind":"object","type":"Assignment","relationName":"AssignmentToFeedback"},{"name":"citizenId","kind":"scalar","type":"String"},{"name":"citizen","kind":"object","type":"User","relationName":"FeedbackToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"feedbacks","schema":null},"Payment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"PaymentStatus"},{"name":"amount","kind":"scalar","type":"Decimal"},{"name":"currency","kind":"scalar","type":"String"},{"name":"paymentGateway","kind":"scalar","type":"String"},{"name":"merchantInvoiceNumber","kind":"scalar","type":"String"},{"name":"paidAt","kind":"scalar","type":"DateTime"},{"name":"gatewayResponse","kind":"scalar","type":"Json"},{"name":"refundTrxId","kind":"scalar","type":"String"},{"name":"refundAmount","kind":"scalar","type":"Decimal"},{"name":"refundReason","kind":"scalar","type":"String"},{"name":"refundedAt","kind":"scalar","type":"DateTime"},{"name":"requestId","kind":"scalar","type":"String"},{"name":"request","kind":"object","type":"WorkRequest","relationName":"PaymentToWorkRequest"},{"name":"sslcommerzPayment","kind":"object","type":"SslCommerzPayment","relationName":"PaymentToSslCommerzPayment"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"payments","schema":null},"SslCommerzPayment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"paymentId","kind":"scalar","type":"String"},{"name":"payment","kind":"object","type":"Payment","relationName":"PaymentToSslCommerzPayment"},{"name":"tranId","kind":"scalar","type":"String"},{"name":"bankTranId","kind":"scalar","type":"String"},{"name":"valId","kind":"scalar","type":"String"},{"name":"cardType","kind":"scalar","type":"String"},{"name":"cardIssuer","kind":"scalar","type":"String"},{"name":"cardBrand","kind":"scalar","type":"String"},{"name":"cardIssuerCountry","kind":"scalar","type":"String"},{"name":"storeAmount","kind":"scalar","type":"Decimal"},{"name":"gatewayResponse","kind":"scalar","type":"Json"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"sslcommerz_payments","schema":null},"Quotation":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"proposedFee","kind":"scalar","type":"Decimal"},{"name":"status","kind":"enum","type":"QuotationStatus"},{"name":"requestId","kind":"scalar","type":"String"},{"name":"request","kind":"object","type":"WorkRequest","relationName":"QuotationToWorkRequest"},{"name":"staffId","kind":"scalar","type":"String"},{"name":"staff","kind":"object","type":"User","relationName":"QuotationToUser"},{"name":"selectedFor","kind":"object","type":"WorkRequest","relationName":"SelectedQuotation"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"quotations","schema":null},"StaffApplication":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"experience","kind":"scalar","type":"Int"},{"name":"experienceDetails","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"StaffApplicationStatus"},{"name":"applicantId","kind":"scalar","type":"String"},{"name":"applicant","kind":"object","type":"User","relationName":"StaffApplicationToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"staff_applications","schema":null},"StaffCategory":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"staffId","kind":"scalar","type":"String"},{"name":"staff","kind":"object","type":"User","relationName":"StaffCategoryToUser"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToStaffCategory"}],"dbName":"staff_category","schema":null},"StaffInvitation":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"requestId","kind":"scalar","type":"String"},{"name":"staffId","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"InvitationStatus"},{"name":"responseNote","kind":"scalar","type":"String"},{"name":"request","kind":"object","type":"WorkRequest","relationName":"StaffInvitationToWorkRequest"},{"name":"staff","kind":"object","type":"User","relationName":"StaffInvitationToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"staff_invitations","schema":null},"StaffLocation":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"division","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"staffId","kind":"scalar","type":"String"},{"name":"Staff","kind":"object","type":"User","relationName":"StaffLocationToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"staff_location","schema":null},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"needPasswordChange","kind":"scalar","type":"Boolean"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"googleId","kind":"scalar","type":"String"},{"name":"authProvider","kind":"enum","type":"AuthProvider"},{"name":"phone","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"division","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"postalCode","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"staffApplications","kind":"object","type":"StaffApplication","relationName":"StaffApplicationToUser"},{"name":"staffCategories","kind":"object","type":"StaffCategory","relationName":"StaffCategoryToUser"},{"name":"staffLocation","kind":"object","type":"StaffLocation","relationName":"StaffLocationToUser"},{"name":"workRequest","kind":"object","type":"WorkRequest","relationName":"UserToWorkRequest"},{"name":"quotations","kind":"object","type":"Quotation","relationName":"QuotationToUser"},{"name":"staffAssignments","kind":"object","type":"Assignment","relationName":"StaffAssignments"},{"name":"citizenAssignments","kind":"object","type":"Assignment","relationName":"CitizenAssignments"},{"name":"feedbacks","kind":"object","type":"Feedback","relationName":"FeedbackToUser"},{"name":"staffInvitations","kind":"object","type":"StaffInvitation","relationName":"StaffInvitationToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"users","schema":null},"WorkRequest":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"division","kind":"scalar","type":"String"},{"name":"city","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"postalCode","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"approvedFee","kind":"scalar","type":"Decimal"},{"name":"status","kind":"enum","type":"WorkStatus"},{"name":"rejectionReason","kind":"scalar","type":"String"},{"name":"citizenId","kind":"scalar","type":"String"},{"name":"citizen","kind":"object","type":"User","relationName":"UserToWorkRequest"},{"name":"departmentId","kind":"scalar","type":"String"},{"name":"department","kind":"object","type":"Department","relationName":"DepartmentToWorkRequest"},{"name":"selectedQuotationId","kind":"scalar","type":"String"},{"name":"selectedQuotation","kind":"object","type":"Quotation","relationName":"SelectedQuotation"},{"name":"quotations","kind":"object","type":"Quotation","relationName":"QuotationToWorkRequest"},{"name":"staffInvitations","kind":"object","type":"StaffInvitation","relationName":"StaffInvitationToWorkRequest"},{"name":"payments","kind":"object","type":"Payment","relationName":"PaymentToWorkRequest"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"assignment","kind":"object","type":"Assignment","relationName":"AssignmentToWorkRequest"}],"dbName":"work_requests","schema":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","applicant","staffApplications","staff","categories","workRequests","_count","department","staffCategories","category","Staff","staffLocation","workRequest","request","selectedFor","quotations","staffAssignments","citizenAssignments","assignment","citizen","feedbacks","staffInvitations","selectedQuotation","payment","sslcommerzPayment","payments","attachments","Assignment.findUnique","Assignment.findUniqueOrThrow","Assignment.findFirst","Assignment.findFirstOrThrow","Assignment.findMany","data","Assignment.createOne","Assignment.createMany","Assignment.createManyAndReturn","Assignment.updateOne","Assignment.updateMany","Assignment.updateManyAndReturn","create","update","Assignment.upsertOne","Assignment.deleteOne","Assignment.deleteMany","having","_avg","_sum","_min","_max","Assignment.groupBy","Assignment.aggregate","WorkAttachment.findUnique","WorkAttachment.findUniqueOrThrow","WorkAttachment.findFirst","WorkAttachment.findFirstOrThrow","WorkAttachment.findMany","WorkAttachment.createOne","WorkAttachment.createMany","WorkAttachment.createManyAndReturn","WorkAttachment.updateOne","WorkAttachment.updateMany","WorkAttachment.updateManyAndReturn","WorkAttachment.upsertOne","WorkAttachment.deleteOne","WorkAttachment.deleteMany","WorkAttachment.groupBy","WorkAttachment.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","Department.findUnique","Department.findUniqueOrThrow","Department.findFirst","Department.findFirstOrThrow","Department.findMany","Department.createOne","Department.createMany","Department.createManyAndReturn","Department.updateOne","Department.updateMany","Department.updateManyAndReturn","Department.upsertOne","Department.deleteOne","Department.deleteMany","Department.groupBy","Department.aggregate","Feedback.findUnique","Feedback.findUniqueOrThrow","Feedback.findFirst","Feedback.findFirstOrThrow","Feedback.findMany","Feedback.createOne","Feedback.createMany","Feedback.createManyAndReturn","Feedback.updateOne","Feedback.updateMany","Feedback.updateManyAndReturn","Feedback.upsertOne","Feedback.deleteOne","Feedback.deleteMany","Feedback.groupBy","Feedback.aggregate","Payment.findUnique","Payment.findUniqueOrThrow","Payment.findFirst","Payment.findFirstOrThrow","Payment.findMany","Payment.createOne","Payment.createMany","Payment.createManyAndReturn","Payment.updateOne","Payment.updateMany","Payment.updateManyAndReturn","Payment.upsertOne","Payment.deleteOne","Payment.deleteMany","Payment.groupBy","Payment.aggregate","SslCommerzPayment.findUnique","SslCommerzPayment.findUniqueOrThrow","SslCommerzPayment.findFirst","SslCommerzPayment.findFirstOrThrow","SslCommerzPayment.findMany","SslCommerzPayment.createOne","SslCommerzPayment.createMany","SslCommerzPayment.createManyAndReturn","SslCommerzPayment.updateOne","SslCommerzPayment.updateMany","SslCommerzPayment.updateManyAndReturn","SslCommerzPayment.upsertOne","SslCommerzPayment.deleteOne","SslCommerzPayment.deleteMany","SslCommerzPayment.groupBy","SslCommerzPayment.aggregate","Quotation.findUnique","Quotation.findUniqueOrThrow","Quotation.findFirst","Quotation.findFirstOrThrow","Quotation.findMany","Quotation.createOne","Quotation.createMany","Quotation.createManyAndReturn","Quotation.updateOne","Quotation.updateMany","Quotation.updateManyAndReturn","Quotation.upsertOne","Quotation.deleteOne","Quotation.deleteMany","Quotation.groupBy","Quotation.aggregate","StaffApplication.findUnique","StaffApplication.findUniqueOrThrow","StaffApplication.findFirst","StaffApplication.findFirstOrThrow","StaffApplication.findMany","StaffApplication.createOne","StaffApplication.createMany","StaffApplication.createManyAndReturn","StaffApplication.updateOne","StaffApplication.updateMany","StaffApplication.updateManyAndReturn","StaffApplication.upsertOne","StaffApplication.deleteOne","StaffApplication.deleteMany","StaffApplication.groupBy","StaffApplication.aggregate","StaffCategory.findUnique","StaffCategory.findUniqueOrThrow","StaffCategory.findFirst","StaffCategory.findFirstOrThrow","StaffCategory.findMany","StaffCategory.createOne","StaffCategory.createMany","StaffCategory.createManyAndReturn","StaffCategory.updateOne","StaffCategory.updateMany","StaffCategory.updateManyAndReturn","StaffCategory.upsertOne","StaffCategory.deleteOne","StaffCategory.deleteMany","StaffCategory.groupBy","StaffCategory.aggregate","StaffInvitation.findUnique","StaffInvitation.findUniqueOrThrow","StaffInvitation.findFirst","StaffInvitation.findFirstOrThrow","StaffInvitation.findMany","StaffInvitation.createOne","StaffInvitation.createMany","StaffInvitation.createManyAndReturn","StaffInvitation.updateOne","StaffInvitation.updateMany","StaffInvitation.updateManyAndReturn","StaffInvitation.upsertOne","StaffInvitation.deleteOne","StaffInvitation.deleteMany","StaffInvitation.groupBy","StaffInvitation.aggregate","StaffLocation.findUnique","StaffLocation.findUniqueOrThrow","StaffLocation.findFirst","StaffLocation.findFirstOrThrow","StaffLocation.findMany","StaffLocation.createOne","StaffLocation.createMany","StaffLocation.createManyAndReturn","StaffLocation.updateOne","StaffLocation.updateMany","StaffLocation.updateManyAndReturn","StaffLocation.upsertOne","StaffLocation.deleteOne","StaffLocation.deleteMany","StaffLocation.groupBy","StaffLocation.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","WorkRequest.findUnique","WorkRequest.findUniqueOrThrow","WorkRequest.findFirst","WorkRequest.findFirstOrThrow","WorkRequest.findMany","WorkRequest.createOne","WorkRequest.createMany","WorkRequest.createManyAndReturn","WorkRequest.updateOne","WorkRequest.updateMany","WorkRequest.updateManyAndReturn","WorkRequest.upsertOne","WorkRequest.deleteOne","WorkRequest.deleteMany","WorkRequest.groupBy","WorkRequest.aggregate","AND","OR","NOT","id","title","description","division","city","address","postalCode","phone","approvedFee","WorkStatus","status","rejectionReason","citizenId","departmentId","selectedQuotationId","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","name","email","password","needPasswordChange","emailVerified","googleId","AuthProvider","authProvider","Role","role","district","isActive","isDeleted","deletedAt","every","some","none","staffId","requestId","InvitationStatus","responseNote","categoryId","experience","experienceDetails","StaffApplicationStatus","applicantId","proposedFee","QuotationStatus","paymentId","tranId","bankTranId","valId","cardType","cardIssuer","cardBrand","cardIssuerCountry","storeAmount","gatewayResponse","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","PaymentStatus","amount","currency","paymentGateway","merchantInvoiceNumber","paidAt","refundTrxId","refundAmount","refundReason","refundedAt","rating","comment","assignmentId","fileUrl","publicId","resourceType","fileType","fileName","AssignmentStatus","advanceAmount","requestId_staffId","staffId_categoryId","is","isNot","connectOrCreate","upsert","disconnect","delete","connect","createMany","set","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "6QeEAeABEQUAAOkDACAPAADkAwAgFQAA6QMAIBYAALQDACAcAADuAwAghQIAAOwDADCGAgAAIQAQhwIAAOwDADCIAgEAAAABkgIAAO0D4wIilAIBAKcDACGXAkAArQMAIZgCQACtAwAhtQIBAKcDACG2AgEAAAAB0QIQAOMDACHjAhAA4wMAIQEAAAABACALAwAA6QMAIIUCAAD-AwAwhgIAAAMAEIcCAAD-AwAwiAIBAKcDACGSAgAA_wO9AiKXAkAArQMAIZgCQACtAwAhugICAOsDACG7AgEApwMAIb0CAQCnAwAhAQMAAO8GACALAwAA6QMAIIUCAAD-AwAwhgIAAAMAEIcCAAD-AwAwiAIBAAAAAZICAAD_A70CIpcCQACtAwAhmAJAAK0DACG6AgIA6wMAIbsCAQCnAwAhvQIBAAAAAQMAAAADACABAAAEADACAAAFACAIBQAA6QMAIAsAAP0DACCFAgAA_AMAMIYCAAAHABCHAgAA_AMAMIgCAQCnAwAhtQIBAKcDACG5AgEApwMAIQIFAADvBgAgCwAA9AYAIAkFAADpAwAgCwAA_QMAIIUCAAD8AwAwhgIAAAcAEIcCAAD8AwAwiAIBAAAAAbUCAQCnAwAhuQIBAKcDACHlAgAA-wMAIAMAAAAHACABAAAIADACAAAJACAICQAA9gMAIAoAAK8DACCFAgAA-gMAMIYCAAALABCHAgAA-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_AQAgD4gCAQAAAAGSAgAAANECApcCQAAAAAGYAkAAAAABtgIBAAAAAckCgAAAAAHRAhAAAAAB0gIBAAAAAdMCAQAAAAHUAgEAAAAB1QJAAAAAAdYCAQAAAAHXAhAAAAAB2AIBAAAAAdkCQAAAAAEBIgAAwQEAMAEiAADBAQAwEQ8AAK4GACAaAADJBAAgiAIBAIYEACGSAgAAxgTRAiKXAkAAigQAIZgCQACKBAAhtgIBAIYEACHJAoAAAAAB0QIQAJgEACHSAgEAhgQAIdMCAQCGBAAh1AIBAIYEACHVAkAAxwQAIdYCAQCJBAAh1wIQAIcEACHYAgEAiQQAIdkCQADHBAAhAgAAADsAICIAAMQBACAPiAIBAIYEACGSAgAAxgTRAiKXAkAAigQAIZgCQACKBAAhtgIBAIYEACHJAoAAAAAB0QIQAJgEACHSAgEAhgQAIdMCAQCGBAAh1AIBAIYEACHVAkAAxwQAIdYCAQCJBAAh1wIQAIcEACHYAgEAiQQAIdkCQADHBAAhAgAAADkAICIAAMYBACACAAAAOQAgIgAAxgEAIAMAAAA7ACApAAC_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-AUAIA0AAPkFACAOAAD6BQAgEQAA-wUAIBIAAPwFACATAAD9BQAgFgAA_gUAIBcAAP8FACCIAgEAAAABiwIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZcCQAAAAAGYAkAAAAABpAIBAAAAAaUCAQAAAAGmAgEAAAABpwIgAAAAAagCIAAAAAGpAgEAAAABqwIAAACrAgKtAgAAAK0CAq4CAQAAAAGvAiAAAAABsAIgAAAAAbECQAAAAAEBIgAA3gIAIBOIAgEAAAABiwIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZcCQAAAAAGYAkAAAAABpAIBAAAAAaUCAQAAAAGmAgEAAAABpwIgAAAAAagCIAAAAAGpAgEAAAABqwIAAACrAgKtAgAAAK0CAq4CAQAAAAGvAiAAAAABsAIgAAAAAbECQAAAAAEBIgAA4AIAMAEiAADgAgAwHAQAAIMFACAKAACEBQAgDQAAhQUAIA4AAIYFACARAACHBQAgEgAAiAUAIBMAAIkFACAWAACKBQAgFwAAiwUAIIgCAQCGBAAhiwIBAIkEACGNAgEAiQQAIY4CAQCJBAAhjwIBAIkEACGXAkAAigQAIZgCQACKBAAhpAIBAIYEACGlAgEAhgQAIaYCAQCJBAAhpwIgAIAFACGoAiAAgAUAIakCAQCJBAAhqwIAAIEFqwIirQIAAIIFrQIirgIBAIkEACGvAiAAgAUAIbACIACABQAhsQJAAMcEACECAAAA1gIAICIAAOMCACATiAIBAIYEACGLAgEAiQQAIY0CAQCJBAAhjgIBAIkEACGPAgEAiQQAIZcCQACKBAAhmAJAAIoEACGkAgEAhgQAIaUCAQCGBAAhpgIBAIkEACGnAiAAgAUAIagCIACABQAhqQIBAIkEACGrAgAAgQWrAiKtAgAAggWtAiKuAgEAiQQAIa8CIACABQAhsAIgAIAFACGxAkAAxwQAIQIAAADZAgAgIgAA5QIAIAIAAADZAgAgIgAA5QIAIAMAAADWAgAgKQAA3gIAICoAAOMCACABAAAA1gIAIAEAAADZAgAgCwgAAP0EACAxAAD_BAAgMgAA_gQAIIsCAACABAAgjQIAAIAEACCOAgAAgAQAII8CAACABAAgpgIAAIAEACCpAgAAgAQAIK4CAACABAAgsQIAAIAEACAWhQIAAJkDADCGAgAA7AIAEIcCAACZAwAwiAIBAIgDACGLAgEAiwMAIY0CAQCLAwAhjgIBAIsDACGPAgEAiwMAIZcCQACMAwAhmAJAAIwDACGkAgEAiAMAIaUCAQCIAwAhpgIBAIsDACGnAiAAmgMAIagCIACaAwAhqQIBAIsDACGrAgAAmwOrAiKtAgAAnAOtAiKuAgEAiwMAIa8CIACaAwAhsAIgAJoDACGxAkAAnQMAIQMAAADZAgAgAQAA6wIAMC4AAOwCACADAAAA2QIAIAEAANoCADACAADWAgAgAQAAABEAIAEAAAARACADAAAADwAgAQAAEAAwAgAAEQAgAwAAAA8AIAEAABAAMAIAABEAIAMAAAAPACABAAAQADACAAARACAXCQAA9AQAIBEAAPUEACAUAAD4BAAgFQAA8wQAIBcAAPYEACAYAAD8BAAgGwAA9wQAIIgCAQAAAAGJAgEAAAABigIBAAAAAYsCAQAAAAGMAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABkAIQAAAAAZICAAAAkgICkwIBAAAAAZQCAQAAAAGVAgEAAAABlgIBAAAAAZcCQAAAAAGYAkAAAAABASIAAPQCACAQiAIBAAAAAYkCAQAAAAGKAgEAAAABiwIBAAAAAYwCAQAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAGQAhAAAAABkgIAAACSAgKTAgEAAAABlAIBAAAAAZUCAQAAAAGWAgEAAAABlwJAAAAAAZgCQAAAAAEBIgAA9gIAMAEiAAD2AgAwAQAAABwAIBcJAACMBAAgEQAAjgQAIBQAAJEEACAVAACLBAAgFwAAjwQAIBgAAI0EACAbAACQBAAgiAIBAIYEACGJAgEAhgQAIYoCAQCGBAAhiwIBAIYEACGMAgEAhgQAIY0CAQCGBAAhjgIBAIYEACGPAgEAhgQAIZACEACHBAAhkgIAAIgEkgIikwIBAIkEACGUAgEAhgQAIZUCAQCGBAAhlgIBAIkEACGXAkAAigQAIZgCQACKBAAhAgAAABEAICIAAPoCACAQiAIBAIYEACGJAgEAhgQAIYoCAQCGBAAhiwIBAIYEACGMAgEAhgQAIY0CAQCGBAAhjgIBAIYEACGPAgEAhgQAIZACEACHBAAhkgIAAIgEkgIikwIBAIkEACGUAgEAhgQAIZUCAQCGBAAhlgIBAIkEACGXAkAAigQAIZgCQACKBAAhAgAAAA8AICIAAPwCACACAAAADwAgIgAA_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_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-gMAMIYCAAALABCHAgAA-gMAMIgCAQCnAwAhlQIBAKcDACGkAgEApwMAIQK1AgEAAAABuQIBAAAAAQgFAADpAwAgCwAA_QMAIIUCAAD8AwAwhgIAAAcAEIcCAAD8AwAwiAIBAKcDACG1AgEApwMAIbkCAQCnAwAhCgkAAPYDACAKAACvAwAghQIAAPoDADCGAgAACwAQhwIAAPoDADCIAgEApwMAIZUCAQCnAwAhpAIBAKcDACHmAgAACwAg5wIAAAsAIAsDAADpAwAghQIAAP4DADCGAgAAAwAQhwIAAP4DADCIAgEApwMAIZICAAD_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_BAAgAykAAJIEACDoAgAAkwQAIOwCAAABACAIBQAA-gQAIBAAAPsEACCIAgEAAAABkgIAAADAAgKXAkAAAAABmAJAAAAAAbUCAQAAAAG-AhAAAAABAykAAL8HACDoAgAAwAcAIOwCAADWAgAgAykAAO4EACDoAgAA7wQAIOwCAAARACADKQAAvQcAIOgCAAC-BwAg7AIAAB4AIAAAAAHuAiAAAAABAe4CAAAAqwICAe4CAAAArQICCykAAOoFADAqAADvBQAw6AIAAOsFADDpAgAA7AUAMOoCAADuBQAw6wIAAO4FADDsAgAA7gUAMO0CAADtBQAg7gIAAO4FADDvAgAA8AUAMPACAADxBQAwCykAANwFADAqAADhBQAw6AIAAN0FADDpAgAA3gUAMOoCAADgBQAw6wIAAOAFADDsAgAA4AUAMO0CAADfBQAg7gIAAOAFADDvAgAA4gUAMPACAADjBQAwCykAANAFADAqAADVBQAw6AIAANEFADDpAgAA0gUAMOoCAADUBQAw6wIAANQFADDsAgAA1AUAMO0CAADTBQAg7gIAANQFADDvAgAA1gUAMPACAADXBQAwCykAAMQFADAqAADJBQAw6AIAAMUFADDpAgAAxgUAMOoCAADIBQAw6wIAAMgFADDsAgAAyAUAMO0CAADHBQAg7gIAAMgFADDvAgAAygUAMPACAADLBQAwCykAALkFADAqAAC9BQAw6AIAALoFADDpAgAAuwUAMOoCAADkBAAw6wIAAOQEADDsAgAA5AQAMO0CAAC8BQAg7gIAAOQEADDvAgAAvgUAMPACAADnBAAwCykAALAFADAqAAC0BQAw6AIAALEFADDpAgAAsgUAMOoCAACmBQAw6wIAAKYFADDsAgAApgUAMO0CAACzBQAg7gIAAKYFADDvAgAAtQUAMPACAACpBQAwCykAAKIFADAqAACnBQAw6AIAAKMFADDpAgAApAUAMOoCAACmBQAw6wIAAKYFADDsAgAApgUAMO0CAAClBQAg7gIAAKYFADDvAgAAqAUAMPACAACpBQAwCykAAJcFADAqAACbBQAw6AIAAJgFADDpAgAAmQUAMOoCAAChBAAw6wIAAKEEADDsAgAAoQQAMO0CAACaBQAg7gIAAKEEADDvAgAAnAUAMPACAACkBAAwCykAAIwFADAqAACQBQAw6AIAAI0FADDpAgAAjgUAMOoCAADVBAAw6wIAANUEADDsAgAA1QQAMO0CAACPBQAg7gIAANUEADDvAgAAkQUAMPACAADYBAAwBw8AAJYFACCIAgEAAAABkgIAAAC4AgKXAkAAAAABmAJAAAAAAbYCAQAAAAG4AgEAAAABAgAAACsAICkAAJUFACADAAAAKwAgKQAAlQUAICoAAJMFACABIgAAvAcAMAIAAAArACAiAACTBQAgAgAAANkEACAiAACSBQAgBogCAQCGBAAhkgIAANsEuAIilwJAAIoEACGYAkAAigQAIbYCAQCGBAAhuAIBAIkEACEHDwAAlAUAIIgCAQCGBAAhkgIAANsEuAIilwJAAIoEACGYAkAAigQAIbYCAQCGBAAhuAIBAIkEACEFKQAAtwcAICoAALoHACDoAgAAuAcAIOkCAAC5BwAg7AIAABEAIAcPAACWBQAgiAIBAAAAAZICAAAAuAIClwJAAAAAAZgCQAAAAAG2AgEAAAABuAIBAAAAAQMpAAC3BwAg6AIAALgHACDsAgAAEQAgBxQAAKEFACCIAgEAAAABlwJAAAAAAZgCQAAAAAHaAgIAAAAB2wIBAAAAAdwCAQAAAAECAAAAJwAgKQAAoAUAIAMAAAAnACApAACgBQAgKgAAngUAIAEiAAC2BwAwAgAAACcAICIAAJ4FACACAAAApQQAICIAAJ0FACAGiAIBAIYEACGXAkAAigQAIZgCQACKBAAh2gICAKcEACHbAgEAiQQAIdwCAQCGBAAhBxQAAJ8FACCIAgEAhgQAIZcCQACKBAAhmAJAAIoEACHaAgIApwQAIdsCAQCJBAAh3AIBAIYEACEFKQAAsQcAICoAALQHACDoAgAAsgcAIOkCAACzBwAg7AIAAAEAIAcUAAChBQAgiAIBAAAAAZcCQAAAAAGYAkAAAAAB2gICAAAAAdsCAQAAAAHcAgEAAAABAykAALEHACDoAgAAsgcAIOwCAAABACAMBQAAuAQAIA8AAK8FACAWAAC7BAAgHAAAugQAIIgCAQAAAAGSAgAAAOMCApcCQAAAAAGYAkAAAAABtQIBAAAAAbYCAQAAAAHRAhAAAAAB4wIQAAAAAQIAAAABACApAACuBQAgAwAAAAEAICkAAK4FACAqAACsBQAgASIAALAHADARBQAA6QMAIA8AAOQDACAVAADpAwAgFgAAtAMAIBwAAO4DACCFAgAA7AMAMIYCAAAhABCHAgAA7AMAMIgCAQAAAAGSAgAA7QPjAiKUAgEApwMAIZcCQACtAwAhmAJAAK0DACG1AgEApwMAIbYCAQAAAAHRAhAA4wMAIeMCEADjAwAhAgAAAAEAICIAAKwFACACAAAAqgUAICIAAKsFACAMhQIAAKkFADCGAgAAqgUAEIcCAACpBQAwiAIBAKcDACGSAgAA7QPjAiKUAgEApwMAIZcCQACtAwAhmAJAAK0DACG1AgEApwMAIbYCAQCnAwAh0QIQAOMDACHjAhAA4wMAIQyFAgAAqQUAMIYCAACqBQAQhwIAAKkFADCIAgEApwMAIZICAADtA-MCIpQCAQCnAwAhlwJAAK0DACGYAkAArQMAIbUCAQCnAwAhtgIBAKcDACHRAhAA4wMAIeMCEADjAwAhCIgCAQCGBAAhkgIAAJcE4wIilwJAAIoEACGYAkAAigQAIbUCAQCGBAAhtgIBAIYEACHRAhAAmAQAIeMCEACYBAAhDAUAAJkEACAPAACtBQAgFgAAnAQAIBwAAJsEACCIAgEAhgQAIZICAACXBOMCIpcCQACKBAAhmAJAAIoEACG1AgEAhgQAIbYCAQCGBAAh0QIQAJgEACHjAhAAmAQAIQUpAACrBwAgKgAArgcAIOgCAACsBwAg6QIAAK0HACDsAgAAEQAgDAUAALgEACAPAACvBQAgFgAAuwQAIBwAALoEACCIAgEAAAABkgIAAADjAgKXAkAAAAABmAJAAAAAAbUCAQAAAAG2AgEAAAAB0QIQAAAAAeMCEAAAAAEDKQAAqwcAIOgCAACsBwAg7AIAABEAIAwPAACvBQAgFQAAuQQAIBYAALsEACAcAAC6BAAgiAIBAAAAAZICAAAA4wIClAIBAAAAAZcCQAAAAAGYAkAAAAABtgIBAAAAAdECEAAAAAHjAhAAAAABAgAAAAEAICkAALgFACADAAAAAQAgKQAAuAUAICoAALcFACABIgAAqgcAMAIAAAABACAiAAC3BQAgAgAAAKoFACAiAAC2BQAgCIgCAQCGBAAhkgIAAJcE4wIilAIBAIYEACGXAkAAigQAIZgCQACKBAAhtgIBAIYEACHRAhAAmAQAIeMCEACYBAAhDA8AAK0FACAVAACaBAAgFgAAnAQAIBwAAJsEACCIAgEAhgQAIZICAACXBOMCIpQCAQCGBAAhlwJAAIoEACGYAkAAigQAIbYCAQCGBAAh0QIQAJgEACHjAhAAmAQAIQwPAACvBQAgFQAAuQQAIBYAALsEACAcAAC6BAAgiAIBAAAAAZICAAAA4wIClAIBAAAAAZcCQAAAAAGYAkAAAAABtgIBAAAAAdECEAAAAAHjAhAAAAABCA8AAMMFACAQAAD7BAAgiAIBAAAAAZICAAAAwAIClwJAAAAAAZgCQAAAAAG2AgEAAAABvgIQAAAAAQIAAAAeACApAADCBQAgAwAAAB4AICkAAMIFACAqAADABQAgASIAAKkHADACAAAAHgAgIgAAwAUAIAIAAADoBAAgIgAAvwUAIAaIAgEAhgQAIZICAADqBMACIpcCQACKBAAhmAJAAIoEACG2AgEAhgQAIb4CEACYBAAhCA8AAMEFACAQAADtBAAgiAIBAIYEACGSAgAA6gTAAiKXAkAAigQAIZgCQACKBAAhtgIBAIYEACG-AhAAmAQAIQUpAACkBwAgKgAApwcAIOgCAAClBwAg6QIAAKYHACDsAgAAEQAgCA8AAMMFACAQAAD7BAAgiAIBAAAAAZICAAAAwAIClwJAAAAAAZgCQAAAAAG2AgEAAAABvgIQAAAAAQMpAACkBwAg6AIAAKUHACDsAgAAEQAgFQkAAPQEACARAAD1BAAgFAAA-AQAIBcAAPYEACAYAAD8BAAgGwAA9wQAIIgCAQAAAAGJAgEAAAABigIBAAAAAYsCAQAAAAGMAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABkAIQAAAAAZICAAAAkgICkwIBAAAAAZUCAQAAAAGWAgEAAAABlwJAAAAAAZgCQAAAAAECAAAAEQAgKQAAzwUAIAMAAAARACApAADPBQAgKgAAzgUAIAEiAACjBwAwGgkAAPYDACARAACyAwAgFAAA-QMAIBUAAOkDACAXAAC1AwAgGAAA9wMAIBsAAPgDACCFAgAA9AMAMIYCAAAPABCHAgAA9AMAMIgCAQAAAAGJAgEApwMAIYoCAQCnAwAhiwIBAKcDACGMAgEApwMAIY0CAQCnAwAhjgIBAKcDACGPAgEApwMAIZACEADOAwAhkgIAAPUDkgIikwIBAKgDACGUAgEApwMAIZUCAQCnAwAhlgIBAAAAAZcCQACtAwAhmAJAAK0DACECAAAAEQAgIgAAzgUAIAIAAADMBQAgIgAAzQUAIBOFAgAAywUAMIYCAADMBQAQhwIAAMsFADCIAgEApwMAIYkCAQCnAwAhigIBAKcDACGLAgEApwMAIYwCAQCnAwAhjQIBAKcDACGOAgEApwMAIY8CAQCnAwAhkAIQAM4DACGSAgAA9QOSAiKTAgEAqAMAIZQCAQCnAwAhlQIBAKcDACGWAgEAqAMAIZcCQACtAwAhmAJAAK0DACEThQIAAMsFADCGAgAAzAUAEIcCAADLBQAwiAIBAKcDACGJAgEApwMAIYoCAQCnAwAhiwIBAKcDACGMAgEApwMAIY0CAQCnAwAhjgIBAKcDACGPAgEApwMAIZACEADOAwAhkgIAAPUDkgIikwIBAKgDACGUAgEApwMAIZUCAQCnAwAhlgIBAKgDACGXAkAArQMAIZgCQACtAwAhD4gCAQCGBAAhiQIBAIYEACGKAgEAhgQAIYsCAQCGBAAhjAIBAIYEACGNAgEAhgQAIY4CAQCGBAAhjwIBAIYEACGQAhAAhwQAIZICAACIBJICIpMCAQCJBAAhlQIBAIYEACGWAgEAiQQAIZcCQACKBAAhmAJAAIoEACEVCQAAjAQAIBEAAI4EACAUAACRBAAgFwAAjwQAIBgAAI0EACAbAACQBAAgiAIBAIYEACGJAgEAhgQAIYoCAQCGBAAhiwIBAIYEACGMAgEAhgQAIY0CAQCGBAAhjgIBAIYEACGPAgEAhgQAIZACEACHBAAhkgIAAIgEkgIikwIBAIkEACGVAgEAhgQAIZYCAQCJBAAhlwJAAIoEACGYAkAAigQAIRUJAAD0BAAgEQAA9QQAIBQAAPgEACAXAAD2BAAgGAAA_AQAIBsAAPcEACCIAgEAAAABiQIBAAAAAYoCAQAAAAGLAgEAAAABjAIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZACEAAAAAGSAgAAAJICApMCAQAAAAGVAgEAAAABlgIBAAAAAZcCQAAAAAGYAkAAAAABBYgCAQAAAAGLAgEAAAABjQIBAAAAAZcCQAAAAAGYAkAAAAABAgAAABkAICkAANsFACADAAAAGQAgKQAA2wUAICoAANoFACABIgAAogcAMAoMAADpAwAghQIAAPMDADCGAgAAFwAQhwIAAPMDADCIAgEAAAABiwIBAKcDACGNAgEApwMAIZcCQACtAwAhmAJAAK0DACG1AgEApwMAIQIAAAAZACAiAADaBQAgAgAAANgFACAiAADZBQAgCYUCAADXBQAwhgIAANgFABCHAgAA1wUAMIgCAQCnAwAhiwIBAKcDACGNAgEApwMAIZcCQACtAwAhmAJAAK0DACG1AgEApwMAIQmFAgAA1wUAMIYCAADYBQAQhwIAANcFADCIAgEApwMAIYsCAQCnAwAhjQIBAKcDACGXAkAArQMAIZgCQACtAwAhtQIBAKcDACEFiAIBAIYEACGLAgEAhgQAIY0CAQCGBAAhlwJAAIoEACGYAkAAigQAIQWIAgEAhgQAIYsCAQCGBAAhjQIBAIYEACGXAkAAigQAIZgCQACKBAAhBYgCAQAAAAGLAgEAAAABjQIBAAAAAZcCQAAAAAGYAkAAAAABAwsAAOkFACCIAgEAAAABuQIBAAAAAQIAAAAJACApAADoBQAgAwAAAAkAICkAAOgFACAqAADmBQAgASIAAKEHADAJBQAA6QMAIAsAAP0DACCFAgAA_AMAMIYCAAAHABCHAgAA_AMAMIgCAQAAAAG1AgEApwMAIbkCAQCnAwAh5QIAAPsDACACAAAACQAgIgAA5gUAIAIAAADkBQAgIgAA5QUAIAaFAgAA4wUAMIYCAADkBQAQhwIAAOMFADCIAgEApwMAIbUCAQCnAwAhuQIBAKcDACEGhQIAAOMFADCGAgAA5AUAEIcCAADjBQAwiAIBAKcDACG1AgEApwMAIbkCAQCnAwAhAogCAQCGBAAhuQIBAIYEACEDCwAA5wUAIIgCAQCGBAAhuQIBAIYEACEFKQAAnAcAICoAAJ8HACDoAgAAnQcAIOkCAACeBwAg7AIAAA0AIAMLAADpBQAgiAIBAAAAAbkCAQAAAAEDKQAAnAcAIOgCAACdBwAg7AIAAA0AIAaIAgEAAAABkgIAAAC9AgKXAkAAAAABmAJAAAAAAboCAgAAAAG7AgEAAAABAgAAAAUAICkAAPYFACADAAAABQAgKQAA9gUAICoAAPUFACABIgAAmwcAMAsDAADpAwAghQIAAP4DADCGAgAAAwAQhwIAAP4DADCIAgEAAAABkgIAAP8DvQIilwJAAK0DACGYAkAArQMAIboCAgDrAwAhuwIBAKcDACG9AgEAAAABAgAAAAUAICIAAPUFACACAAAA8gUAICIAAPMFACAKhQIAAPEFADCGAgAA8gUAEIcCAADxBQAwiAIBAKcDACGSAgAA_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_wYAMAIAAAAJACAiAADWBgAgAgAAAOQFACAiAADVBgAgAogCAQCGBAAhtQIBAIYEACEDBQAAkwYAIIgCAQCGBAAhtQIBAIYEACEDBQAAlAYAIIgCAQAAAAG1AgEAAAABAwoAANkGACCIAgEAAAABpAIBAAAAAQQpAADPBgAw6AIAANAGADDsAgAA4AUAMO0CAADSBgAgBCkAAMMGADDoAgAAxAYAMOwCAADHBgAw7QIAAMYGACAEKQAAugYAMOgCAAC7BgAw7AIAAMgFADDtAgAAvQYAIAAAAAAFKQAA-gYAICoAAP0GACDoAgAA-wYAIOkCAAD8BgAg7AIAAIsBACADKQAA-gYAIOgCAAD7BgAg7AIAAIsBACAAAAAFKQAA9QYAICoAAPgGACDoAgAA9gYAIOkCAAD3BgAg7AIAAAEAIAMpAAD1BgAg6AIAAPYGACDsAgAAAQAgAAAAAAAFBQAA7wYAIA8AAO0GACAVAADvBgAgFgAAhgYAIBwAAPAGACAKCQAA8QYAIBEAAIQGACAUAADsBgAgFQAA7wYAIBcAAIcGACAYAADyBgAgGwAA8wYAIJACAACABAAgkwIAAIAEACCWAgAAgAQAIAkZAACoBgAgwgIAAIAEACDDAgAAgAQAIMQCAACABAAgxQIAAIAEACDGAgAAgAQAIMcCAACABAAgyAIAAIAEACDJAgAAgAQAIBEEAACABgAgCgAAgQYAIA0AAIIGACAOAACDBgAgEQAAhAYAIBIAAIUGACATAACFBgAgFgAAhgYAIBcAAIcGACCLAgAAgAQAII0CAACABAAgjgIAAIAEACCPAgAAgAQAIKYCAACABAAgqQIAAIAEACCuAgAAgAQAILECAACABAAgAAIGAADcBgAgBwAAgwYAIAMFAADvBgAgDwAA7QYAIBAAAO0GACAAAgkAAPEGACAKAACBBgAgDQUAALgEACAPAACvBQAgFQAAuQQAIBYAALsEACCIAgEAAAABkgIAAADjAgKUAgEAAAABlwJAAAAAAZgCQAAAAAG1AgEAAAABtgIBAAAAAdECEAAAAAHjAhAAAAABAgAAAAEAICkAAPUGACADAAAAIQAgKQAA9QYAICoAAPkGACAPAAAAIQAgBQAAmQQAIA8AAK0FACAVAACaBAAgFgAAnAQAICIAAPkGACCIAgEAhgQAIZICAACXBOMCIpQCAQCGBAAhlwJAAIoEACGYAkAAigQAIbUCAQCGBAAhtgIBAIYEACHRAhAAmAQAIeMCEACYBAAhDQUAAJkEACAPAACtBQAgFQAAmgQAIBYAAJwEACCIAgEAhgQAIZICAACXBOMCIpQCAQCGBAAhlwJAAIoEACGYAkAAigQAIbUCAQCGBAAhtgIBAIYEACHRAhAAmAQAIeMCEACYBAAhAwcAANsGACCIAgEAAAABpAIBAAAAAQIAAACLAQAgKQAA-gYAIAMAAACOAQAgKQAA-gYAICoAAP4GACAFAAAAjgEAIAcAALkGACAiAAD-BgAgiAIBAIYEACGkAgEAhgQAIQMHAAC5BgAgiAIBAIYEACGkAgEAhgQAIQKIAgEAAAABtQIBAAAAAQKIAgEAAAABpAIBAAAAAQ-IAgEAAAABiQIBAAAAAYoCAQAAAAGLAgEAAAABjAIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZACEAAAAAGSAgAAAJICApMCAQAAAAGUAgEAAAABlgIBAAAAAZcCQAAAAAGYAkAAAAABFgkAAPQEACARAAD1BAAgFAAA-AQAIBUAAPMEACAXAAD2BAAgGAAA_AQAIIgCAQAAAAGJAgEAAAABigIBAAAAAYsCAQAAAAGMAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABkAIQAAAAAZICAAAAkgICkwIBAAAAAZQCAQAAAAGVAgEAAAABlgIBAAAAAZcCQAAAAAGYAkAAAAABAgAAABEAICkAAIIHACADAAAADwAgKQAAggcAICoAAIYHACAYAAAADwAgCQAAjAQAIBEAAI4EACAUAACRBAAgFQAAiwQAIBcAAI8EACAYAACNBAAgIgAAhgcAIIgCAQCGBAAhiQIBAIYEACGKAgEAhgQAIYsCAQCGBAAhjAIBAIYEACGNAgEAhgQAIY4CAQCGBAAhjwIBAIYEACGQAhAAhwQAIZICAACIBJICIpMCAQCJBAAhlAIBAIYEACGVAgEAhgQAIZYCAQCJBAAhlwJAAIoEACGYAkAAigQAIRYJAACMBAAgEQAAjgQAIBQAAJEEACAVAACLBAAgFwAAjwQAIBgAAI0EACCIAgEAhgQAIYkCAQCGBAAhigIBAIYEACGLAgEAhgQAIYwCAQCGBAAhjQIBAIYEACGOAgEAhgQAIY8CAQCGBAAhkAIQAIcEACGSAgAAiASSAiKTAgEAiQQAIZQCAQCGBAAhlQIBAIYEACGWAgEAiQQAIZcCQACKBAAhmAJAAIoEACEQDwAArwYAIIgCAQAAAAGSAgAAANECApcCQAAAAAGYAkAAAAABtgIBAAAAAckCgAAAAAHRAhAAAAAB0gIBAAAAAdMCAQAAAAHUAgEAAAAB1QJAAAAAAdYCAQAAAAHXAhAAAAAB2AIBAAAAAdkCQAAAAAECAAAAOwAgKQAAhwcAIAMAAAA5ACApAACHBwAgKgAAiwcAIBIAAAA5ACAPAACuBgAgIgAAiwcAIIgCAQCGBAAhkgIAAMYE0QIilwJAAIoEACGYAkAAigQAIbYCAQCGBAAhyQKAAAAAAdECEACYBAAh0gIBAIYEACHTAgEAhgQAIdQCAQCGBAAh1QJAAMcEACHWAgEAiQQAIdcCEACHBAAh2AIBAIkEACHZAkAAxwQAIRAPAACuBgAgiAIBAIYEACGSAgAAxgTRAiKXAkAAigQAIZgCQACKBAAhtgIBAIYEACHJAoAAAAAB0QIQAJgEACHSAgEAhgQAIdMCAQCGBAAh1AIBAIYEACHVAkAAxwQAIdYCAQCJBAAh1wIQAIcEACHYAgEAiQQAIdkCQADHBAAhGwoAAPgFACANAAD5BQAgDgAA-gUAIBEAAPsFACASAAD8BQAgEwAA_QUAIBYAAP4FACAXAAD_BQAgiAIBAAAAAYsCAQAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAGXAkAAAAABmAJAAAAAAaQCAQAAAAGlAgEAAAABpgIBAAAAAacCIAAAAAGoAiAAAAABqQIBAAAAAasCAAAAqwICrQIAAACtAgKuAgEAAAABrwIgAAAAAbACIAAAAAGxAkAAAAABAgAAANYCACApAACMBwAgAwAAANkCACApAACMBwAgKgAAkAcAIB0AAADZAgAgCgAAhAUAIA0AAIUFACAOAACGBQAgEQAAhwUAIBIAAIgFACATAACJBQAgFgAAigUAIBcAAIsFACAiAACQBwAgiAIBAIYEACGLAgEAiQQAIY0CAQCJBAAhjgIBAIkEACGPAgEAiQQAIZcCQACKBAAhmAJAAIoEACGkAgEAhgQAIaUCAQCGBAAhpgIBAIkEACGnAiAAgAUAIagCIACABQAhqQIBAIkEACGrAgAAgQWrAiKtAgAAggWtAiKuAgEAiQQAIa8CIACABQAhsAIgAIAFACGxAkAAxwQAIRsKAACEBQAgDQAAhQUAIA4AAIYFACARAACHBQAgEgAAiAUAIBMAAIkFACAWAACKBQAgFwAAiwUAIIgCAQCGBAAhiwIBAIkEACGNAgEAiQQAIY4CAQCJBAAhjwIBAIkEACGXAkAAigQAIZgCQACKBAAhpAIBAIYEACGlAgEAhgQAIaYCAQCJBAAhpwIgAIAFACGoAiAAgAUAIakCAQCJBAAhqwIAAIEFqwIirQIAAIIFrQIirgIBAIkEACGvAiAAgAUAIbACIACABQAhsQJAAMcEACEbBAAA9wUAIA0AAPkFACAOAAD6BQAgEQAA-wUAIBIAAPwFACATAAD9BQAgFgAA_gUAIBcAAP8FACCIAgEAAAABiwIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZcCQAAAAAGYAkAAAAABpAIBAAAAAaUCAQAAAAGmAgEAAAABpwIgAAAAAagCIAAAAAGpAgEAAAABqwIAAACrAgKtAgAAAK0CAq4CAQAAAAGvAiAAAAABsAIgAAAAAbECQAAAAAECAAAA1gIAICkAAJEHACADAAAA2QIAICkAAJEHACAqAACVBwAgHQAAANkCACAEAACDBQAgDQAAhQUAIA4AAIYFACARAACHBQAgEgAAiAUAIBMAAIkFACAWAACKBQAgFwAAiwUAICIAAJUHACCIAgEAhgQAIYsCAQCJBAAhjQIBAIkEACGOAgEAiQQAIY8CAQCJBAAhlwJAAIoEACGYAkAAigQAIaQCAQCGBAAhpQIBAIYEACGmAgEAiQQAIacCIACABQAhqAIgAIAFACGpAgEAiQQAIasCAACBBasCIq0CAACCBa0CIq4CAQCJBAAhrwIgAIAFACGwAiAAgAUAIbECQADHBAAhGwQAAIMFACANAACFBQAgDgAAhgUAIBEAAIcFACASAACIBQAgEwAAiQUAIBYAAIoFACAXAACLBQAgiAIBAIYEACGLAgEAiQQAIY0CAQCJBAAhjgIBAIkEACGPAgEAiQQAIZcCQACKBAAhmAJAAIoEACGkAgEAhgQAIaUCAQCGBAAhpgIBAIkEACGnAiAAgAUAIagCIACABQAhqQIBAIkEACGrAgAAgQWrAiKtAgAAggWtAiKuAgEAiQQAIa8CIACABQAhsAIgAIAFACGxAkAAxwQAIRsEAAD3BQAgCgAA-AUAIA4AAPoFACARAAD7BQAgEgAA_AUAIBMAAP0FACAWAAD-BQAgFwAA_wUAIIgCAQAAAAGLAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABlwJAAAAAAZgCQAAAAAGkAgEAAAABpQIBAAAAAaYCAQAAAAGnAiAAAAABqAIgAAAAAakCAQAAAAGrAgAAAKsCAq0CAAAArQICrgIBAAAAAa8CIAAAAAGwAiAAAAABsQJAAAAAAQIAAADWAgAgKQAAlgcAIAMAAADZAgAgKQAAlgcAICoAAJoHACAdAAAA2QIAIAQAAIMFACAKAACEBQAgDgAAhgUAIBEAAIcFACASAACIBQAgEwAAiQUAIBYAAIoFACAXAACLBQAgIgAAmgcAIIgCAQCGBAAhiwIBAIkEACGNAgEAiQQAIY4CAQCJBAAhjwIBAIkEACGXAkAAigQAIZgCQACKBAAhpAIBAIYEACGlAgEAhgQAIaYCAQCJBAAhpwIgAIAFACGoAiAAgAUAIakCAQCJBAAhqwIAAIEFqwIirQIAAIIFrQIirgIBAIkEACGvAiAAgAUAIbACIACABQAhsQJAAMcEACEbBAAAgwUAIAoAAIQFACAOAACGBQAgEQAAhwUAIBIAAIgFACATAACJBQAgFgAAigUAIBcAAIsFACCIAgEAhgQAIYsCAQCJBAAhjQIBAIkEACGOAgEAiQQAIY8CAQCJBAAhlwJAAIoEACGYAkAAigQAIaQCAQCGBAAhpQIBAIYEACGmAgEAiQQAIacCIACABQAhqAIgAIAFACGpAgEAiQQAIasCAACBBasCIq0CAACCBa0CIq4CAQCJBAAhrwIgAIAFACGwAiAAgAUAIbECQADHBAAhBogCAQAAAAGSAgAAAL0CApcCQAAAAAGYAkAAAAABugICAAAAAbsCAQAAAAEECQAA4QYAIIgCAQAAAAGVAgEAAAABpAIBAAAAAQIAAAANACApAACcBwAgAwAAAAsAICkAAJwHACAqAACgBwAgBgAAAAsAIAkAAOAGACAiAACgBwAgiAIBAIYEACGVAgEAhgQAIaQCAQCGBAAhBAkAAOAGACCIAgEAhgQAIZUCAQCGBAAhpAIBAIYEACECiAIBAAAAAbkCAQAAAAEFiAIBAAAAAYsCAQAAAAGNAgEAAAABlwJAAAAAAZgCQAAAAAEPiAIBAAAAAYkCAQAAAAGKAgEAAAABiwIBAAAAAYwCAQAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAGQAhAAAAABkgIAAACSAgKTAgEAAAABlQIBAAAAAZYCAQAAAAGXAkAAAAABmAJAAAAAARYJAAD0BAAgFAAA-AQAIBUAAPMEACAXAAD2BAAgGAAA_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_AQAIBsAAPcEACCIAgEAAAABiQIBAAAAAYoCAQAAAAGLAgEAAAABjAIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZACEAAAAAGSAgAAAJICApMCAQAAAAGUAgEAAAABlQIBAAAAAZYCAQAAAAGXAkAAAAABmAJAAAAAAQIAAAARACApAAC3BwAgAwAAAA8AICkAALcHACAqAAC7BwAgGAAAAA8AIAkAAIwEACARAACOBAAgFAAAkQQAIBUAAIsEACAYAACNBAAgGwAAkAQAICIAALsHACCIAgEAhgQAIYkCAQCGBAAhigIBAIYEACGLAgEAhgQAIYwCAQCGBAAhjQIBAIYEACGOAgEAhgQAIY8CAQCGBAAhkAIQAIcEACGSAgAAiASSAiKTAgEAiQQAIZQCAQCGBAAhlQIBAIYEACGWAgEAiQQAIZcCQACKBAAhmAJAAIoEACEWCQAAjAQAIBEAAI4EACAUAACRBAAgFQAAiwQAIBgAAI0EACAbAACQBAAgiAIBAIYEACGJAgEAhgQAIYoCAQCGBAAhiwIBAIYEACGMAgEAhgQAIY0CAQCGBAAhjgIBAIYEACGPAgEAhgQAIZACEACHBAAhkgIAAIgEkgIikwIBAIkEACGUAgEAhgQAIZUCAQCGBAAhlgIBAIkEACGXAkAAigQAIZgCQACKBAAhBogCAQAAAAGSAgAAALgCApcCQAAAAAGYAkAAAAABtgIBAAAAAbgCAQAAAAEJBQAA-gQAIA8AAMMFACCIAgEAAAABkgIAAADAAgKXAkAAAAABmAJAAAAAAbUCAQAAAAG2AgEAAAABvgIQAAAAAQIAAAAeACApAAC9BwAgGwQAAPcFACAKAAD4BQAgDQAA-QUAIA4AAPoFACASAAD8BQAgEwAA_QUAIBYAAP4FACAXAAD_BQAgiAIBAAAAAYsCAQAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAGXAkAAAAABmAJAAAAAAaQCAQAAAAGlAgEAAAABpgIBAAAAAacCIAAAAAGoAiAAAAABqQIBAAAAAasCAAAAqwICrQIAAACtAgKuAgEAAAABrwIgAAAAAbACIAAAAAGxAkAAAAABAgAAANYCACApAAC_BwAgAwYAANoGACCIAgEAAAABpAIBAAAAAQIAAACLAQAgKQAAwQcAIBsEAAD3BQAgCgAA-AUAIA0AAPkFACARAAD7BQAgEgAA_AUAIBMAAP0FACAWAAD-BQAgFwAA_wUAIIgCAQAAAAGLAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABlwJAAAAAAZgCQAAAAAGkAgEAAAABpQIBAAAAAaYCAQAAAAGnAiAAAAABqAIgAAAAAakCAQAAAAGrAgAAAKsCAq0CAAAArQICrgIBAAAAAa8CIAAAAAGwAiAAAAABsQJAAAAAAQIAAADWAgAgKQAAwwcAIAMAAADZAgAgKQAAvwcAICoAAMcHACAdAAAA2QIAIAQAAIMFACAKAACEBQAgDQAAhQUAIA4AAIYFACASAACIBQAgEwAAiQUAIBYAAIoFACAXAACLBQAgIgAAxwcAIIgCAQCGBAAhiwIBAIkEACGNAgEAiQQAIY4CAQCJBAAhjwIBAIkEACGXAkAAigQAIZgCQACKBAAhpAIBAIYEACGlAgEAhgQAIaYCAQCJBAAhpwIgAIAFACGoAiAAgAUAIakCAQCJBAAhqwIAAIEFqwIirQIAAIIFrQIirgIBAIkEACGvAiAAgAUAIbACIACABQAhsQJAAMcEACEbBAAAgwUAIAoAAIQFACANAACFBQAgDgAAhgUAIBIAAIgFACATAACJBQAgFgAAigUAIBcAAIsFACCIAgEAhgQAIYsCAQCJBAAhjQIBAIkEACGOAgEAiQQAIY8CAQCJBAAhlwJAAIoEACGYAkAAigQAIaQCAQCGBAAhpQIBAIYEACGmAgEAiQQAIacCIACABQAhqAIgAIAFACGpAgEAiQQAIasCAACBBasCIq0CAACCBa0CIq4CAQCJBAAhrwIgAIAFACGwAiAAgAUAIbECQADHBAAhBogCAQAAAAGSAgAAAMACApcCQAAAAAGYAkAAAAABtQIBAAAAAb4CEAAAAAEbBAAA9wUAIAoAAPgFACANAAD5BQAgDgAA-gUAIBEAAPsFACASAAD8BQAgEwAA_QUAIBYAAP4FACCIAgEAAAABiwIBAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAZcCQAAAAAGYAkAAAAABpAIBAAAAAaUCAQAAAAGmAgEAAAABpwIgAAAAAagCIAAAAAGpAgEAAAABqwIAAACrAgKtAgAAAK0CAq4CAQAAAAGvAiAAAAABsAIgAAAAAbECQAAAAAECAAAA1gIAICkAAMkHACADAAAA2QIAICkAAMkHACAqAADNBwAgHQAAANkCACAEAACDBQAgCgAAhAUAIA0AAIUFACAOAACGBQAgEQAAhwUAIBIAAIgFACATAACJBQAgFgAAigUAICIAAM0HACCIAgEAhgQAIYsCAQCJBAAhjQIBAIkEACGOAgEAiQQAIY8CAQCJBAAhlwJAAIoEACGYAkAAigQAIaQCAQCGBAAhpQIBAIYEACGmAgEAiQQAIacCIACABQAhqAIgAIAFACGpAgEAiQQAIasCAACBBasCIq0CAACCBa0CIq4CAQCJBAAhrwIgAIAFACGwAiAAgAUAIbECQADHBAAhGwQAAIMFACAKAACEBQAgDQAAhQUAIA4AAIYFACARAACHBQAgEgAAiAUAIBMAAIkFACAWAACKBQAgiAIBAIYEACGLAgEAiQQAIY0CAQCJBAAhjgIBAIkEACGPAgEAiQQAIZcCQACKBAAhmAJAAIoEACGkAgEAhgQAIaUCAQCGBAAhpgIBAIkEACGnAiAAgAUAIagCIACABQAhqQIBAIkEACGrAgAAgQWrAiKtAgAAggWtAiKuAgEAiQQAIa8CIACABQAhsAIgAIAFACGxAkAAxwQAIQaIAgEAAAABkgIAAAC4AgKXAkAAAAABmAJAAAAAAbUCAQAAAAG4AgEAAAABDogCAQAAAAGSAgAAANECApcCQAAAAAGYAkAAAAAByQKAAAAAAdECEAAAAAHSAgEAAAAB0wIBAAAAAdQCAQAAAAHVAkAAAAAB1gIBAAAAAdcCEAAAAAHYAgEAAAAB2QJAAAAAARsEAAD3BQAgCgAA-AUAIA0AAPkFACAOAAD6BQAgEQAA-wUAIBIAAPwFACAWAAD-BQAgFwAA_wUAIIgCAQAAAAGLAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABlwJAAAAAAZgCQAAAAAGkAgEAAAABpQIBAAAAAaYCAQAAAAGnAiAAAAABqAIgAAAAAakCAQAAAAGrAgAAAKsCAq0CAAAArQICrgIBAAAAAa8CIAAAAAGwAiAAAAABsQJAAAAAAQIAAADWAgAgKQAA0AcAIBsEAAD3BQAgCgAA-AUAIA0AAPkFACAOAAD6BQAgEQAA-wUAIBMAAP0FACAWAAD-BQAgFwAA_wUAIIgCAQAAAAGLAgEAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABlwJAAAAAAZgCQAAAAAGkAgEAAAABpQIBAAAAAaYCAQAAAAGnAiAAAAABqAIgAAAAAakCAQAAAAGrAgAAAKsCAq0CAAAArQICrgIBAAAAAa8CIAAAAAGwAiAAAAABsQJAAAAAAQIAAADWAgAgKQAA0gcAIAeIAgEAAAABlwJAAAAAAd0CAQAAAAHeAgEAAAAB3wIBAAAAAeACAQAAAAHhAgEAAAABGwQAAPcFACAKAAD4BQAgDQAA-QUAIA4AAPoFACARAAD7BQAgEgAA_AUAIBMAAP0FACAXAAD_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_LwBAMABBMQBCMgBDAAAAAAAFCAA_LwBAMABBMQBCMgBDARkADwEZAA8FCABILwBJMABKMQBLMgBMAAAAAAAFCABILwBJMABKMQBLMgBMAgUAAw8AAgIFAAMPAAIFCABRLwBSMABTMQBUMgBVAAAAAAAFCABRLwBSMABTMQBUMgBVAQMAAwEDAAMFCABaLwBbMABcMQBdMgBeAAAAAAAFCABaLwBbMABcMQBdMgBeAgUAAwsABgIFAAMLAAYDCABjMQBkMgBlAAAAAwgAYzEAZDIAZQIFAAMPAAICBQADDwACAwgAajEAazIAbAAAAAMIAGoxAGsyAGwBDAADAQwAAwMIAHExAHIyAHMAAAADCABxMQByMgBzAAADCAB4MQB5MgB6AAAAAwgAeDEAeTIAegMJAAcVAAMY-QILAwkABxUAAxj_AgsFCAB_LwCAATAAgQExAIIBMgCDAQAAAAAABQgAfy8AgAEwAIEBMQCCATIAgwEdAgEeSgEfSwEgTAEhTQEjTwEkURQlUhUmVAEnVhQoVxYrWAEsWQEtWhQzXRc0Xh01XxI2YBI3YRI4YhI5YxI6ZRI7ZxQ8aB49ahI-bBQ_bR9AbhJBbxJCcBRDcyBEdCRFdQZGdgZHdwZIeAZJeQZKewZLfRRMfiVNgAEGToIBFE-DASZQhAEGUYUBBlKGARRTiQEnVIoBK1WMAQdWjQEHV5ABB1iRAQdZkgEHWpQBB1uWARRclwEsXZkBB16bARRfnAEtYJ0BB2GeAQdinwEUY6IBLmSjATJlpAEMZqUBDGemAQxopwEMaagBDGqqAQxrrAEUbK0BM22vAQxusQEUb7IBNHCzAQxxtAEMcrUBFHO4ATV0uQE7dboBD3a7AQ93vAEPeL0BD3m-AQ96wAEPe8IBFHzDATx9xQEPfscBFH_IAT2AAckBD4EBygEPggHLARSDAc4BPoQBzwFEhQHRARCGAdIBEIcB1AEQiAHVARCJAdYBEIoB2AEQiwHaARSMAdsBRY0B3QEQjgHfARSPAeABRpAB4QEQkQHiARCSAeMBFJMB5gFHlAHnAU2VAegBC5YB6QELlwHqAQuYAesBC5kB7AELmgHuAQubAfABFJwB8QFOnQHzAQueAfUBFJ8B9gFPoAH3AQuhAfgBC6IB-QEUowH8AVCkAf0BVqUB_gEEpgH_AQSnAYACBKgBgQIEqQGCAgSqAYQCBKsBhgIUrAGHAletAYkCBK4BiwIUrwGMAliwAY0CBLEBjgIEsgGPAhSzAZICWbQBkwJftQGUAgW2AZUCBbcBlgIFuAGXAgW5AZgCBboBmgIFuwGcAhS8AZ0CYL0BnwIFvgGhAhS_AaICYcABowIFwQGkAgXCAaUCFMMBqAJixAGpAmbFAaoCDcYBqwINxwGsAg3IAa0CDckBrgINygGwAg3LAbICFMwBswJnzQG1Ag3OAbcCFM8BuAJo0AG5Ag3RAboCDdIBuwIU0wG-AmnUAb8CbdUBwAIK1gHBAgrXAcICCtgBwwIK2QHEAgraAcYCCtsByAIU3AHJAm7dAcsCCt4BzQIU3wHOAm_gAc8CCuEB0AIK4gHRAhTjAdQCcOQB1QJ05QHXAgPmAdgCA-cB2wID6AHcAgPpAd0CA-oB3wID6wHhAhTsAeICde0B5AID7gHmAhTvAecCdvAB6AID8QHpAgPyAeoCFPMB7QJ39AHuAnv1Ae8CAvYB8AIC9wHxAgL4AfICAvkB8wIC-gH1AgL7AfcCFPwB-AJ8_QH7AgL-Af0CFP8B_gJ9gAKAAwKBAoEDAoICggMUgwKFA36EAoYDhAE"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull2,
  AssignmentScalarFieldEnum: () => AssignmentScalarFieldEnum,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  DepartmentScalarFieldEnum: () => DepartmentScalarFieldEnum,
  FeedbackScalarFieldEnum: () => FeedbackScalarFieldEnum,
  JsonNull: () => JsonNull2,
  JsonNullValueFilter: () => JsonNullValueFilter,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullableJsonNullValueInput: () => NullableJsonNullValueInput,
  NullsOrder: () => NullsOrder,
  PaymentScalarFieldEnum: () => PaymentScalarFieldEnum,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  QuotationScalarFieldEnum: () => QuotationScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  SslCommerzPaymentScalarFieldEnum: () => SslCommerzPaymentScalarFieldEnum,
  StaffApplicationScalarFieldEnum: () => StaffApplicationScalarFieldEnum,
  StaffCategoryScalarFieldEnum: () => StaffCategoryScalarFieldEnum,
  StaffInvitationScalarFieldEnum: () => StaffInvitationScalarFieldEnum,
  StaffLocationScalarFieldEnum: () => StaffLocationScalarFieldEnum,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  WorkAttachmentScalarFieldEnum: () => WorkAttachmentScalarFieldEnum,
  WorkRequestScalarFieldEnum: () => WorkRequestScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
var runtime2 = __toESM(require("@prisma/client/runtime/client"), 1);
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.10.1",
  engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  Assignment: "Assignment",
  WorkAttachment: "WorkAttachment",
  Category: "Category",
  Department: "Department",
  Feedback: "Feedback",
  Payment: "Payment",
  SslCommerzPayment: "SslCommerzPayment",
  Quotation: "Quotation",
  StaffApplication: "StaffApplication",
  StaffCategory: "StaffCategory",
  StaffInvitation: "StaffInvitation",
  StaffLocation: "StaffLocation",
  User: "User",
  WorkRequest: "WorkRequest"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var AssignmentScalarFieldEnum = {
  id: "id",
  status: "status",
  amount: "amount",
  advanceAmount: "advanceAmount",
  requestId: "requestId",
  staffId: "staffId",
  citizenId: "citizenId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var WorkAttachmentScalarFieldEnum = {
  id: "id",
  assignmentId: "assignmentId",
  fileUrl: "fileUrl",
  publicId: "publicId",
  resourceType: "resourceType",
  fileType: "fileType",
  fileName: "fileName",
  createdAt: "createdAt"
};
var CategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  departmentId: "departmentId"
};
var DepartmentScalarFieldEnum = {
  id: "id",
  name: "name"
};
var FeedbackScalarFieldEnum = {
  id: "id",
  rating: "rating",
  comment: "comment",
  assignmentId: "assignmentId",
  citizenId: "citizenId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var PaymentScalarFieldEnum = {
  id: "id",
  status: "status",
  amount: "amount",
  currency: "currency",
  paymentGateway: "paymentGateway",
  merchantInvoiceNumber: "merchantInvoiceNumber",
  paidAt: "paidAt",
  gatewayResponse: "gatewayResponse",
  refundTrxId: "refundTrxId",
  refundAmount: "refundAmount",
  refundReason: "refundReason",
  refundedAt: "refundedAt",
  requestId: "requestId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SslCommerzPaymentScalarFieldEnum = {
  id: "id",
  paymentId: "paymentId",
  tranId: "tranId",
  bankTranId: "bankTranId",
  valId: "valId",
  cardType: "cardType",
  cardIssuer: "cardIssuer",
  cardBrand: "cardBrand",
  cardIssuerCountry: "cardIssuerCountry",
  storeAmount: "storeAmount",
  gatewayResponse: "gatewayResponse",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var QuotationScalarFieldEnum = {
  id: "id",
  proposedFee: "proposedFee",
  status: "status",
  requestId: "requestId",
  staffId: "staffId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var StaffApplicationScalarFieldEnum = {
  id: "id",
  experience: "experience",
  experienceDetails: "experienceDetails",
  status: "status",
  applicantId: "applicantId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var StaffCategoryScalarFieldEnum = {
  id: "id",
  staffId: "staffId",
  categoryId: "categoryId"
};
var StaffInvitationScalarFieldEnum = {
  id: "id",
  requestId: "requestId",
  staffId: "staffId",
  status: "status",
  responseNote: "responseNote",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var StaffLocationScalarFieldEnum = {
  id: "id",
  division: "division",
  address: "address",
  staffId: "staffId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  password: "password",
  needPasswordChange: "needPasswordChange",
  emailVerified: "emailVerified",
  googleId: "googleId",
  authProvider: "authProvider",
  phone: "phone",
  role: "role",
  division: "division",
  district: "district",
  address: "address",
  postalCode: "postalCode",
  isActive: "isActive",
  isDeleted: "isDeleted",
  deletedAt: "deletedAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var WorkRequestScalarFieldEnum = {
  id: "id",
  title: "title",
  description: "description",
  division: "division",
  city: "city",
  address: "address",
  postalCode: "postalCode",
  phone: "phone",
  approvedFee: "approvedFee",
  status: "status",
  rejectionReason: "rejectionReason",
  citizenId: "citizenId",
  departmentId: "departmentId",
  selectedQuotationId: "selectedQuotationId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var NullableJsonNullValueInput = {
  DbNull: DbNull2,
  JsonNull: JsonNull2
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var JsonNullValueFilter = {
  DbNull: DbNull2,
  JsonNull: JsonNull2,
  AnyNull: AnyNull2
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/enums.ts
var Role = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  STAFF: "STAFF",
  CITIZEN: "CITIZEN"
};
var AuthProvider = {
  GOOGLE: "GOOGLE",
  CREDENTIAL: "CREDENTIAL"
};
var StaffApplicationStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
};
var WorkStatus = {
  PENDING: "PENDING",
  REQUESTED: "REQUESTED",
  ACCEPTED: "ACCEPTED",
  CITIZEN_ACCEPTED: "CITIZEN_ACCEPTED",
  CITIZEN_DECLINED: "CITIZEN_DECLINED",
  ADVANCE_PAID: "ADVANCE_PAID",
  ASSIGNED: "ASSIGNED",
  COMPLETED: "COMPLETED",
  REJECTED: "REJECTED"
};
var QuotationStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
};
var AssignmentStatus = {
  ONGOING: "ONGOING",
  COMPLETION_SUBMITTED: "COMPLETION_SUBMITTED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED"
};
var InvitationStatus = {
  REQUESTED: "REQUESTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED"
};
var PaymentStatus = {
  PENDING: "PENDING",
  PAID: "PAID",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED"
};

// generated/prisma/client.ts
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
dotenv2.config();
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new import_adapter_pg.PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/utils/AppError.ts
var AppError = class extends Error {
  // Declaring a public property to store the HTTP status code
  statusCode;
  // Constructor runs automatically whenever we create an AppError object
  // statusCode = HTTP status (404, 400, 500, etc.)
  // message = Error description
  // stack = Optional custom stack trace; defaults to an empty string
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};

// src/modules/auth/auth.service.ts
var import_http_status2 = __toESM(require("http-status"), 1);
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_crypto = __toESM(require("crypto"), 1);

// src/lib/redis.ts
var import_redis = require("redis");
var redisClient = (0, import_redis.createClient)({
  username: config_default.redis_user,
  password: config_default.redis_password,
  socket: {
    host: config_default.redis_host,
    port: Number(config_default.redis_port)
  }
});

// src/modules/auth/auth.service.ts
var import_path2 = __toESM(require("path"), 1);
var import_ejs = __toESM(require("ejs"), 1);

// src/lib/nodemailer.ts
var import_nodemailer = __toESM(require("nodemailer"), 1);
var transporter = import_nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: config_default.smtp_user,
    pass: config_default.smtp_password
  }
});

// src/utils/jwt.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var createToken = (payload, secret, expiresIn) => {
  const token = import_jsonwebtoken.default.sign(payload, secret, { expiresIn });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const verifiedToken = import_jsonwebtoken.default.verify(token, secret);
    return {
      success: true,
      data: verifiedToken
    };
  } catch (error) {
    console.log("verification failed");
    return {
      success: false,
      error: error.message
    };
  }
};
var jwtUtils = {
  createToken,
  verifyToken
};

// src/lib/googleAuth.ts
var import_google_auth_library = require("google-auth-library");
var googleClient = new import_google_auth_library.OAuth2Client({
  client_id: config_default.google_client_id
});

// src/modules/auth/auth.service.ts
var registerUserService = async (payload) => {
  const { name, password } = payload;
  const email = payload.email.trim().toLowerCase();
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (isUserExist) {
    throw new AppError(
      import_http_status2.default.CONFLICT,
      "User with this email already exist"
    );
  }
  const hashedPassword = await import_bcryptjs.default.hash(
    password,
    Number(config_default.bcrypt_salt_rounds)
  );
  const expirationSeconds = 5 * 60;
  const otpKey = `citizen-registration-otp:${email}`;
  const otpValue = import_crypto.default.randomInt(1e5, 999999).toString();
  await redisClient.set(otpKey, otpValue, {
    expiration: {
      type: "EX",
      value: expirationSeconds
    }
  });
  const otpRegistrationkey = `citizen-registration-data:${email}`;
  const redisUserDataPayload = {
    name,
    email,
    password: hashedPassword,
    phone: payload.phone
  };
  await redisClient.set(
    otpRegistrationkey,
    JSON.stringify(redisUserDataPayload),
    {
      expiration: {
        type: "EX",
        value: expirationSeconds
      }
    }
  );
  const templatePath = import_path2.default.join(
    process.cwd(),
    "src/templates/registration-user-otp.ejs"
  );
  const templateData = {
    name,
    email,
    otp: otpValue,
    expirationMinutes: expirationSeconds / 60
  };
  const html = await import_ejs.default.renderFile(templatePath, templateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: email,
    subject: "Email Verification",
    html
  });
};
var verifyUserEmailService = async (payload) => {
  const { otp } = payload;
  const email = payload.email.trim().toLowerCase();
  const isUserExist = await prisma.user.findUnique({
    where: { email }
  });
  if (isUserExist?.isDeleted) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is Deleted");
  }
  if (isUserExist && !isUserExist.isActive) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is Blocked");
  }
  if (isUserExist?.emailVerified) {
    throw new AppError(import_http_status2.default.CONFLICT, "Email ALready Verified");
  }
  if (isUserExist) {
    throw new AppError(
      import_http_status2.default.CONFLICT,
      "User with this email already exists"
    );
  }
  const otpKey = `citizen-registration-otp:${email}`;
  const redisOtp = await redisClient.get(otpKey);
  if (!redisOtp) {
    throw new AppError(import_http_status2.default.BAD_REQUEST, "Invalid OTP");
  }
  if (redisOtp !== otp) {
    throw new AppError(import_http_status2.default.BAD_REQUEST, "OTP Does Not Match");
  }
  const userRegistrationKey = `citizen-registration-data:${email}`;
  const redisUserData = await redisClient.get(userRegistrationKey);
  if (!redisUserData) {
    throw new AppError(import_http_status2.default.NOT_FOUND, "citizen Doesnt Exist");
  }
  const userPayload = JSON.parse(redisUserData);
  const createUser = await prisma.user.create({
    data: {
      name: userPayload.name,
      email: userPayload.email,
      password: userPayload.password,
      role: Role.CITIZEN,
      emailVerified: true,
      phone: userPayload.phone || ""
    },
    omit: { password: true },
    include: { staffLocation: true }
  });
  await redisClient.del(userRegistrationKey);
  const tempatePath = import_path2.default.join(
    process.cwd(),
    "src/templates/citizen-welcome-email.ejs"
  );
  const templateData = {
    name: createUser.name
  };
  const html = await import_ejs.default.renderFile(tempatePath, templateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: email,
    subject: "Welcome To NagarLink",
    html
  });
  const { ...user } = createUser;
  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_token,
    config_default.jwt_access_expires_in
  );
  const refreshToken2 = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_token,
    config_default.jwt_refresh_expires_in
  );
  return {
    user,
    accessToken,
    refreshToken: refreshToken2
  };
};
var loginUserService = async (payload) => {
  const { password } = payload;
  const email = payload.email.trim().toLowerCase();
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!user) {
    throw new AppError(import_http_status2.default.UNAUTHORIZED, "User not found");
  }
  if (user?.isDeleted) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is Deleted");
  }
  if (user && !user.isActive) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is Blocked");
  }
  if (user.password === null && user.googleId !== null) {
    throw new AppError(
      import_http_status2.default.CONFLICT,
      "User already has account with google... try to login with google"
    );
  }
  const isPasswordMatched = await import_bcryptjs.default.compare(
    password,
    user.password
  );
  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_token,
    config_default.jwt_access_expires_in
  );
  const refreshToken2 = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_token,
    config_default.jwt_refresh_expires_in
  );
  return {
    accessToken,
    refreshToken: refreshToken2
  };
};
var getMyProfileService = async (user) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: user.email
    },
    omit: {
      password: true
    }
  });
  if (!isUserExist) {
    throw new AppError(import_http_status2.default.NOT_FOUND, "User does not exist");
  }
  return isUserExist;
};
var googleLoginService = async (payload) => {
  let googleIdTokenPayload = null;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: payload.idToken,
      audience: config_default.google_client_id
    });
    googleIdTokenPayload = ticket.getPayload();
  } catch (error) {
    console.log("Google ID Token Verification Failed", error);
    throw new AppError(
      import_http_status2.default.UNAUTHORIZED,
      "Invalid Or Expired Google Id Token"
    );
  }
  if (!googleIdTokenPayload) {
    throw new AppError(
      import_http_status2.default.UNAUTHORIZED,
      "Invalid Or Expired Google Id Token"
    );
  }
  if (!googleIdTokenPayload.email) {
    throw new AppError(import_http_status2.default.BAD_REQUEST, "Google Email Not Found");
  }
  if (!googleIdTokenPayload.name) {
    throw new AppError(
      import_http_status2.default.BAD_REQUEST,
      "Google Email User Name Not Found"
    );
  }
  const ifCitizenExistWithGoogleAuth = await prisma.user.findUnique({
    where: {
      email: googleIdTokenPayload.email,
      role: Role.CITIZEN,
      googleId: googleIdTokenPayload.sub
    }
  });
  let user = ifCitizenExistWithGoogleAuth;
  if (!ifCitizenExistWithGoogleAuth) {
    const ifCitizenExistWithCredentials = await prisma.user.findUnique({
      where: {
        email: googleIdTokenPayload.email,
        role: Role.CITIZEN,
        authProvider: AuthProvider.CREDENTIAL
      }
    });
    if (ifCitizenExistWithCredentials) {
      if (!ifCitizenExistWithCredentials.emailVerified) {
        throw new AppError(import_http_status2.default.FORBIDDEN, "Email Not Verified");
      }
      if (!ifCitizenExistWithCredentials.isActive) {
        throw new AppError(import_http_status2.default.FORBIDDEN, "User Is not active");
      }
      if (ifCitizenExistWithCredentials.isDeleted) {
        throw new AppError(import_http_status2.default.FORBIDDEN, "User Is Deleted");
      }
      user = await prisma.user.update({
        where: {
          id: ifCitizenExistWithCredentials.id
        },
        data: {
          googleId: googleIdTokenPayload.sub
        }
      });
    } else {
      user = await prisma.user.create({
        data: {
          name: googleIdTokenPayload.name,
          email: googleIdTokenPayload.email,
          role: Role.CITIZEN,
          googleId: googleIdTokenPayload.sub,
          authProvider: AuthProvider.GOOGLE,
          emailVerified: true
        }
      });
      const tempatePath = import_path2.default.join(
        process.cwd(),
        "src/app/templates/citizen-welcome-email.ejs"
      );
      const templateData = {
        name: user.name
      };
      const html = await import_ejs.default.renderFile(tempatePath, templateData);
      await transporter.sendMail({
        from: config_default.email_sender,
        to: user.email,
        subject: "Welcome To NagarLink",
        html
      });
    }
  }
  if (!user) {
    throw new AppError(import_http_status2.default.NOT_FOUND, "User Not Found");
  }
  if (!user.isActive) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User Is not active");
  }
  if (user.isDeleted) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User Is Deleted");
  }
  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_token,
    config_default.jwt_access_expires_in
  );
  const refreshToken2 = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_token,
    config_default.jwt_refresh_expires_in
  );
  return {
    accessToken,
    refreshToken: refreshToken2
  };
};
var refreshTokenService = async (token) => {
  const verifiedRefreshToken = jwtUtils.verifyToken(
    token,
    config_default.jwt_refresh_token
  );
  if (!verifiedRefreshToken.success || !verifiedRefreshToken.data) {
    throw new AppError(
      import_http_status2.default.UNAUTHORIZED,
      config_default.node_env === "development" ? verifiedRefreshToken.error : "Invalid Refresh token"
    );
  }
  const data = verifiedRefreshToken.data;
  const user = await prisma.user.findUnique({
    where: {
      id: data?.userId
    }
  });
  if (!user || user.isDeleted || !user.isActive) {
    throw new AppError(
      import_http_status2.default.FORBIDDEN,
      "User is inactive, deleted, or not found"
    );
  }
  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_token,
    config_default.jwt_access_expires_in
  );
  const refreshToken2 = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_token,
    config_default.jwt_refresh_expires_in
  );
  return {
    accessToken,
    refreshToken: refreshToken2
  };
};
var forgotPasswordService = async (payload) => {
  const { email } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError(import_http_status2.default.NOT_FOUND, "User Does not exist");
  }
  if (isUserExist.emailVerified === false) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User email is not verified");
  }
  if (!isUserExist.isActive) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is blocked");
  }
  if (isUserExist.isDeleted) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is deleted");
  }
  if (isUserExist.googleId && isUserExist.authProvider === "GOOGLE") {
    throw new AppError(import_http_status2.default.CONFLICT, "user has account with google id");
  }
  const key = `forgot-password-otp : ${isUserExist.email}`;
  const otp = import_crypto.default.randomInt(1e5, 1e6);
  const expirationSeconds = 5 * 60;
  await redisClient.set(key, otp, {
    expiration: {
      type: "EX",
      value: 5 * 60
    }
  });
  const tempatePath = import_path2.default.join(
    process.cwd(),
    "src/templates/forgot-password.ejs"
  );
  const templateData = {
    name: isUserExist.name,
    otp,
    expirationMinutes: expirationSeconds / 60
  };
  const html = await import_ejs.default.renderFile(tempatePath, templateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: isUserExist.email,
    subject: "Forgot password",
    html
  });
};
var resetPasswordService = async (payload) => {
  const { email, otp, newPassword } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError(import_http_status2.default.NOT_FOUND, "User Does not exist");
  }
  if (isUserExist.emailVerified === false) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User email is not verified");
  }
  if (!isUserExist.isActive) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is blocked");
  }
  if (isUserExist.isDeleted) {
    throw new AppError(import_http_status2.default.FORBIDDEN, "User is deleted");
  }
  if (isUserExist.googleId && isUserExist.authProvider === "GOOGLE") {
    throw new AppError(import_http_status2.default.CONFLICT, "user has account with google id");
  }
  const key = `forgot-password-otp : ${isUserExist.email}`;
  const redisOtp = await redisClient.get(key);
  if (!redisOtp) {
    throw new AppError(import_http_status2.default.BAD_REQUEST, "Invalid otp");
  }
  if (redisOtp !== otp) {
    throw new AppError(import_http_status2.default.BAD_REQUEST, "Otp does not match");
  }
  const hashedNewPassword = await import_bcryptjs.default.hash(
    newPassword,
    Number(config_default.bcrypt_salt_rounds)
  );
  await prisma.user.update({
    where: {
      email: isUserExist.email
    },
    data: {
      password: hashedNewPassword
    }
  });
  await redisClient.del([key]);
  const tempatePath = import_path2.default.join(
    process.cwd(),
    "src/templates/reset-password-success.ejs"
  );
  const templateData = {
    name: isUserExist.name
  };
  const html = await import_ejs.default.renderFile(tempatePath, templateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: isUserExist.email,
    subject: "Password Changed",
    html
  });
};
var authServices = {
  registerUserService,
  loginUserService,
  getMyProfileService,
  googleLoginService,
  refreshTokenService,
  resetPasswordService,
  forgotPasswordService,
  verifyUserEmailService
};

// src/utils/sendResponse.ts
var sendResponse = (res, data) => {
  res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
    meta: data.meta
  });
};

// src/modules/auth/auth.controller.ts
var import_http_status3 = __toESM(require("http-status"), 1);
var registerUser = catchAsync(async (req, res) => {
  const payload = req.body;
  await authServices.registerUserService(payload);
  sendResponse(res, {
    statusCode: import_http_status3.default.CREATED,
    success: true,
    message: "Otp has sent to your email to verify",
    data: null
  });
});
var verifyUserEmail = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authServices.verifyUserEmailService(payload);
  const { accessToken, refreshToken: refreshToken2, user } = result;
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24
    // 24 hour or 1 day
  });
  res.cookie("refreshToken", refreshToken2, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24 * 7
    // 7 days
  });
  sendResponse(res, {
    statusCode: import_http_status3.default.CREATED,
    success: true,
    message: "Email Verified Successfully",
    data: {
      accessToken,
      refreshToken: refreshToken2,
      user
    }
  });
});
var loginUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authServices.loginUserService(payload);
  const { accessToken, refreshToken: refreshToken2 } = result;
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e4 * 60 * 60 * 24
    //24 hour or 1day
  });
  res.cookie("refreshToken", refreshToken2, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24 * 7
    // 7 days
  });
  sendResponse(res, {
    statusCode: import_http_status3.default.CREATED,
    success: true,
    message: "user logged in successfully",
    data: {
      accessToken,
      refreshToken: refreshToken2
    }
  });
});
var getMyProfile = catchAsync(async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new AppError(
      import_http_status3.default.UNAUTHORIZED,
      "user information is missing in the request"
    );
  }
  const result = await authServices.getMyProfileService(user);
  sendResponse(res, {
    statusCode: import_http_status3.default.OK,
    success: true,
    message: "User Profile Retrived successfully",
    data: result
  });
});
var refreshToken = catchAsync(async (req, res) => {
  if (!req.cookies.refreshToken) {
    throw new AppError(import_http_status3.default.UNAUTHORIZED, "Refresh token is missing");
  }
  const result = await authServices.refreshTokenService(
    req.cookies.refreshToken
  );
  const { accessToken, refreshToken: newRefreshToken } = result;
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24
    // 24 hour or 1 day
  });
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24 * 7
    // 7 days
  });
  sendResponse(res, {
    statusCode: import_http_status3.default.OK,
    success: true,
    message: "New tokens generated successfully",
    data: {
      accessToken,
      refreshToken: newRefreshToken
    }
  });
});
var googleLogin = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authServices.googleLoginService(payload);
  const { accessToken, refreshToken: refreshToken2 } = result;
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24
    // 24 hour or 1 day
  });
  res.cookie("refreshToken", refreshToken2, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24 * 7
    // 7 days
  });
  sendResponse(res, {
    statusCode: import_http_status3.default.OK,
    success: true,
    message: "New tokens generated successfully",
    data: {
      accessToken,
      refreshToken: refreshToken2
    }
  });
});
var forgotPassword = catchAsync(async (req, res) => {
  const payload = req.body;
  await authServices.forgotPasswordService(payload);
  sendResponse(res, {
    statusCode: import_http_status3.default.OK,
    success: true,
    message: `otp sent to email : ${payload.email}`,
    data: null
  });
});
var resetPassword = catchAsync(async (req, res) => {
  const payload = req.body;
  await authServices.resetPasswordService(payload);
  sendResponse(res, {
    statusCode: import_http_status3.default.OK,
    success: true,
    message: "Password Changed successfully",
    data: null
  });
});
var authControllers = {
  registerUser,
  loginUser,
  getMyProfile,
  refreshToken,
  googleLogin,
  forgotPassword,
  resetPassword,
  verifyUserEmail
};

// src/middlewares/checkAuth.ts
var import_http_status4 = __toESM(require("http-status"), 1);
var auth = (...requiredRoles) => {
  return catchAsync(async (req, res, next) => {
    const token = req.cookies.accessToken ? req.cookies.accessToken : req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization?.split(" ")[1] : req.headers.authorization;
    if (!token) {
      throw new AppError(
        import_http_status4.default.UNAUTHORIZED,
        "You are not logged in.... please login to access this resource"
      );
    }
    const verifiedToken = jwtUtils.verifyToken(token, config_default.jwt_access_token);
    if (!verifiedToken.success) {
      throw new AppError(import_http_status4.default.UNAUTHORIZED, verifiedToken.error);
    }
    const { email, name, userId, role } = verifiedToken.data;
    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new AppError(
        import_http_status4.default.FORBIDDEN,
        "You dont have permission to access this resource"
      );
    }
    req.user = {
      email,
      name,
      userId,
      role
    };
    next();
  });
};

// src/middlewares/validateRequest.ts
var import_http_status5 = __toESM(require("http-status"), 1);
var validateRequest = (schemas) => catchAsync((req, _res, next) => {
  for (const part of ["params", "body"]) {
    const schema = schemas[part];
    if (!schema) {
      continue;
    }
    const value = part === "body" ? req.body ?? {} : req.params;
    const result = schema.safeParse(value);
    if (!result.success) {
      throw new AppError(
        import_http_status5.default.BAD_REQUEST,
        result.error.issues[0]?.message ?? "Invalid request"
      );
    }
    if (part === "body") {
      req.body = result.data;
    } else if (typeof result.data === "object" && result.data !== null) {
      Object.assign(req.params, result.data);
    }
  }
  next();
});

// src/modules/auth/auth.validation.ts
var import_zod = require("zod");
var emailSchema = import_zod.z.string().trim().toLowerCase().email();
var otpSchema = import_zod.z.string().regex(/^\d{6}$/, "OTP must be 6 digits");
var passwordSchema = import_zod.z.string().min(8).max(128);
var registerUserSchema = import_zod.z.object({
  name: import_zod.z.string().trim().min(1).max(100),
  email: emailSchema,
  password: passwordSchema,
  phone: import_zod.z.string().trim().min(6).max(20).optional(),
  division: import_zod.z.string().trim().max(100).optional(),
  district: import_zod.z.string().trim().max(100).optional(),
  address: import_zod.z.string().trim().max(500).optional(),
  postalCode: import_zod.z.string().trim().max(20).optional()
}).strict();
var verifyUserEmailSchema = import_zod.z.object({
  email: emailSchema,
  otp: otpSchema
}).strict();
var loginUserSchema = import_zod.z.object({
  email: emailSchema,
  password: import_zod.z.string().min(1).max(128)
}).strict();
var forgotPasswordSchema = import_zod.z.object({
  email: emailSchema
}).strict();
var resetPasswordSchema = import_zod.z.object({
  email: emailSchema,
  otp: otpSchema,
  newPassword: passwordSchema
}).strict();
var googleLoginSchema = import_zod.z.object({
  idToken: import_zod.z.string().trim().min(1)
}).strict();

// src/modules/auth/auth.route.ts
var router = (0, import_express.Router)();
router.post(
  "/register",
  validateRequest({ body: registerUserSchema }),
  authControllers.registerUser
);
router.post(
  "/verify-email",
  validateRequest({ body: verifyUserEmailSchema }),
  authControllers.verifyUserEmail
);
router.post(
  "/login",
  validateRequest({ body: loginUserSchema }),
  authControllers.loginUser
);
router.post("/google", authControllers.googleLogin);
router.get(
  "/me",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER, Role.STAFF),
  authControllers.getMyProfile
);
router.post("/refresh-token", authControllers.refreshToken);
router.post(
  "/forgot-password",
  validateRequest({ body: forgotPasswordSchema }),
  authControllers.forgotPassword
);
router.post(
  "/reset-password",
  validateRequest({ body: resetPasswordSchema }),
  authControllers.resetPassword
);
router.post(
  "/google",
  validateRequest({ body: googleLoginSchema }),
  authControllers.googleLogin
);
var authRoutes = router;

// src/middlewares/globalErrorHandler.ts
var import_http_status6 = __toESM(require("http-status"), 1);
var globalHandleError = async (err, _req, res, _next) => {
  if (config_default.node_env === "development") {
    console.log("Error from global error handler", err);
  }
  let statusCode = import_http_status6.default.INTERNAL_SERVER_ERROR;
  let errorMessage = err.message || "Internal server error";
  const errorName = err.name || "Internal Server error";
  if (err instanceof prismaNamespace_exports.PrismaClientValidationError) {
    statusCode = import_http_status6.default.BAD_REQUEST;
    errorMessage = "You have provided incorrect field type or missing fields";
  } else if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = import_http_status6.default.BAD_REQUEST;
      errorMessage = "Duplicate Key Error";
    } else if (err.code === "P2023") {
      statusCode = import_http_status6.default.BAD_REQUEST;
      errorMessage = "foreign Key Error";
    } else if (err.code === "P2025") {
      statusCode = import_http_status6.default.BAD_REQUEST;
      errorMessage = "An operation failed because it depends on one or more records that were required but not found.";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientInitializationError) {
    if (err.errorCode === "P1000") {
      statusCode = import_http_status6.default.UNAUTHORIZED;
      errorMessage = "Authentication error... please check your credentials";
    } else if (err.errorCode === "P1001") {
      statusCode = import_http_status6.default.BAD_REQUEST;
      errorMessage = "Can't reach database server";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientUnknownRequestError) {
    statusCode = import_http_status6.default.INTERNAL_SERVER_ERROR;
    errorMessage = "Error occurred during query execution";
  } else if (err instanceof AppError) {
    errorMessage = err.message;
    statusCode = err.statusCode;
  } else if (err instanceof Error) {
    errorMessage = err.message;
  }
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode || import_http_status6.default.INTERNAL_SERVER_ERROR,
    name: config_default.node_env === "development" ? errorName : "Internal Server Error",
    message: config_default.node_env === "development" ? errorMessage : "Internal Server Error",
    error: config_default.node_env === "development" ? err : void 0,
    stack: config_default.node_env === "development" ? err.stack : void 0
  });
};

// src/modules/user/user.route.ts
var import_express2 = require("express");

// src/modules/user/user.service.ts
var import_http_status7 = __toESM(require("http-status"), 1);
var getAllUserService = async (query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  if (query.role) {
    andConditions.push({
      role: query.role
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          email: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  const users = await prisma.user.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    omit: {
      password: true
    }
  });
  const total = await prisma.user.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: users,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getUserByIdService = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new AppError(import_http_status7.default.NOT_FOUND, "User not found");
  }
  if (user.isDeleted || !user.isActive) {
    throw new AppError(import_http_status7.default.FORBIDDEN, "User is inactive or deleted");
  }
  if (user.role === "CITIZEN") {
    throw new AppError(
      import_http_status7.default.FORBIDDEN,
      "You are not allowed to access this information"
    );
  }
  if (user.role === "MANAGER") {
    throw new AppError(
      import_http_status7.default.FORBIDDEN,
      "You are not allowed to access this information"
    );
  }
  if (user.role === "STAFF") {
    throw new AppError(
      import_http_status7.default.FORBIDDEN,
      "You are not allowed to access this information"
    );
  }
  return user;
};
var updateUserByIdService = async (userId, payload) => {
  const User = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!User) {
    throw new AppError(import_http_status7.default.NOT_FOUND, "User not found");
  }
  if (User.isDeleted) {
    throw new AppError(import_http_status7.default.FORBIDDEN, "User is deleted");
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: userId
    },
    data: payload,
    omit: {
      password: true
    }
  });
  return updatedUser;
};
var deleteUserByIdService = async (userId) => {
  const User = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!User) {
    throw new AppError(import_http_status7.default.NOT_FOUND, "User not found");
  }
  if (User.isDeleted) {
    throw new AppError(import_http_status7.default.FORBIDDEN, "User is deleted");
  }
  const deleteUser = await prisma.user.delete({
    where: {
      id: userId
    }
  });
  return deleteUser;
};
var getAllStaffsService = async (query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  if (query.role) {
    andConditions.push({
      role: query.role
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          email: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  const users = await prisma.user.findMany({
    where: {
      AND: andConditions,
      role: Role.STAFF
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    omit: {
      password: true
    }
  });
  const total = await prisma.user.count({
    where: {
      AND: andConditions,
      role: Role.STAFF
    }
  });
  return {
    data: users,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var userServices = {
  getAllUserService,
  updateUserByIdService,
  deleteUserByIdService,
  getUserByIdService,
  getAllStaffsService
};

// src/modules/user/user.controller.ts
var import_http_status8 = __toESM(require("http-status"), 1);
var getAllUsers = catchAsync(async (req, res) => {
  const { data, meta } = await userServices.getAllUserService(req.query);
  sendResponse(res, {
    statusCode: import_http_status8.default.OK,
    success: true,
    message: "All user retrieved successfully",
    data,
    meta
  });
});
var getUserById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.getUserByIdService(id);
  sendResponse(res, {
    statusCode: import_http_status8.default.OK,
    success: true,
    message: "User data retrieved successfully",
    data: result
  });
});
var updateUserById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await userServices.updateUserByIdService(id, payload);
  sendResponse(res, {
    statusCode: import_http_status8.default.OK,
    success: true,
    message: "User updated successfully",
    data: result
  });
});
var deleteUserById = catchAsync(async (req, res) => {
  const id = req?.params.id;
  await userServices.deleteUserByIdService(id);
  sendResponse(res, {
    statusCode: import_http_status8.default.OK,
    success: true,
    message: "User deleted successfully",
    data: null
  });
});
var getAllStaffs = catchAsync(async (req, res) => {
  const { data, meta } = await userServices.getAllStaffsService(req.query);
  sendResponse(res, {
    statusCode: import_http_status8.default.OK,
    success: true,
    message: "All staff retrieved successfully",
    data,
    meta
  });
});
var userControllers = {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
  getAllStaffs
};

// src/modules/user/user.validation.ts
var import_zod2 = require("zod");
var userIdParamsSchema = import_zod2.z.object({ id: import_zod2.z.string().uuid() }).strict();
var updateUserSchema = import_zod2.z.object({
  name: import_zod2.z.string().trim().min(1).max(100).optional(),
  phone: import_zod2.z.string().trim().min(6).max(20).optional(),
  role: import_zod2.z.enum(["ADMIN", "MANAGER", "STAFF", "CITIZEN"]).optional(),
  isActive: import_zod2.z.boolean().optional(),
  needPasswordChange: import_zod2.z.boolean().optional()
}).strict().refine((value) => Object.keys(value).length > 0, {
  message: "At least one field must be provided"
});

// src/modules/user/user.route.ts
var router2 = (0, import_express2.Router)();
router2.get("/", auth(Role.ADMIN), userControllers.getAllUsers);
router2.get(
  "/all-staffs",
  auth(Role.ADMIN, Role.MANAGER),
  userControllers.getAllStaffs
);
router2.get(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema }),
  userControllers.getUserById
);
router2.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema, body: updateUserSchema }),
  userControllers.updateUserById
);
router2.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema }),
  userControllers.deleteUserById
);
var userRoutes = router2;

// src/modules/department/department.route.ts
var import_express3 = require("express");

// src/modules/department/department.controller.ts
var import_http_status10 = __toESM(require("http-status"), 1);

// src/modules/department/department.service.ts
var import_http_status9 = __toESM(require("http-status"), 1);
var createDepartmentService = async (payload) => {
  const name = payload.name.trim();
  const existingDepartment = await prisma.department.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive"
      }
    }
  });
  if (existingDepartment) {
    throw new AppError(import_http_status9.default.CONFLICT, "Department already exists");
  }
  const department = await prisma.department.create({
    data: {
      name
    }
  });
  return department;
};
var getAllDepartmentService = async () => {
  const Departments = await prisma.department.findMany(
    {
      include: {
        categories: {
          select: {
            id: true,
            name: true,
            departmentId: false
          }
        }
      }
    }
  );
  return Departments;
};
var getDepartmentByIdService = async (departmentId) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId
    }
  });
  if (!department) {
    throw new AppError(import_http_status9.default.NOT_FOUND, "Department does not exist");
  }
  return department;
};
var updateDepartmentByIdService = async (payload, departmentId) => {
  const isDepartment = await prisma.department.findUnique({
    where: {
      id: departmentId
    }
  });
  if (!isDepartment) {
    throw new AppError(import_http_status9.default.NOT_FOUND, "Department does not exist");
  }
  const newName = payload.name.trim();
  if (isDepartment.name.toLowerCase() === newName.toLowerCase()) {
    throw new AppError(
      import_http_status9.default.BAD_REQUEST,
      "Department name is already up to date"
    );
  }
  const existingDepartment = await prisma.department.findFirst({
    where: {
      name: {
        equals: newName,
        mode: "insensitive"
      },
      NOT: {
        id: departmentId
      }
    }
  });
  if (existingDepartment) {
    throw new AppError(
      import_http_status9.default.CONFLICT,
      "This department name already exists"
    );
  }
  const updatedDepartment = await prisma.department.update({
    where: {
      id: departmentId
    },
    data: {
      name: payload.name?.trim()
    }
  });
  return updatedDepartment;
};
var deleteDepartmentByIdService = async (departmentId) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId
    }
  });
  if (!department) {
    throw new AppError(import_http_status9.default.NOT_FOUND, "Department does not exist");
  }
  const deletedDepartment = await prisma.department.delete({
    where: {
      id: departmentId
    }
  });
  return deletedDepartment;
};
var departmentServices = {
  createDepartmentService,
  getAllDepartmentService,
  getDepartmentByIdService,
  updateDepartmentByIdService,
  deleteDepartmentByIdService
};

// src/modules/department/department.controller.ts
var createDepartment = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await departmentServices.createDepartmentService(payload);
  sendResponse(res, {
    statusCode: import_http_status10.default.OK,
    success: true,
    message: "Created a new department successfully",
    data: result
  });
});
var getAllDepartments = catchAsync(async (req, res) => {
  const result = await departmentServices.getAllDepartmentService();
  sendResponse(res, {
    statusCode: import_http_status10.default.OK,
    success: true,
    message: "All Department retrieved successfully",
    data: result
  });
});
var getDepartmentById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await departmentServices.getDepartmentByIdService(
    id
  );
  sendResponse(res, {
    statusCode: import_http_status10.default.OK,
    success: true,
    message: "department retrieved successfully",
    data: result
  });
});
var updateDepartment = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await departmentServices.updateDepartmentByIdService(
    payload,
    id
  );
  sendResponse(res, {
    statusCode: import_http_status10.default.OK,
    success: true,
    message: "Deprtment data updated successfully",
    data: result
  });
});
var deleteDepartment = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await departmentServices.deleteDepartmentByIdService(
    id
  );
  sendResponse(res, {
    statusCode: import_http_status10.default.OK,
    success: true,
    message: "department deleted successfully",
    data: result
  });
});
var departmentControllers = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
};

// src/modules/department/department.validation.ts
var import_zod3 = require("zod");
var departmentIdParamsSchema = import_zod3.z.object({ id: import_zod3.z.string().uuid() }).strict();
var createDepartmentSchema = import_zod3.z.object({
  name: import_zod3.z.string().trim().min(1).max(100)
}).strict();
var updateDepartmentSchema = createDepartmentSchema;

// src/modules/department/department.route.ts
var router3 = (0, import_express3.Router)();
router3.post(
  "/",
  auth(Role.ADMIN),
  validateRequest({ body: createDepartmentSchema }),
  departmentControllers.createDepartment
);
router3.get("/", auth(Role.ADMIN, Role.MANAGER), departmentControllers.getAllDepartments);
router3.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: departmentIdParamsSchema }),
  departmentControllers.getDepartmentById
);
router3.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: departmentIdParamsSchema,
    body: updateDepartmentSchema
  }),
  departmentControllers.updateDepartment
);
router3.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: departmentIdParamsSchema }),
  departmentControllers.deleteDepartment
);
var departmentRoutes = router3;

// src/modules/category/category.route.ts
var import_express4 = require("express");

// src/modules/category/category.controller.ts
var import_http_status12 = __toESM(require("http-status"), 1);

// src/modules/category/category.service.ts
var import_http_status11 = __toESM(require("http-status"), 1);
var createCategoryService = async (payload) => {
  const categoryName = payload.name.trim().toLowerCase();
  const isExistCategory = await prisma.category.findFirst({
    where: {
      name: categoryName,
      departmentId: payload.departmentId
    }
  });
  if (isExistCategory) {
    throw new AppError(
      import_http_status11.default.CONFLICT,
      "Category already exists in this department"
    );
  }
  const category = await prisma.category.create({
    data: {
      name: categoryName,
      departmentId: payload.departmentId
    },
    omit: {
      departmentId: true
    },
    include: {
      department: true
    }
  });
  return category;
};
var getAllCategoriesService = async () => {
  const categories = await prisma.category.findMany({
    omit: {
      departmentId: true
    },
    include: {
      department: true
    }
  });
  return categories;
};
var getCategoriesByDepartmentService = async (departmentId) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId
    },
    include: {
      categories: {
        omit: {
          departmentId: true
        }
      }
    }
  });
  if (!department) {
    throw new AppError(import_http_status11.default.NOT_FOUND, "Department does not exist");
  }
  return department;
};
var getCategoryByIdService = async (categoryId) => {
  const isCategory = await prisma.category.findFirst({
    where: {
      id: categoryId
    },
    omit: {
      departmentId: true
    },
    include: {
      department: true
    }
  });
  if (!isCategory) {
    throw new AppError(import_http_status11.default.NOT_FOUND, "Category not exist");
  }
  return isCategory;
};
var updateCategoryService = async (categoryId, payload) => {
  const categoryName = payload.name.trim().toLowerCase();
  const isExistCategory = await prisma.category.findFirst({
    where: {
      id: categoryId
    }
  });
  if (!isExistCategory) {
    throw new AppError(
      import_http_status11.default.NOT_FOUND,
      "Category does not exists "
    );
  }
  if (isExistCategory.name.toLowerCase() === categoryName) {
    throw new AppError(import_http_status11.default.CONFLICT, "Your current category is same as updated one");
  }
  const updatedCategory = await prisma.category.update({
    where: {
      id: categoryId
    },
    data: {
      name: payload.name,
      departmentId: payload?.departmentId
    },
    omit: {
      departmentId: true
    },
    include: {
      department: true
    }
  });
  return updatedCategory;
};
var deleteCategoryService = async (categoryId) => {
  const isExistCategory = await prisma.category.findFirst({
    where: {
      id: categoryId
    }
  });
  if (!isExistCategory) {
    throw new AppError(
      import_http_status11.default.NOT_FOUND,
      "Category does not exists "
    );
  }
  const deletedCategory = await prisma.category.delete({
    where: {
      id: categoryId
    }
  });
  return deletedCategory;
};
var categoryServices = {
  createCategoryService,
  getAllCategoriesService,
  getCategoriesByDepartmentService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService
};

// src/modules/category/category.controller.ts
var createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryService(req.body);
  sendResponse(res, {
    statusCode: import_http_status12.default.CREATED,
    success: true,
    message: "Category created successfully",
    data: result
  });
});
var getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoriesService();
  sendResponse(res, {
    statusCode: import_http_status12.default.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result
  });
});
var getCategoriesByDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await categoryServices.getCategoriesByDepartmentService(departmentId);
  sendResponse(res, {
    statusCode: import_http_status12.default.OK,
    success: true,
    message: "Department categories retrieved successfully",
    data: result
  });
});
var getCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getCategoryByIdService(id);
  sendResponse(res, {
    statusCode: import_http_status12.default.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result
  });
});
var updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategoryService(id, req.body);
  sendResponse(res, {
    statusCode: import_http_status12.default.OK,
    success: true,
    message: "Category updated successfully",
    data: result
  });
});
var deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.deleteCategoryService(id);
  sendResponse(res, {
    statusCode: import_http_status12.default.OK,
    success: true,
    message: "Category deleted successfully",
    data: result
  });
});
var categoryControllers = {
  createCategory,
  getAllCategories,
  getCategoriesByDepartment,
  getCategoryById,
  updateCategory,
  deleteCategory
};

// src/modules/category/category.validation.ts
var import_zod4 = require("zod");
var categoryIdParamsSchema = import_zod4.z.object({ id: import_zod4.z.string().uuid() }).strict();
var departmentIdParamsSchema2 = import_zod4.z.object({ departmentId: import_zod4.z.string().uuid() }).strict();
var createCategorySchema = import_zod4.z.object({
  name: import_zod4.z.string().trim().min(1).max(100),
  departmentId: import_zod4.z.string().uuid()
}).strict();
var updateCategorySchema = createCategorySchema;

// src/modules/category/category.route.ts
var router4 = (0, import_express4.Router)();
router4.post(
  "/",
  auth(Role.ADMIN),
  validateRequest({ body: createCategorySchema }),
  categoryControllers.createCategory
);
router4.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  categoryControllers.getAllCategories
);
router4.get(
  "/department/:departmentId",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: departmentIdParamsSchema2 }),
  categoryControllers.getCategoriesByDepartment
);
router4.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: categoryIdParamsSchema }),
  categoryControllers.getCategoryById
);
router4.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: categoryIdParamsSchema,
    body: updateCategorySchema
  }),
  categoryControllers.updateCategory
);
router4.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: categoryIdParamsSchema }),
  categoryControllers.deleteCategory
);
var categoryRoutes = router4;

// src/modules/staffApplication/staffApplication.route.ts
var import_express5 = __toESM(require("express"), 1);

// src/modules/staffApplication/staffApplication.controller.ts
var import_http_status14 = __toESM(require("http-status"), 1);

// src/modules/staffApplication/staffApplication.service.ts
var import_http_status13 = __toESM(require("http-status"), 1);
var createStaffApplicationService = async (payload, user) => {
  const existingApplication = await prisma.staffApplication.findUnique({
    where: {
      applicantId: user.userId
    }
  });
  if (existingApplication) {
    throw new AppError(
      import_http_status13.default.CONFLICT,
      "You have already submitted a staff application"
    );
  }
  const result = await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: {
        id: user.userId
      },
      data: {
        division: payload.division,
        district: payload.district,
        address: payload.address,
        postalCode: payload.postalCode
      }
    });
    return await tx.staffApplication.create({
      data: {
        experience: payload.experience,
        experienceDetails: payload.experienceDetails,
        applicantId: user.userId
      },
      omit: {
        applicantId: true
      },
      include: {
        applicant: {
          select: {
            id: true,
            name: true,
            email: true,
            division: true,
            district: true,
            address: true,
            postalCode: true
          }
        }
      }
    });
  });
  return result;
};
var getAllStaffApplicationsService = async (query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  if (query.status) {
    andConditions.push({
      status: query.status
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      applicant: {
        is: {
          OR: [
            {
              name: {
                contains: query.searchTerm,
                mode: "insensitive"
              }
            },
            {
              email: {
                contains: query.searchTerm,
                mode: "insensitive"
              }
            }
          ]
        }
      }
    });
  }
  const applications = await prisma.staffApplication.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    include: {
      applicant: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          division: true,
          district: true,
          address: true,
          postalCode: true
        }
      }
    }
  });
  const total = await prisma.staffApplication.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: applications,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getStaffApplicationByIdService = async (id) => {
  const result = await prisma.staffApplication.findUnique({
    where: {
      id
    },
    include: {
      applicant: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          division: true,
          district: true,
          address: true,
          postalCode: true
        }
      }
    }
  });
  if (!result) {
    throw new AppError(import_http_status13.default.NOT_FOUND, "Staff application not found");
  }
  return result;
};
var updateStaffApplicationService = async (id, payload) => {
  const isExist = await prisma.staffApplication.findUnique({
    where: {
      id
    }
  });
  if (!isExist) {
    throw new AppError(import_http_status13.default.NOT_FOUND, "Staff application not found");
  }
  if (isExist.status !== StaffApplicationStatus.PENDING) {
    throw new AppError(
      import_http_status13.default.BAD_REQUEST,
      "This application has already been reviewed"
    );
  }
  const result = await prisma.$transaction(async (tx) => {
    if (payload.status === StaffApplicationStatus.APPROVED) {
      await tx.user.update({
        where: {
          id: isExist.applicantId
        },
        data: {
          role: Role.STAFF
        }
      });
    } else if (payload.status === StaffApplicationStatus.REJECTED) {
      await tx.user.update({
        where: {
          id: isExist.applicantId
        },
        data: {
          role: Role.CITIZEN
        }
      });
    }
    return await tx.staffApplication.update({
      where: {
        id
      },
      data: {
        status: payload.status
      },
      include: {
        applicant: {
          //   omit: {
          //     password: true,
          //   },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            division: true,
            district: true,
            address: true,
            postalCode: true
          }
        }
      }
    });
  });
  return result;
};
var deleteStaffApplicationService = async (id) => {
  const isExist = await prisma.staffApplication.findUnique({
    where: {
      id
    }
  });
  if (!isExist) {
    throw new AppError(import_http_status13.default.NOT_FOUND, "Staff application not found");
  }
  const result = await prisma.staffApplication.delete({
    where: {
      id
    },
    include: {
      applicant: {
        omit: {
          password: true
        }
      }
    }
  });
  return result;
};
var staffApplicationServices = {
  createStaffApplicationService,
  getAllStaffApplicationsService,
  getStaffApplicationByIdService,
  updateStaffApplicationService,
  deleteStaffApplicationService
};

// src/modules/staffApplication/staffApplication.controller.ts
var createStaffApplication = catchAsync(
  async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await staffApplicationServices.createStaffApplicationService(
      payload,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status14.default.OK,
      success: true,
      message: "Staff application form submitted successfully",
      data: result
    });
  }
);
var getAllStaffApplications = catchAsync(
  async (req, res) => {
    const { data, meta } = await staffApplicationServices.getAllStaffApplicationsService(req.query);
    sendResponse(res, {
      statusCode: import_http_status14.default.OK,
      success: true,
      message: "All Staff application retrieved successfully",
      data,
      meta
    });
  }
);
var getStaffApplicationById = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const result = await staffApplicationServices.getStaffApplicationByIdService(id);
    sendResponse(res, {
      statusCode: import_http_status14.default.OK,
      success: true,
      message: "Desitre Staff application retrieved successfully",
      data: result
    });
  }
);
var updateStaffApplication = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await staffApplicationServices.updateStaffApplicationService(id, payload);
    sendResponse(res, {
      statusCode: import_http_status14.default.OK,
      success: true,
      message: "Staff application status updated successfully",
      data: result
    });
  }
);
var deleteStaffApplication = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const result = await staffApplicationServices.deleteStaffApplicationService(id);
    sendResponse(res, {
      statusCode: import_http_status14.default.OK,
      success: true,
      message: " Staff application deleted successfully",
      data: result
    });
  }
);
var staffApplicationControllers = {
  createStaffApplication,
  getAllStaffApplications,
  getStaffApplicationById,
  updateStaffApplication,
  deleteStaffApplication
};

// src/modules/staffApplication/staffApplication.validation.ts
var import_zod5 = require("zod");
var staffApplicationIdParamsSchema = import_zod5.z.object({ id: import_zod5.z.string().uuid() }).strict();
var createStaffApplicationSchema = import_zod5.z.object({
  experience: import_zod5.z.coerce.number().int().min(0).max(80),
  experienceDetails: import_zod5.z.string().trim().min(1).max(5e3),
  division: import_zod5.z.string().trim().min(1).max(100),
  district: import_zod5.z.string().trim().min(1).max(100),
  address: import_zod5.z.string().trim().min(1).max(500),
  postalCode: import_zod5.z.string().trim().min(1).max(20)
}).strict();
var updateStaffApplicationSchema = import_zod5.z.object({
  status: import_zod5.z.enum(["PENDING", "APPROVED", "REJECTED"])
}).strict();

// src/modules/staffApplication/staffApplication.route.ts
var router5 = import_express5.default.Router();
router5.post(
  "/",
  auth(Role.CITIZEN),
  validateRequest({ body: createStaffApplicationSchema }),
  staffApplicationControllers.createStaffApplication
);
router5.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  staffApplicationControllers.getAllStaffApplications
);
router5.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffApplicationIdParamsSchema }),
  staffApplicationControllers.getStaffApplicationById
);
router5.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: staffApplicationIdParamsSchema,
    body: updateStaffApplicationSchema
  }),
  staffApplicationControllers.updateStaffApplication
);
router5.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: staffApplicationIdParamsSchema }),
  staffApplicationControllers.deleteStaffApplication
);
var staffApplicationRoutes = router5;

// src/modules/staffManagement/staffManagement.route.ts
var import_express6 = __toESM(require("express"), 1);

// src/modules/staffManagement/staffManagement.controller.ts
var import_http_status16 = __toESM(require("http-status"), 1);

// src/modules/staffManagement/staffManagement.service.ts
var import_http_status15 = __toESM(require("http-status"), 1);
var getAllStaffService = async (query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  andConditions.push({
    role: Role.STAFF
  });
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          email: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  const staffs = await prisma.user.findMany({
    where: {
      AND: andConditions
      //   role:Role.STAFF
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder
    },
    omit: {
      password: true
    },
    include: {
      staffCategories: {
        include: {
          category: true
        }
      }
    }
  });
  const total = await prisma.user.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: staffs,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getStaffByIdService = async (id) => {
  const staff = await prisma.user.findFirst({
    where: {
      id,
      role: Role.STAFF
    },
    omit: {
      password: true
    },
    include: {
      staffCategories: {
        include: {
          category: {
            include: {
              department: true
            }
          }
        }
      }
    }
  });
  if (!staff) {
    throw new AppError(
      import_http_status15.default.NOT_FOUND,
      "Staff not found"
    );
  }
  return staff;
};
var deleteStaffService = async (id) => {
  const isExist = await prisma.user.findFirst({
    where: {
      id,
      role: Role.STAFF
    }
  });
  if (!isExist) {
    throw new AppError(
      import_http_status15.default.NOT_FOUND,
      "Staff not found"
    );
  }
  const result = await prisma.user.delete({
    where: {
      id
    },
    omit: {
      password: true
    }
  });
  return result;
};
var staffServices = {
  getAllStaffService,
  getStaffByIdService,
  deleteStaffService
};

// src/modules/staffManagement/staffManagement.controller.ts
var getAllStaff = catchAsync(async (req, res) => {
  const { data, meta } = await staffServices.getAllStaffService(req.query);
  sendResponse(res, {
    statusCode: import_http_status16.default.OK,
    success: true,
    message: "User data retrieved successfully",
    data,
    meta
  });
});
var getStaffById = catchAsync(async (req, res) => {
  const staffId = req.params.id;
  const result = await staffServices.getStaffByIdService(staffId);
  sendResponse(res, {
    statusCode: import_http_status16.default.OK,
    success: true,
    message: "User data retrieved successfully",
    data: result
  });
});
var deleteStaff = catchAsync(async (req, res) => {
  const staffId = req.params.id;
  const result = await staffServices.deleteStaffService(staffId);
  sendResponse(res, {
    statusCode: import_http_status16.default.OK,
    success: true,
    message: "Staff deleted successfully",
    data: result
  });
});
var staffControllers = {
  getAllStaff,
  getStaffById,
  deleteStaff
};

// src/modules/staffManagement/staffManagement.validation.ts
var import_zod6 = require("zod");
var staffIdParamsSchema = import_zod6.z.object({ id: import_zod6.z.string().uuid() }).strict();

// src/modules/staffManagement/staffManagement.route.ts
var router6 = import_express6.default.Router();
router6.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  staffControllers.getAllStaff
);
router6.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema }),
  staffControllers.getStaffById
);
router6.delete(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema }),
  staffControllers.deleteStaff
);
var staffRoutes = router6;

// src/modules/staffCategory/staffCategory.route.ts
var import_express7 = __toESM(require("express"), 1);

// src/modules/staffCategory/staffCategory.controller.ts
var import_http_status18 = __toESM(require("http-status"), 1);

// src/modules/staffCategory/staffCategory.service.ts
var import_http_status17 = __toESM(require("http-status"), 1);
var assignCategoriesToStaffService = async (staffId, payload) => {
  const isStaffExist = await prisma.user.findFirst({
    where: {
      id: staffId,
      role: Role.STAFF
    }
  });
  if (!isStaffExist) {
    throw new AppError(import_http_status17.default.NOT_FOUND, "Staff not found");
  }
  if (!payload.categoryIds.length) {
    throw new AppError(
      import_http_status17.default.BAD_REQUEST,
      "Please provide at least one category"
    );
  }
  const categoryIds = [...new Set(payload.categoryIds)];
  const categories = await prisma.category.findMany({
    where: {
      id: {
        in: categoryIds
      }
    }
  });
  if (categories.length !== categoryIds.length) {
    throw new AppError(
      import_http_status17.default.NOT_FOUND,
      "One or more categories not found"
    );
  }
  await prisma.$transaction(async (tx) => {
    const existingCategories = await tx.staffCategory.findMany({
      where: {
        staffId
      },
      select: {
        categoryId: true
      }
    });
    const existingCategoryIds = existingCategories.map(
      (item) => item.categoryId
    );
    const isAlreadyUpdated = existingCategoryIds.length === categoryIds.length && categoryIds.every((id) => existingCategoryIds.includes(id));
    if (isAlreadyUpdated) {
      throw new AppError(
        import_http_status17.default.BAD_REQUEST,
        "Categories are already up to date"
      );
    }
    await tx.staffCategory.deleteMany({
      where: {
        staffId,
        categoryId: {
          notIn: categoryIds
        }
      }
    });
    const newCategoryIds = categoryIds.filter(
      (categoryId) => !existingCategoryIds.includes(categoryId)
    );
    if (newCategoryIds.length > 0) {
      await tx.staffCategory.createMany({
        data: newCategoryIds.map((categoryId) => ({
          staffId,
          categoryId
        }))
      });
    }
  });
  const result = await prisma.staffCategory.findMany({
    where: {
      staffId
    },
    include: {
      category: {
        omit: {
          departmentId: true
        },
        include: {
          department: true
        }
      }
    }
  });
  const departments = [];
  for (const item of result) {
    const department = item.category.department;
    let existing = departments.find((d) => d.id === department.id);
    if (!existing) {
      existing = {
        id: department.id,
        name: department.name,
        categories: []
      };
      departments.push(existing);
    }
    existing.categories.push({
      id: item.category.id,
      name: item.category.name
    });
  }
  return {
    staffId,
    departments
  };
};
var getStaffCategoriesService = async (staffId) => {
  const isStaffExist = await prisma.user.findFirst({
    where: {
      id: staffId,
      role: Role.STAFF
    }
  });
  if (!isStaffExist) {
    throw new AppError(import_http_status17.default.NOT_FOUND, "Staff not found");
  }
  const result = await prisma.staffCategory.findMany({
    where: {
      staffId
    },
    include: {
      category: {
        omit: {
          departmentId: true
        },
        include: {
          department: true
        }
      }
    }
  });
  const departments = [];
  for (const item of result) {
    const department = item.category.department;
    let existing = departments.find((d) => d.id === department.id);
    if (!existing) {
      existing = {
        id: department.id,
        name: department.name,
        categories: []
      };
      departments.push(existing);
    }
    existing.categories.push({
      id: item.category.id,
      name: item.category.name
    });
  }
  return {
    staffId,
    departments
  };
};
var removeStaffCategoryService = async (staffId, categoryId) => {
  const isStaffExist = await prisma.user.findFirst({
    where: {
      id: staffId,
      role: Role.STAFF
    }
  });
  if (!isStaffExist) {
    throw new AppError(import_http_status17.default.NOT_FOUND, "Staff not found");
  }
  const isCategoryAssigned = await prisma.staffCategory.findFirst({
    where: {
      staffId,
      categoryId
    }
  });
  if (!isCategoryAssigned) {
    throw new AppError(
      import_http_status17.default.NOT_FOUND,
      "This category is not assigned to this staff"
    );
  }
  await prisma.staffCategory.delete({
    where: {
      staffId_categoryId: {
        staffId,
        categoryId
      }
    }
  });
  const result = await getStaffCategoriesService(staffId);
  return result;
};
var staffCategoryServices = {
  assignCategoriesToStaffService,
  getStaffCategoriesService,
  removeStaffCategoryService
};

// src/modules/staffCategory/staffCategory.controller.ts
var assignCategoriesToStaff = catchAsync(
  async (req, res) => {
    const staffId = req.params.staffId;
    const payload = req.body;
    const result = await staffCategoryServices.assignCategoriesToStaffService(
      staffId,
      payload
    );
    sendResponse(res, {
      statusCode: import_http_status18.default.CREATED,
      success: true,
      message: "Categories assigned to staff successfully",
      data: result
    });
  }
);
var getStaffCategories = catchAsync(
  async (req, res) => {
    const staffId = req.params.staffId;
    const result = await staffCategoryServices.getStaffCategoriesService(
      staffId
    );
    sendResponse(res, {
      statusCode: import_http_status18.default.OK,
      success: true,
      message: "Staff categories retrieved successfully",
      data: result
    });
  }
);
var removeStaffCategory = catchAsync(
  async (req, res) => {
    const staffId = req.params.staffId;
    const categoryId = req.params.categoryId;
    const result = await staffCategoryServices.removeStaffCategoryService(
      staffId,
      categoryId
    );
    sendResponse(res, {
      statusCode: import_http_status18.default.OK,
      success: true,
      message: "Staff's category removed successfully",
      data: result
    });
  }
);
var staffCategoryControllers = {
  assignCategoriesToStaff,
  getStaffCategories,
  removeStaffCategory
};

// src/modules/staffCategory/staffCategory.validation.ts
var import_zod7 = require("zod");
var staffIdParamsSchema2 = import_zod7.z.object({ staffId: import_zod7.z.string().uuid() }).strict();
var staffCategoryParamsSchema = import_zod7.z.object({
  staffId: import_zod7.z.string().uuid(),
  categoryId: import_zod7.z.string().uuid()
}).strict();
var assignCategoriesSchema = import_zod7.z.object({
  categoryIds: import_zod7.z.array(import_zod7.z.string().uuid()).min(1).refine((ids) => new Set(ids).size === ids.length, {
    message: "Category IDs must be unique"
  })
}).strict();

// src/modules/staffCategory/staffCategory.route.ts
var router7 = import_express7.default.Router();
router7.post(
  "/:staffId/categories",
  auth(Role.ADMIN),
  validateRequest({
    params: staffIdParamsSchema2,
    body: assignCategoriesSchema
  }),
  staffCategoryControllers.assignCategoriesToStaff
);
router7.get(
  "/:staffId/categories",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema2 }),
  staffCategoryControllers.getStaffCategories
);
router7.delete(
  "/:staffId/categories/:categoryId",
  auth(Role.ADMIN),
  validateRequest({ params: staffCategoryParamsSchema }),
  staffCategoryControllers.removeStaffCategory
);
var staffCategoryRoutes = router7;

// src/modules/quotation/quotation.route.ts
var import_express8 = __toESM(require("express"), 1);

// src/modules/quotation/quotation.controller.ts
var import_http_status20 = __toESM(require("http-status"), 1);

// src/modules/quotation/quotation.service.ts
var import_http_status19 = __toESM(require("http-status"), 1);
var createQuotationService = async (payload, user) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      requestId: payload.requestId,
      staffId: user.userId
    }
  });
  if (quotation) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "You have already submitted a quotation for this request"
    );
  }
  const result = await prisma.quotation.create({
    data: {
      proposedFee: payload.proposedFee,
      requestId: payload.requestId,
      staffId: user.userId
    }
  });
  return result;
};
var getAllQuotationsService = async (query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  if (query.status) {
    andConditions.push({
      status: query.status
    });
  }
  const quotations = await prisma.quotation.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder
    },
    include: {
      staff: {
        omit: {
          password: true
        }
      },
      request: true
    }
  });
  const total = await prisma.quotation.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: quotations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getQuotationByIdService = async (id, user) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId
    },
    include: {
      staff: {
        omit: {
          password: true
        }
      },
      request: true
    }
  });
  if (!quotation) {
    throw new AppError(import_http_status19.default.NOT_FOUND, "Quotation not found");
  }
  return quotation;
};
var updateQuotationService = async (id, payload, user) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId
    }
  });
  if (!quotation) {
    throw new AppError(import_http_status19.default.NOT_FOUND, "Quotation not found");
  }
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "You cannot update an approved or rejected quotation"
    );
  }
  const result = await prisma.quotation.update({
    where: {
      id
    },
    data: {
      proposedFee: payload.proposedFee
    }
  });
  return result;
};
var updateQuotationStatusService = async (id, payload, user) => {
  const quotation = await prisma.quotation.findUnique({
    where: {
      id
    }
  });
  if (!quotation) {
    throw new AppError(import_http_status19.default.NOT_FOUND, "Quotation not found");
  }
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "Quotation status has already been updated"
    );
  }
  const result = await prisma.quotation.update({
    where: {
      id
    },
    data: {
      status: payload.status
    },
    include: {
      staff: {
        omit: {
          password: true
        }
      },
      request: true
    }
  });
  return result;
};
var deleteQuotationService = async (id, user) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId
    }
  });
  if (!quotation) {
    throw new AppError(import_http_status19.default.NOT_FOUND, "Quotation not found");
  }
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "You cannot delete an approved or rejected quotation"
    );
  }
  const result = await prisma.quotation.delete({
    where: {
      id
    }
  });
  return result;
};
var selectQuotationService = async (payload, user) => {
  const quotation = await prisma.quotation.findUnique({
    where: {
      id: payload.quotationId
    },
    include: {
      request: true
    }
  });
  if (!quotation) {
    throw new AppError(
      import_http_status19.default.NOT_FOUND,
      "Quotation not found"
    );
  }
  if (quotation.request.citizenId !== user.userId) {
    throw new AppError(
      import_http_status19.default.FORBIDDEN,
      "You are not allowed to select this quotation"
    );
  }
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "This quotation is no longer available"
    );
  }
  if (quotation.request.selectedQuotationId) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "A quotation has already been selected"
    );
  }
  if (quotation.request.status !== WorkStatus.REQUESTED) {
    throw new AppError(
      import_http_status19.default.BAD_REQUEST,
      "This work request is not available for quotation selection"
    );
  }
  const result = await prisma.$transaction(async (tx) => {
    const selectedQuotation = await tx.quotation.update({
      where: {
        id: quotation.id
      },
      data: {
        status: QuotationStatus.APPROVED
      }
    });
    await tx.quotation.updateMany({
      where: {
        requestId: quotation.requestId,
        id: {
          not: quotation.id
        },
        status: QuotationStatus.PENDING
      },
      data: {
        status: QuotationStatus.REJECTED
      }
    });
    const updatedRequest = await tx.workRequest.update({
      where: {
        id: quotation.requestId
      },
      data: {
        selectedQuotationId: quotation.id,
        status: WorkStatus.CITIZEN_ACCEPTED
      },
      include: {
        selectedQuotation: {
          include: {
            staff: {
              omit: {
                password: true
              }
            }
          }
        }
      }
    });
    return {
      quotation: selectedQuotation,
      workRequest: updatedRequest
    };
  });
  return result;
};
var quotationServices = {
  createQuotationService,
  getAllQuotationsService,
  getQuotationByIdService,
  updateQuotationService,
  updateQuotationStatusService,
  deleteQuotationService,
  selectQuotationService
  // paySelectedQuotationCallbackService,       //bkash
};

// src/modules/quotation/quotation.controller.ts
var createQuotation = catchAsync(
  async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await quotationServices.createQuotationService(
      payload,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.CREATED,
      success: true,
      message: "Quotation created successfully",
      data: result
    });
  }
);
var getAllQuotations = catchAsync(
  async (req, res) => {
    const query = req.query;
    const result = await quotationServices.getAllQuotationsService(query);
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotations retrieved successfully",
      data: result
    });
  }
);
var getQuotationById = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const result = await quotationServices.getQuotationByIdService(
      id,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotation retrieved successfully",
      data: result
    });
  }
);
var updateQuotation = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await quotationServices.updateQuotationService(
      id,
      payload,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotation updated successfully",
      data: result
    });
  }
);
var updateQuotationStatus = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await quotationServices.updateQuotationStatusService(
      id,
      payload,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotation status updated successfully",
      data: result
    });
  }
);
var deleteQuotation = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const result = await quotationServices.deleteQuotationService(
      id,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotation deleted successfully",
      data: result
    });
  }
);
var selectQuotation = catchAsync(
  async (req, res) => {
    const result = await quotationServices.selectQuotationService(
      req.body,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status20.default.OK,
      success: true,
      message: "Quotation selected successfully",
      data: result
    });
  }
);
var quotationControllers = {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  updateQuotationStatus,
  deleteQuotation,
  selectQuotation
};

// src/modules/quotation/quotation.validation.ts
var import_zod8 = require("zod");
var quotationIdParamsSchema = import_zod8.z.object({ id: import_zod8.z.string().uuid() }).strict();
var createQuotationSchema = import_zod8.z.object({
  proposedFee: import_zod8.z.coerce.number().finite().positive(),
  requestId: import_zod8.z.string().uuid()
}).strict();
var updateQuotationSchema = import_zod8.z.object({
  proposedFee: import_zod8.z.coerce.number().finite().positive().optional(),
  status: import_zod8.z.enum(["PENDING", "APPROVED", "REJECTED"]).optional()
}).strict().refine((value) => Object.keys(value).length > 0, {
  message: "At least one field must be provided"
});
var selectQuotationSchema = import_zod8.z.object({
  quotationId: import_zod8.z.string().uuid()
}).strict();
var updateQuotationStatusSchema = import_zod8.z.object({
  status: import_zod8.z.enum(["PENDING", "APPROVED", "REJECTED"])
}).strict();

// src/modules/quotation/quotation.route.ts
var router8 = import_express8.default.Router();
router8.post(
  "/",
  auth(Role.STAFF),
  validateRequest({ body: createQuotationSchema }),
  quotationControllers.createQuotation
);
router8.post(
  "/select",
  auth(Role.CITIZEN),
  validateRequest({ body: selectQuotationSchema }),
  quotationControllers.selectQuotation
);
router8.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  quotationControllers.getAllQuotations
);
router8.get(
  "/:id",
  auth(Role.STAFF, Role.ADMIN, Role.MANAGER),
  validateRequest({ params: quotationIdParamsSchema }),
  quotationControllers.getQuotationById
);
router8.patch(
  "/:id",
  auth(Role.STAFF),
  validateRequest({
    params: quotationIdParamsSchema,
    body: updateQuotationSchema
  }),
  quotationControllers.updateQuotation
);
router8.patch(
  "/:id/status",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({
    params: quotationIdParamsSchema,
    body: updateQuotationStatusSchema
  }),
  quotationControllers.updateQuotationStatus
);
router8.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: quotationIdParamsSchema }),
  quotationControllers.deleteQuotation
);
var quotationRoutes = router8;

// src/modules/request/workRequest.route.ts
var import_express9 = require("express");

// src/modules/request/workRequest.service.ts
var import_http_status21 = __toESM(require("http-status"), 1);
var createWorkRequestService = async (payload, user) => {
  const citizen = await prisma.user.findUnique({
    where: {
      id: user.userId
    }
  });
  if (!citizen) {
    throw new AppError(import_http_status21.default.NOT_FOUND, "Citizen not found");
  }
  const division = payload.division || citizen.division;
  const city = payload.city || citizen.district;
  const postalCode = payload.postalCode || citizen.postalCode;
  const address = payload.address || citizen.address;
  const phone = payload.phone || citizen.phone;
  if (!division || !city || !postalCode || !address || !phone) {
    throw new AppError(
      import_http_status21.default.BAD_REQUEST,
      "Please provide your complete address and contact information"
    );
  }
  const existingRequest = await prisma.workRequest.findFirst({
    where: {
      citizenId: user.userId,
      title: payload.title,
      description: payload.description,
      departmentId: payload.departmentId,
      division,
      city,
      postalCode,
      address,
      phone,
      status: WorkStatus.PENDING
    }
  });
  if (existingRequest) {
    throw new AppError(
      import_http_status21.default.CONFLICT,
      "You have already submitted this request"
    );
  }
  const workRequest = await prisma.workRequest.create({
    data: {
      title: payload.title,
      description: payload.description,
      departmentId: payload.departmentId,
      division,
      city,
      postalCode,
      address,
      phone,
      citizenId: user.userId
    },
    omit: {
      citizenId: true,
      departmentId: true
    },
    include: {
      citizen: {
        select: {
          name: true,
          email: true,
          role: true
        }
      },
      department: true
    }
  });
  return workRequest;
};
var getAllWorkRequestsService = async (query, user) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const andConditions = [];
  if (user.role === Role.CITIZEN) {
    andConditions.push({
      citizenId: user.userId
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  if (query.status) {
    andConditions.push({
      status: query.status
    });
  }
  const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.workRequest.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [query.sortBy || "createdAt"]: query.sortOrder || "desc"
    },
    omit: {
      citizenId: true,
      departmentId: true
    },
    include: {
      citizen: {
        select: {
          name: true,
          email: true,
          role: true
        }
      },
      department: true
    }
  });
  const total = await prisma.workRequest.count({
    where: whereConditions
  });
  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    },
    data: result
  };
};
var getWorkRequestByIdService = async (id, user) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: {
      id
    },
    omit: {
      citizenId: true,
      departmentId: true
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true
        }
      },
      department: true,
      quotations: true,
      staffInvitations: true,
      payments: true
    }
  });
  if (!workRequest) {
    throw new AppError(import_http_status21.default.NOT_FOUND, "Work request not found");
  }
  if (user.role === Role.CITIZEN && workRequest.citizen.id !== user.userId) {
    throw new AppError(
      import_http_status21.default.FORBIDDEN,
      "You are not allowed to view this work request"
    );
  }
  return workRequest;
};
var updateWorkRequestService = async (id, payload, user) => {
  const workRequest = await prisma.workRequest.findFirst({
    where: {
      id,
      citizenId: user.userId
    }
  });
  if (!workRequest) {
    throw new AppError(import_http_status21.default.NOT_FOUND, "Work request not found");
  }
  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      import_http_status21.default.BAD_REQUEST,
      "You cannot update this request anymore"
    );
  }
  const result = await prisma.workRequest.update({
    where: {
      id
    },
    data: payload,
    omit: {
      citizenId: true
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true
        }
      },
      department: true
    }
  });
  return result;
};
var updateWorkRequestStatusService = async (id, payload, user) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: {
      id
    }
  });
  if (!workRequest) {
    throw new AppError(import_http_status21.default.NOT_FOUND, "Work request not found");
  }
  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      import_http_status21.default.BAD_REQUEST,
      "Work request status cannot be changed"
    );
  }
  if (payload.status === WorkStatus.REJECTED && !payload.rejectionReason) {
    throw new AppError(import_http_status21.default.BAD_REQUEST, "Rejection reason is required");
  }
  const result = await prisma.workRequest.update({
    where: {
      id
    },
    data: {
      status: payload.status,
      rejectionReason: payload.status === WorkStatus.REJECTED ? payload.rejectionReason : null
    },
    omit: {
      citizenId: true
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true
        }
      },
      department: true
    }
  });
  return result;
};
var deleteWorkRequestService = async (id, user) => {
  const workRequest = await prisma.workRequest.findFirst({
    where: {
      id,
      citizenId: user.userId
    }
  });
  if (!workRequest) {
    throw new AppError(import_http_status21.default.NOT_FOUND, "Work request not found");
  }
  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      import_http_status21.default.BAD_REQUEST,
      "You cannot delete this work request anymore"
    );
  }
  const result = await prisma.workRequest.delete({
    where: { id },
    omit: { citizenId: true },
    include: {
      department: true
    }
  });
  return result;
};
var workRequestServices = {
  createWorkRequestService,
  getAllWorkRequestsService,
  getWorkRequestByIdService,
  updateWorkRequestService,
  updateWorkRequestStatusService,
  deleteWorkRequestService
};

// src/modules/request/workRequest.controller.ts
var import_http_status22 = __toESM(require("http-status"), 1);
var createWorkRequest = catchAsync(async (req, res) => {
  const user = req.user;
  const payload = req.body;
  const result = await workRequestServices.createWorkRequestService(
    payload,
    user
  );
  sendResponse(res, {
    statusCode: import_http_status22.default.CREATED,
    success: true,
    message: "Work request created successfully",
    data: result
  });
});
var getAllWorkRequests = catchAsync(async (req, res) => {
  const { data, meta } = await workRequestServices.getAllWorkRequestsService(
    req.query,
    req.user
  );
  sendResponse(res, {
    statusCode: import_http_status22.default.OK,
    success: true,
    message: "Work requests retrieved successfully",
    data,
    meta
  });
});
var getWorkRequestById = catchAsync(async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  const result = await workRequestServices.getWorkRequestByIdService(id, user);
  sendResponse(res, {
    statusCode: import_http_status22.default.OK,
    success: true,
    message: "Single Work request data retrieved successfully",
    data: result
  });
});
var updateWorkRequest = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const user = req.user;
  const result = await workRequestServices.updateWorkRequestService(
    id,
    payload,
    user
  );
  sendResponse(res, {
    statusCode: import_http_status22.default.OK,
    success: true,
    message: "Work request updated successfully",
    data: result
  });
});
var updateWorkRequestStatus = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const user = req.user;
    const result = await workRequestServices.updateWorkRequestStatusService(
      id,
      payload,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status22.default.OK,
      success: true,
      message: "Work request status updated successfully",
      data: result
    });
  }
);
var deleteWorkRequest = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  const result = await workRequestServices.deleteWorkRequestService(id, user);
  sendResponse(res, {
    statusCode: import_http_status22.default.OK,
    success: true,
    message: "Work request deleted successfully",
    data: result
  });
});
var workRequestControllers = {
  createWorkRequest,
  getAllWorkRequests,
  getWorkRequestById,
  updateWorkRequest,
  updateWorkRequestStatus,
  deleteWorkRequest
};

// src/modules/request/workRequest.validation.ts
var import_zod9 = require("zod");
var workRequestIdParamsSchema = import_zod9.z.object({ id: import_zod9.z.string().uuid() }).strict();
var createWorkRequestSchema = import_zod9.z.object({
  title: import_zod9.z.string().trim().min(1).max(200),
  description: import_zod9.z.string().trim().min(1).max(1e4),
  division: import_zod9.z.string().trim().min(1).max(100),
  city: import_zod9.z.string().trim().min(1).max(100),
  address: import_zod9.z.string().trim().min(1).max(500),
  postalCode: import_zod9.z.string().trim().min(1).max(20),
  phone: import_zod9.z.string().trim().min(6).max(20),
  departmentId: import_zod9.z.string().uuid()
}).strict();
var updateWorkRequestSchema = import_zod9.z.object({
  title: import_zod9.z.string().trim().min(1).max(200).optional(),
  description: import_zod9.z.string().trim().min(1).max(1e4).optional(),
  division: import_zod9.z.string().trim().min(1).max(100).optional(),
  city: import_zod9.z.string().trim().min(1).max(100).optional(),
  postalCode: import_zod9.z.string().trim().min(1).max(20).optional(),
  phone: import_zod9.z.string().trim().min(6).max(20).optional()
}).strict().refine((value) => Object.keys(value).length > 0, {
  message: "At least one field must be provided"
});
var updateWorkRequestStatusSchema = import_zod9.z.object({
  status: import_zod9.z.enum([
    "PENDING",
    "REQUESTED",
    "ACCEPTED",
    "CITIZEN_ACCEPTED",
    "CITIZEN_DECLINED",
    "ADVANCE_PAID",
    "ASSIGNED",
    "COMPLETED",
    "REJECTED"
  ]),
  rejectionReason: import_zod9.z.string().trim().max(1e3).optional()
}).strict();

// src/modules/request/workRequest.route.ts
var router9 = (0, import_express9.Router)();
router9.post(
  "/",
  auth(Role.CITIZEN),
  validateRequest({ body: createWorkRequestSchema }),
  workRequestControllers.createWorkRequest
);
router9.get(
  "/",
  auth(Role.CITIZEN, Role.MANAGER, Role.ADMIN),
  workRequestControllers.getAllWorkRequests
);
router9.get(
  "/:id",
  auth(Role.CITIZEN, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: workRequestIdParamsSchema }),
  workRequestControllers.getWorkRequestById
);
router9.patch(
  "/:id",
  auth(Role.CITIZEN),
  validateRequest({
    params: workRequestIdParamsSchema,
    body: updateWorkRequestSchema
  }),
  workRequestControllers.updateWorkRequest
);
router9.patch(
  "/:id/status",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({
    params: workRequestIdParamsSchema,
    body: updateWorkRequestStatusSchema
  }),
  workRequestControllers.updateWorkRequestStatus
);
router9.delete(
  "/:id",
  auth(Role.CITIZEN),
  validateRequest({ params: workRequestIdParamsSchema }),
  workRequestControllers.deleteWorkRequest
);
var workRequestRoutes = router9;

// src/modules/staffInvitation/staffInvitation.route.ts
var import_express10 = require("express");

// src/modules/staffInvitation/staffInvitation.controller.ts
var import_http_status24 = __toESM(require("http-status"), 1);

// src/modules/staffInvitation/staffInvitation.service.ts
var import_http_status23 = __toESM(require("http-status"), 1);
var createStaffInvitationService = async (payload, user) => {
  if (user.role !== Role.MANAGER && user.role !== Role.ADMIN) {
    throw new AppError(
      import_http_status23.default.FORBIDDEN,
      "You are not allowed to send invitations"
    );
  }
  const workRequest = await prisma.workRequest.findUnique({
    where: { id: payload.requestId }
  });
  if (!workRequest) {
    throw new AppError(import_http_status23.default.NOT_FOUND, "Work request not found");
  }
  if (workRequest.status !== WorkStatus.PENDING && workRequest.status !== WorkStatus.REQUESTED) {
    throw new AppError(
      import_http_status23.default.BAD_REQUEST,
      "This work request cannot receive invitations"
    );
  }
  const staff = await prisma.user.findFirst({
    where: {
      id: payload.staffId,
      role: Role.STAFF
    }
  });
  if (!staff) {
    throw new AppError(import_http_status23.default.NOT_FOUND, "Staff not found");
  }
  const staffCategory = await prisma.staffCategory.findFirst({
    where: {
      staffId: payload.staffId,
      category: {
        departmentId: workRequest.departmentId
      }
    }
  });
  if (!staffCategory) {
    throw new AppError(
      import_http_status23.default.BAD_REQUEST,
      "Staff is not assigned to this department's categories"
    );
  }
  const existingInvitation = await prisma.staffInvitation.findUnique({
    where: {
      requestId_staffId: {
        requestId: payload.requestId,
        staffId: payload.staffId
      }
    }
  });
  if (existingInvitation) {
    throw new AppError(
      import_http_status23.default.CONFLICT,
      "This staff member has already been invited"
    );
  }
  const result = await prisma.staffInvitation.create({
    data: {
      requestId: payload.requestId,
      staffId: payload.staffId
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
          division: true,
          district: true,
          address: true,
          postalCode: true,
          staffCategories: {
            include: {
              category: {
                include: {
                  department: {
                    select: {
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      request: true
    }
  });
  if (workRequest.status === WorkStatus.PENDING) {
    await prisma.workRequest.update({
      where: { id: payload.requestId },
      data: {
        status: WorkStatus.REQUESTED
      }
    });
  }
  const formattedResult = {
    ...result,
    staff: {
      ...result.staff,
      department: result.staff.staffCategories[0]?.category.department.name,
      categories: result.staff.staffCategories.map(
        (item) => item.category.name
      )
    }
  };
  delete formattedResult.staff.staffCategories;
  return formattedResult;
};
var getAllStaffInvitationsService = async (query, user) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  if (query.status) {
    andConditions.push({
      status: query.status
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          staff: {
            name: {
              contains: query.searchTerm,
              mode: "insensitive"
            }
          }
        },
        {
          staff: {
            email: {
              contains: query.searchTerm,
              mode: "insensitive"
            }
          }
        },
        {
          request: {
            title: {
              contains: query.searchTerm,
              mode: "insensitive"
            }
          }
        }
      ]
    });
  }
  const invitations = await prisma.staffInvitation.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      request: {
        select: {
          id: true,
          title: true,
          description: true,
          status: true
        }
      }
    }
  });
  const total = await prisma.staffInvitation.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: invitations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getMyInvitationsService = async (query, user) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [];
  andConditions.push({
    staffId: user.userId
  });
  if (query.status) {
    andConditions.push({
      status: query.status
    });
  }
  if (query.searchTerm) {
    andConditions.push({
      request: {
        title: {
          contains: query.searchTerm,
          mode: "insensitive"
        }
      }
    });
  }
  const invitations = await prisma.staffInvitation.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder
    },
    include: {
      request: {
        select: {
          id: true,
          title: true,
          description: true,
          division: true,
          city: true,
          address: true,
          postalCode: true,
          status: true,
          department: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });
  const total = await prisma.staffInvitation.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: invitations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getStaffInvitationByIdService = async (id, user) => {
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
          division: true,
          district: true,
          address: true,
          postalCode: true
        }
      },
      request: {
        include: {
          department: true,
          citizen: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      }
    }
  });
  if (!invitation) {
    throw new AppError(import_http_status23.default.NOT_FOUND, "Staff invitation not found");
  }
  if (user.role === Role.STAFF && invitation.staffId !== user.userId) {
    throw new AppError(
      import_http_status23.default.FORBIDDEN,
      "You are not allowed to view this invitation"
    );
  }
  return invitation;
};
var respondToInvitationService = async (id, payload, user) => {
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id
    }
  });
  if (!invitation) {
    throw new AppError(
      import_http_status23.default.NOT_FOUND,
      "Staff invitation not found"
    );
  }
  if (invitation.staffId !== user.userId) {
    throw new AppError(
      import_http_status23.default.FORBIDDEN,
      "You are not allowed to respond to this invitation"
    );
  }
  if (invitation.status !== InvitationStatus.REQUESTED) {
    throw new AppError(
      import_http_status23.default.BAD_REQUEST,
      "You have already responded to this invitation"
    );
  }
  if (payload.status !== InvitationStatus.ACCEPTED && payload.status !== InvitationStatus.REJECTED) {
    throw new AppError(
      import_http_status23.default.BAD_REQUEST,
      "Invalid invitation response"
    );
  }
  const result = await prisma.staffInvitation.update({
    where: {
      id
    },
    data: {
      status: payload.status,
      responseNote: payload.responseNote
    },
    include: {
      request: {
        select: {
          id: true,
          title: true,
          status: true
        }
      }
    }
  });
  return result;
};
var deleteStaffInvitationService = async (id, user) => {
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id
    }
  });
  if (!invitation) {
    throw new AppError(
      import_http_status23.default.NOT_FOUND,
      "Staff invitation not found"
    );
  }
  if (user.role !== Role.ADMIN && user.role !== Role.MANAGER) {
    throw new AppError(
      import_http_status23.default.FORBIDDEN,
      "You are not allowed to delete this invitation"
    );
  }
  const result = await prisma.staffInvitation.delete({
    where: {
      id
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      request: {
        select: {
          id: true,
          title: true
        }
      }
    }
  });
  return result;
};
var staffInvitationServices = {
  createStaffInvitationService,
  getAllStaffInvitationsService,
  getMyInvitationsService,
  getStaffInvitationByIdService,
  respondToInvitationService,
  deleteStaffInvitationService
};

// src/modules/staffInvitation/staffInvitation.controller.ts
var createStaffInvitation = catchAsync(
  async (req, res) => {
    const payload = req.body;
    const user = req.user;
    const result = await staffInvitationServices.createStaffInvitationService(
      payload,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status24.default.CREATED,
      success: true,
      message: "Staff invitation sent successfully",
      data: result
    });
  }
);
var getAllStaffInvitations = catchAsync(
  async (req, res) => {
    const query = req.query;
    const user = req.user;
    const { data, meta } = await staffInvitationServices.getAllStaffInvitationsService(
      query,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status24.default.OK,
      success: true,
      message: "Staff invitations retrieved successfully",
      data,
      meta
    });
  }
);
var getMyInvitations = catchAsync(async (req, res) => {
  const query = req.query;
  const user = req.user;
  const { data, meta } = await staffInvitationServices.getMyInvitationsService(
    query,
    user
  );
  sendResponse(res, {
    statusCode: import_http_status24.default.OK,
    success: true,
    message: "Your invitations retrieved successfully",
    data,
    meta
  });
});
var getStaffInvitationById = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const result = await staffInvitationServices.getStaffInvitationByIdService(
      id,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status24.default.OK,
      success: true,
      message: "Staff invitation retrieved successfully",
      data: result
    });
  }
);
var respondToInvitation = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const user = req.user;
  const result = await staffInvitationServices.respondToInvitationService(
    id,
    payload,
    user
  );
  sendResponse(res, {
    statusCode: import_http_status24.default.OK,
    success: true,
    message: "Invitation response submitted successfully",
    data: result
  });
});
var deleteStaffInvitation = catchAsync(
  async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const result = await staffInvitationServices.deleteStaffInvitationService(
      id,
      user
    );
    sendResponse(res, {
      statusCode: import_http_status24.default.OK,
      success: true,
      message: "Staff invitation deleted successfully",
      data: result
    });
  }
);
var staffInvitationControllers = {
  createStaffInvitation,
  getAllStaffInvitations,
  getMyInvitations,
  getStaffInvitationById,
  respondToInvitation,
  deleteStaffInvitation
};

// src/modules/staffInvitation/staffInvitation.validation.ts
var import_zod10 = require("zod");
var invitationIdParamsSchema = import_zod10.z.object({ id: import_zod10.z.string().uuid() }).strict();
var createStaffInvitationSchema = import_zod10.z.object({
  requestId: import_zod10.z.string().uuid(),
  staffId: import_zod10.z.string().uuid()
}).strict();
var respondToInvitationSchema = import_zod10.z.object({
  status: import_zod10.z.enum(["ACCEPTED", "REJECTED"]),
  responseNote: import_zod10.z.string().trim().max(1e3).optional()
}).strict();

// src/modules/staffInvitation/staffInvitation.route.ts
var router10 = (0, import_express10.Router)();
router10.post(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({ body: createStaffInvitationSchema }),
  staffInvitationControllers.createStaffInvitation
);
router10.get(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  staffInvitationControllers.getAllStaffInvitations
);
router10.get(
  "/my-invitations",
  auth(Role.STAFF),
  staffInvitationControllers.getMyInvitations
);
router10.get(
  "/:id",
  auth(Role.MANAGER, Role.ADMIN, Role.STAFF),
  validateRequest({ params: invitationIdParamsSchema }),
  staffInvitationControllers.getStaffInvitationById
);
router10.patch(
  "/:id/respond",
  auth(Role.STAFF),
  validateRequest({
    params: invitationIdParamsSchema,
    body: respondToInvitationSchema
  }),
  staffInvitationControllers.respondToInvitation
);
router10.delete(
  "/:id",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({ params: invitationIdParamsSchema }),
  staffInvitationControllers.deleteStaffInvitation
);
var staffInvitationRoutes = router10;

// src/modules/payment/payment.route.ts
var import_express11 = require("express");

// src/modules/payment/payment.controller.ts
var import_http_status26 = __toESM(require("http-status"), 1);

// src/modules/payment/payment.service.ts
var import_http_status25 = __toESM(require("http-status"), 1);
var import_crypto2 = require("crypto");

// src/lib/sslcommerz.ts
var getBaseUrl = () => {
  if (!config_default.ssl_base_url || !config_default.ssl_store_id || !config_default.ssl_store_password) {
    throw new Error("SSLCommerz configuration is missing");
  }
  return config_default.ssl_base_url.replace(/\/+$/, "");
};
var createSslCommerzSession = async (payload) => {
  const baseUrl = getBaseUrl();
  const formData = new URLSearchParams({
    store_id: config_default.ssl_store_id,
    store_passwd: config_default.ssl_store_password,
    ...payload
  });
  const response = await fetch(`${baseUrl}/gwprocess/v4/api.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData
  });
  if (!response.ok) {
    throw new Error("Failed to connect to SSLCommerz");
  }
  return await response.json();
};
var validateSslCommerzPayment = async (valId) => {
  const baseUrl = getBaseUrl();
  const params = new URLSearchParams({
    val_id: valId,
    store_id: config_default.ssl_store_id,
    store_passwd: config_default.ssl_store_password,
    format: "json"
  });
  const response = await fetch(
    `${baseUrl}/validator/api/validationserverAPI.php?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }
  );
  if (!response.ok) {
    throw new Error("Failed to validate SSLCommerz transaction");
  }
  return await response.json();
};

// src/modules/payment/payment.service.ts
var PENDING_EXPIRY_MS = 30 * 60 * 1e3;
var createPaymentService = async (payload, user) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: { id: payload.requestId },
    include: { selectedQuotation: true }
  });
  if (!workRequest) {
    throw new AppError(import_http_status25.default.NOT_FOUND, "Work request not found");
  }
  if (workRequest.citizenId !== user.userId) {
    throw new AppError(import_http_status25.default.FORBIDDEN, "You are not allowed to pay");
  }
  if (!workRequest.selectedQuotation || workRequest.status !== WorkStatus.CITIZEN_ACCEPTED) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "No accepted quotation found");
  }
  const paidPayment = await prisma.payment.findFirst({
    where: {
      requestId: payload.requestId,
      status: PaymentStatus.PAID
    }
  });
  if (paidPayment) {
    throw new AppError(
      import_http_status25.default.BAD_REQUEST,
      "This work request has already been paid"
    );
  }
  const pendingPayment = await prisma.payment.findFirst({
    where: {
      requestId: payload.requestId,
      status: PaymentStatus.PENDING
    }
  });
  if (pendingPayment) {
    const gatewayResponse = pendingPayment.gatewayResponse;
    if (gatewayResponse && gatewayResponse.reviewRequired === true) {
      throw new AppError(
        import_http_status25.default.BAD_REQUEST,
        "Your previous payment is under review. Please wait for verification."
      );
    }
    const paymentAge = Date.now() - pendingPayment.createdAt.getTime();
    if (paymentAge < PENDING_EXPIRY_MS) {
      throw new AppError(
        import_http_status25.default.BAD_REQUEST,
        "A payment session is already active. Please try again later."
      );
    }
    await prisma.payment.updateMany({
      where: { id: pendingPayment.id, status: PaymentStatus.PENDING },
      data: { status: PaymentStatus.FAILED }
    });
  }
  const amount = new prismaNamespace_exports.Decimal(workRequest.selectedQuotation.proposedFee).mul(0.15).toDecimalPlaces(2);
  if (amount.lessThan(10)) {
    throw new AppError(
      import_http_status25.default.BAD_REQUEST,
      "Advance payment must be at least 10 BDT"
    );
  }
  const merchantInvoiceNumber = `NL-${(0, import_crypto2.randomUUID)()}`;
  const payment = await prisma.payment.create({
    data: {
      requestId: payload.requestId,
      amount,
      merchantInvoiceNumber
    }
  });
  let session;
  try {
    session = await createSslCommerzSession({
      total_amount: amount.toFixed(2),
      currency: "BDT",
      tran_id: merchantInvoiceNumber,
      success_url: `${config_default.app_url}/api/v1/payments/success`,
      fail_url: `${config_default.app_url}/api/v1/payments/failure`,
      cancel_url: `${config_default.app_url}/api/v1/payments/cancel`,
      ipn_url: `${config_default.app_url}/api/v1/payments/ipn`,
      product_name: workRequest.title,
      product_category: "Service",
      product_profile: "general",
      cus_name: user.name,
      cus_email: user.email,
      cus_add1: workRequest.address,
      cus_city: workRequest.city,
      cus_postcode: workRequest.postalCode,
      cus_country: "Bangladesh",
      cus_phone: workRequest.phone,
      shipping_method: "NO"
    });
  } catch (error) {
    console.error("[SSLCommerz] Session creation error:", error);
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: {
          error: "SSLCommerz session creation failed"
        }
      }
    });
    throw new AppError(
      import_http_status25.default.BAD_GATEWAY,
      "Unable to connect to SSLCommerz"
    );
  }
  const gatewayUrl = session.GatewayPageURL;
  if (session.status !== "SUCCESS" || !gatewayUrl) {
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: session
      }
    });
    throw new AppError(
      import_http_status25.default.BAD_GATEWAY,
      session.failedreason || "Unable to initiate SSLCommerz payment"
    );
  }
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        gatewayResponse: session
      }
    });
    await tx.sslCommerzPayment.create({
      data: {
        paymentId: payment.id,
        tranId: merchantInvoiceNumber,
        gatewayResponse: session
      }
    });
  });
  return {
    paymentId: payment.id,
    amount: amount.toFixed(2),
    paymentUrl: gatewayUrl
  };
};
var verifyAndCompletePayment = async (data) => {
  const tranId = String(data.tran_id || "");
  const valId = String(data.val_id || "");
  if (!tranId || !valId) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Invalid payment callback");
  }
  const payment = await prisma.payment.findUnique({
    where: { merchantInvoiceNumber: tranId },
    include: {
      request: {
        include: {
          selectedQuotation: true
        }
      },
      sslcommerzPayment: true
    }
  });
  if (!payment) {
    throw new AppError(import_http_status25.default.NOT_FOUND, "Payment not found");
  }
  if (payment.status === PaymentStatus.PAID) {
    return { success: true, status: "PAID" };
  }
  if (payment.status !== PaymentStatus.PENDING) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Payment is not pending");
  }
  if (payment.sslcommerzPayment && payment.sslcommerzPayment.tranId !== tranId) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Transaction ID mismatch");
  }
  const validation = await validateSslCommerzPayment(valId);
  const validStatus = ["VALID", "VALIDATED"].includes(
    String(validation.status).toUpperCase()
  );
  const validTranId = validation.tran_id === tranId;
  const validCurrency = String(validation.currency).toUpperCase() === payment.currency.toUpperCase();
  const validAmount = validation.amount !== void 0 && new prismaNamespace_exports.Decimal(String(validation.amount)).equals(payment.amount);
  const receivedStoreId = String(validation.store_id || data.store_id || "");
  const validStoreId = receivedStoreId === String(config_default.ssl_store_id);
  if (!config_default.ssl_is_live) {
    console.log("[SSLCommerz] Validation checks:", {
      tranId,
      validStatus,
      validTranId,
      validCurrency,
      validAmount,
      validStoreId,
      risk_level: validation.risk_level,
      risk_title: validation.risk_title
    });
  }
  if (!validStatus || !validTranId || !validCurrency || !validAmount || !validStoreId) {
    throw new AppError(
      import_http_status25.default.BAD_REQUEST,
      "SSLCommerz transaction validation failed"
    );
  }
  const isRisky = String(validation.risk_level) === "1";
  if (isRisky && config_default.ssl_is_live) {
    await prisma.payment.updateMany({
      where: { id: payment.id, status: PaymentStatus.PENDING },
      data: {
        gatewayResponse: {
          ...validation,
          reviewRequired: true
        }
      }
    });
    console.warn(
      `[SSLCommerz] Payment ${tranId} flagged risky, held for manual review`
    );
    return { success: false, status: "UNDER_REVIEW" };
  }
  if (isRisky) {
    console.warn(
      "[SSLCommerz] Risky transaction accepted because SSL_IS_LIVE=false"
    );
  }
  if (!payment.request.selectedQuotation) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Selected quotation not found");
  }
  await prisma.$transaction(async (tx) => {
    const currentPayment = await tx.payment.findUnique({
      where: { id: payment.id }
    });
    if (!currentPayment || currentPayment.status === PaymentStatus.PAID) {
      return;
    }
    if (currentPayment.status !== PaymentStatus.PENDING) {
      throw new AppError(import_http_status25.default.BAD_REQUEST, "Payment is not pending");
    }
    const currentRequest = await tx.workRequest.findUnique({
      where: { id: payment.requestId },
      include: { selectedQuotation: true }
    });
    if (!currentRequest || currentRequest.status !== WorkStatus.CITIZEN_ACCEPTED || !currentRequest.selectedQuotation) {
      throw new AppError(
        import_http_status25.default.BAD_REQUEST,
        "Work request is not ready for assignment"
      );
    }
    const storeAmount = validation.store_amount ? new prismaNamespace_exports.Decimal(String(validation.store_amount)) : null;
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.PAID,
        paidAt: /* @__PURE__ */ new Date(),
        gatewayResponse: validation
      }
    });
    await tx.sslCommerzPayment.upsert({
      where: { paymentId: payment.id },
      create: {
        paymentId: payment.id,
        tranId,
        valId,
        bankTranId: String(validation.bank_tran_id || ""),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(validation.card_issuer_country || ""),
        storeAmount,
        gatewayResponse: validation
      },
      update: {
        valId,
        bankTranId: String(validation.bank_tran_id || ""),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(validation.card_issuer_country || ""),
        storeAmount,
        gatewayResponse: validation
      }
    });
    await tx.workRequest.update({
      where: { id: payment.requestId },
      data: {
        status: WorkStatus.ADVANCE_PAID
      }
    });
    await tx.assignment.upsert({
      where: { requestId: payment.requestId },
      create: {
        requestId: payment.requestId,
        staffId: currentRequest.selectedQuotation.staffId,
        citizenId: currentRequest.citizenId,
        amount: currentRequest.selectedQuotation.proposedFee,
        advanceAmount: payment.amount,
        status: AssignmentStatus.ONGOING
      },
      update: {}
    });
  });
  return { success: true, status: "PAID" };
};
var paymentSuccessService = async (data) => {
  try {
    const result = await verifyAndCompletePayment(data);
    if (result.status === "UNDER_REVIEW") {
      return { redirectUrl: `${config_default.frontend_url}/payment/under-review` };
    }
    return { redirectUrl: `${config_default.frontend_url}/payment/success` };
  } catch (error) {
    console.error("[SSLCommerz] Success callback failed:", error);
    return { redirectUrl: `${config_default.frontend_url}/payment/failed` };
  }
};
var markPaymentFailed = async (data) => {
  const tranId = String(data.tran_id || "");
  if (!tranId) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Transaction ID is missing");
  }
  const payment = await prisma.payment.findUnique({
    where: { merchantInvoiceNumber: tranId }
  });
  if (!payment) {
    throw new AppError(import_http_status25.default.NOT_FOUND, "Payment not found");
  }
  if (payment.status === PaymentStatus.PENDING) {
    await prisma.payment.updateMany({
      where: { id: payment.id, status: PaymentStatus.PENDING },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: data
      }
    });
  }
};
var paymentFailureService = async (data) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error("[SSLCommerz] Failure callback error:", error);
  }
  return { redirectUrl: `${config_default.frontend_url}/payment/failed` };
};
var paymentCancelService = async (data) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error("[SSLCommerz] Cancel callback error:", error);
  }
  return { redirectUrl: `${config_default.frontend_url}/payment/cancelled` };
};
var paymentIpnService = async (data) => {
  const status = String(data.status || "").toUpperCase();
  if (!["VALID", "VALIDATED"].includes(status) || !data.val_id) {
    return;
  }
  try {
    await verifyAndCompletePayment(data);
  } catch (error) {
    console.error("[SSLCommerz] IPN processing failed:", error);
  }
};
var approveReviewedPaymentService = async (paymentId) => {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: {
      request: { include: { selectedQuotation: true } },
      sslcommerzPayment: true
    }
  });
  if (!payment) {
    throw new AppError(import_http_status25.default.NOT_FOUND, "Payment not found");
  }
  const gatewayResponse = payment.gatewayResponse;
  if (payment.status !== PaymentStatus.PENDING || !gatewayResponse || gatewayResponse.reviewRequired !== true) {
    throw new AppError(
      import_http_status25.default.BAD_REQUEST,
      "Payment is not waiting for review"
    );
  }
  if (!payment.request.selectedQuotation) {
    throw new AppError(import_http_status25.default.BAD_REQUEST, "Selected quotation not found");
  }
  const quotation = payment.request.selectedQuotation;
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.PAID,
        paidAt: /* @__PURE__ */ new Date(),
        gatewayResponse: {
          ...gatewayResponse,
          reviewRequired: false,
          reviewApproved: true
        }
      }
    });
    await tx.workRequest.update({
      where: { id: payment.requestId },
      data: { status: WorkStatus.ADVANCE_PAID }
    });
    await tx.assignment.upsert({
      where: { requestId: payment.requestId },
      create: {
        requestId: payment.requestId,
        staffId: quotation.staffId,
        citizenId: payment.request.citizenId,
        amount: quotation.proposedFee,
        advanceAmount: payment.amount,
        status: AssignmentStatus.ONGOING
      },
      update: {}
    });
  });
  return { success: true };
};
var getPaymentByIdService = async (id, user) => {
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: {
      sslcommerzPayment: true,
      request: true
    }
  });
  if (!payment) {
    throw new AppError(import_http_status25.default.NOT_FOUND, "Payment not found");
  }
  if (payment.request.citizenId !== user.userId && user.role !== "ADMIN" && user.role !== "MANAGER") {
    throw new AppError(import_http_status25.default.FORBIDDEN, "You cannot view this payment");
  }
  return payment;
};
var paymentServices = {
  createPaymentService,
  paymentSuccessService,
  paymentFailureService,
  paymentCancelService,
  paymentIpnService,
  approveReviewedPaymentService,
  getPaymentByIdService
};

// src/modules/payment/payment.controller.ts
var createPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.createPaymentService(
    req.body,
    req.user
  );
  sendResponse(res, {
    statusCode: import_http_status26.default.CREATED,
    success: true,
    message: "Payment initiated successfully",
    data: result
  });
});
var paymentSuccess = catchAsync(async (req, res) => {
  const result = await paymentServices.paymentSuccessService(
    req.body
  );
  res.redirect(result.redirectUrl);
});
var paymentFailure = catchAsync(async (req, res) => {
  const result = await paymentServices.paymentFailureService(
    req.body
  );
  res.redirect(result.redirectUrl);
});
var paymentCancel = catchAsync(async (req, res) => {
  const result = await paymentServices.paymentCancelService(
    req.body
  );
  res.redirect(result.redirectUrl);
});
var paymentIpn = catchAsync(async (req, res) => {
  await paymentServices.paymentIpnService(req.body);
  res.status(import_http_status26.default.OK).send("IPN received");
});
var approveReviewedPayment = catchAsync(
  async (req, res) => {
    const result = await paymentServices.approveReviewedPaymentService(
      req.params["id"]
    );
    sendResponse(res, {
      statusCode: import_http_status26.default.OK,
      success: true,
      message: "Payment approved successfully",
      data: result
    });
  }
);
var getPaymentById = catchAsync(async (req, res) => {
  const result = await paymentServices.getPaymentByIdService(
    req.params["id"],
    req.user
  );
  sendResponse(res, {
    statusCode: import_http_status26.default.OK,
    success: true,
    message: "Payment retrieved successfully",
    data: result
  });
});
var paymentControllers = {
  createPayment,
  paymentSuccess,
  paymentFailure,
  paymentCancel,
  paymentIpn,
  approveReviewedPayment,
  getPaymentById
};

// src/modules/payment/payment.validation.ts
var import_zod11 = require("zod");
var paymentIdParamsSchema = import_zod11.z.object({ id: import_zod11.z.string().uuid() }).strict();
var createPaymentSchema = import_zod11.z.object({
  requestId: import_zod11.z.string().uuid()
}).strict();

// src/modules/payment/payment.route.ts
var router11 = (0, import_express11.Router)();
router11.post(
  "/create",
  auth(Role.CITIZEN),
  validateRequest({ body: createPaymentSchema }),
  paymentControllers.createPayment
);
router11.post("/success", paymentControllers.paymentSuccess);
router11.post("/failure", paymentControllers.paymentFailure);
router11.post("/cancel", paymentControllers.paymentCancel);
router11.post("/ipn", paymentControllers.paymentIpn);
router11.patch(
  "/:id/approve",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: paymentIdParamsSchema }),
  paymentControllers.approveReviewedPayment
);
router11.get(
  "/:id",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER),
  validateRequest({ params: paymentIdParamsSchema }),
  paymentControllers.getPaymentById
);
var paymentRoutes = router11;

// src/modules/assignment/assignment.route.ts
var import_express12 = require("express");

// src/modules/assignment/assignment.controller.ts
var import_http_status28 = __toESM(require("http-status"), 1);

// src/modules/assignment/assignment.service.ts
var import_http_status27 = __toESM(require("http-status"), 1);
var getMyAssignmentsService = async (user) => {
  const where = user.role === Role.CITIZEN ? { citizenId: user.userId } : user.role === Role.STAFF ? { staffId: user.userId } : {};
  const assignments = await prisma.assignment.findMany({
    where,
    include: {
      staff: {
        omit: { password: true }
      },
      citizen: {
        omit: { password: true }
      },
      request: true,
      attachments: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return assignments;
};
var getAssignmentByIdService = async (id, user) => {
  const assignment = await prisma.assignment.findUnique({
    where: { id },
    include: {
      staff: {
        omit: { password: true }
      },
      citizen: {
        omit: { password: true }
      },
      request: true,
      attachments: true
    }
  });
  if (!assignment) {
    throw new AppError(
      import_http_status27.default.NOT_FOUND,
      "Assignment not found"
    );
  }
  const isOwner = assignment.citizenId === user.userId || assignment.staffId === user.userId;
  const isAdminOrManager = user.role === Role.ADMIN || user.role === Role.MANAGER;
  if (!isOwner && !isAdminOrManager) {
    throw new AppError(
      import_http_status27.default.FORBIDDEN,
      "You are not allowed to view this assignment"
    );
  }
  return assignment;
};
var submitAssignmentCompletionService = async (id, user) => {
  const assignment = await prisma.assignment.findUnique({
    where: { id }
  });
  if (!assignment) {
    throw new AppError(
      import_http_status27.default.NOT_FOUND,
      "Assignment not found"
    );
  }
  if (assignment.staffId !== user.userId) {
    throw new AppError(
      import_http_status27.default.FORBIDDEN,
      "Only the assigned staff can submit completion"
    );
  }
  if (assignment.status !== AssignmentStatus.ONGOING) {
    throw new AppError(
      import_http_status27.default.BAD_REQUEST,
      "Only ongoing assignments can be submitted for completion"
    );
  }
  const attachmentCount = await prisma.workAttachment.count({
    where: {
      assignmentId: id
    }
  });
  if (attachmentCount === 0) {
    throw new AppError(
      import_http_status27.default.BAD_REQUEST,
      "Please upload at least one attachment before submitting completion"
    );
  }
  const updatedAssignment = await prisma.assignment.update({
    where: { id },
    data: {
      status: AssignmentStatus.COMPLETION_SUBMITTED
    },
    include: {
      staff: {
        omit: { password: true }
      },
      citizen: {
        omit: { password: true }
      },
      request: true,
      attachments: true
    }
  });
  return updatedAssignment;
};
var reviewAssignmentCompletionService = async (id, payload, user) => {
  if (user.role !== Role.MANAGER && user.role !== Role.ADMIN) {
    throw new AppError(
      import_http_status27.default.FORBIDDEN,
      "Only managers and admins can review completion"
    );
  }
  if (payload.status !== "COMPLETED" && payload.status !== "ONGOING") {
    throw new AppError(
      import_http_status27.default.BAD_REQUEST,
      "Invalid review status. Use COMPLETED or ONGOING"
    );
  }
  const assignment = await prisma.assignment.findUnique({
    where: { id }
  });
  if (!assignment) {
    throw new AppError(
      import_http_status27.default.NOT_FOUND,
      "Assignment not found"
    );
  }
  if (assignment.status !== AssignmentStatus.COMPLETION_SUBMITTED) {
    throw new AppError(
      import_http_status27.default.BAD_REQUEST,
      "This assignment has not been submitted for completion"
    );
  }
  const updatedAssignment = await prisma.assignment.update({
    where: { id },
    data: {
      status: payload.status === "COMPLETED" ? AssignmentStatus.COMPLETED : AssignmentStatus.ONGOING
    },
    include: {
      staff: {
        omit: { password: true }
      },
      citizen: {
        omit: { password: true }
      },
      request: true,
      attachments: true
    }
  });
  return updatedAssignment;
};
var assignmentServices = {
  getMyAssignmentsService,
  getAssignmentByIdService,
  submitAssignmentCompletionService,
  reviewAssignmentCompletionService
};

// src/modules/assignment/assignment.controller.ts
var getMyAssignments = catchAsync(async (req, res) => {
  const result = await assignmentServices.getMyAssignmentsService(req.user);
  sendResponse(res, {
    statusCode: import_http_status28.default.OK,
    success: true,
    message: "Assignments retrieved successfully",
    data: result
  });
});
var getAssignmentById = catchAsync(async (req, res) => {
  const result = await assignmentServices.getAssignmentByIdService(
    req.params["id"],
    req.user
  );
  sendResponse(res, {
    statusCode: import_http_status28.default.OK,
    success: true,
    message: "Assignment retrieved successfully",
    data: result
  });
});
var submitAssignmentCompletion = catchAsync(
  async (req, res) => {
    const result = await assignmentServices.submitAssignmentCompletionService(
      req.params["id"],
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status28.default.OK,
      success: true,
      message: "Work completion submitted successfully",
      data: result
    });
  }
);
var reviewAssignmentCompletion = catchAsync(
  async (req, res) => {
    const result = await assignmentServices.reviewAssignmentCompletionService(
      req.params.id,
      req.body,
      req.user
    );
    sendResponse(res, {
      statusCode: import_http_status28.default.OK,
      success: true,
      message: req.body.status === "COMPLETED" ? "Assignment completed successfully" : "Assignment sent back for correction",
      data: result
    });
  }
);
var assignmentControllers = {
  getMyAssignments,
  getAssignmentById,
  submitAssignmentCompletion,
  reviewAssignmentCompletion
};

// src/modules/assignment/assignment.validation.ts
var import_zod12 = require("zod");
var assignmentIdParamsSchema = import_zod12.z.object({ id: import_zod12.z.string().uuid() }).strict();
var reviewAssignmentSchema = import_zod12.z.object({
  status: import_zod12.z.enum(["COMPLETED", "ONGOING"])
}).strict();

// src/modules/assignment/assignment.route.ts
var router12 = (0, import_express12.Router)();
router12.get(
  "/",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  assignmentControllers.getMyAssignments
);
router12.get(
  "/:id",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: assignmentIdParamsSchema }),
  assignmentControllers.getAssignmentById
);
router12.patch(
  "/:id/submit-completion",
  auth(Role.STAFF),
  validateRequest({ params: assignmentIdParamsSchema }),
  assignmentControllers.submitAssignmentCompletion
);
router12.patch(
  "/:id/review",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({
    params: assignmentIdParamsSchema,
    body: reviewAssignmentSchema
  }),
  assignmentControllers.reviewAssignmentCompletion
);
var assignmentRoutes = router12;

// src/app.ts
var app = (0, import_express13.default)();
app.use(
  (0, import_cors.default)({
    origin: config_default.app_url,
    credentials: true
  })
);
app.use(import_express13.default.json());
app.use(import_express13.default.urlencoded({ extended: true }));
app.use((0, import_cookie_parser.default)());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/departments", departmentRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/staff-application", staffApplicationRoutes);
app.use("/api/v1/staff", staffRoutes);
app.use("/api/v1/staff-category", staffCategoryRoutes);
app.use("/api/v1/quotation", quotationRoutes);
app.use("/api/v1/work-request", workRequestRoutes);
app.use("/api/v1/staff-invitation", staffInvitationRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/assignments", assignmentRoutes);
app.use("/api/v1/work-attachments", assignmentRoutes);
app.use("/", (req, res) => {
  res.json({
    success: true,
    message: "NagarLink Server is now live"
  });
});
app.use(globalHandleError);
app.use(NotFound);
var app_default = app;

// src/utils/seed.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"), 1);
var import_http_status29 = __toESM(require("http-status"), 1);
var seedAdmin = async () => {
  try {
    const isAdmin = await prisma.user.findFirst({
      where: {
        role: Role.ADMIN
      }
    });
    if (isAdmin) {
      console.log("Admin already exist");
      return;
    }
    const name = config_default.tester_admin_name;
    const email = config_default.tester_admin_email;
    const password = config_default.tester_admin_password;
    if (!name || !email || !password) {
      throw new AppError(
        import_http_status29.default.INTERNAL_SERVER_ERROR,
        " Admin name,email,password missing in env file"
      );
    }
    const hashedPassword = await import_bcryptjs2.default.hash(
      password,
      Number(config_default.bcrypt_salt_rounds)
    );
    const admin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.ADMIN,
        needPasswordChange: true,
        emailVerified: true
      }
    });
    console.log("tester Admin created successfully", admin);
  } catch (error) {
    console.log("Error seeding admin", error);
    await prisma.user.delete({
      where: {
        email: config_default.tester_admin_email
      }
    });
  }
};
var seedManager = async () => {
  try {
    const isManager = await prisma.user.findFirst({
      where: {
        role: Role.MANAGER
      }
    });
    if (isManager) {
      console.log("Manger already exist");
      return;
    }
    const name = config_default.tester_manager_name;
    const email = config_default.tester_manager_email;
    const password = config_default.tester_manager_password;
    if (!name || !email || !password) {
      throw new AppError(
        import_http_status29.default.INTERNAL_SERVER_ERROR,
        "tester Manager name,email,password missing in env file"
      );
    }
    const hashedPassword = await import_bcryptjs2.default.hash(
      password,
      Number(config_default.bcrypt_salt_rounds)
    );
    const manager = await prisma.user.create({
      data: {
        name,
        email,
        role: Role.MANAGER,
        password: hashedPassword,
        needPasswordChange: true,
        emailVerified: false
      }
    });
    console.log("tester manager created successfully", manager);
  } catch (error) {
    console.log("error seeding manager", error);
    await prisma.user.delete({
      where: {
        email: config_default.tester_manager_email
      }
    });
  }
};
var seedStaff = async () => {
  try {
    const istaff = await prisma.user.findFirst({
      where: {
        role: Role.STAFF
      }
    });
    if (istaff) {
      console.log("tester staff already exist");
      return;
    }
    const name = config_default.tester_staff_name;
    const email = config_default.tester_staff_email;
    const password = config_default.tester_staff_password;
    if (!name || !email || !password) {
      throw new AppError(
        import_http_status29.default.INTERNAL_SERVER_ERROR,
        "tester staff name,email,password missing in env file"
      );
    }
    const hashedPassword = await import_bcryptjs2.default.hash(
      password,
      Number(config_default.bcrypt_salt_rounds)
    );
    const manager = await prisma.user.create({
      data: {
        name,
        email,
        role: Role.STAFF,
        password: hashedPassword,
        needPasswordChange: true,
        emailVerified: false
      }
    });
    console.log("tester staff created successfully", manager);
  } catch (error) {
    console.log("error seeding staff", error);
    await prisma.user.delete({
      where: {
        email: config_default.tester_staff_email
      }
    });
  }
};

// src/server.ts
var port = config_default.port;
var main = async () => {
  try {
    prisma.$connect();
    console.log("Database connected successfully");
    await redisClient.connect();
    console.log("redis connected successfully");
    seedAdmin();
    seedManager();
    seedStaff();
    app_default.listen(port, () => {
      console.log(`NagarLink app is running on port : ${port}`);
    });
  } catch (error) {
    console.log("database disconnected", error);
    prisma.$disconnect();
    process.exit(1);
  }
};
main();
//# sourceMappingURL=server.cjs.map