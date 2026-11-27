-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'STAFF', 'CITIZEN');

-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('GOOGLE', 'CREDENTIAL');

-- CreateEnum
CREATE TYPE "StaffApplicationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('PENDING', 'REQUESTED', 'ACCEPTED', 'CITIZEN_ACCEPTED', 'CITIZEN_DECLINED', 'ADVANCE_PAID', 'ASSIGNED', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "QuotationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AssignmentStatus" AS ENUM ('ONGOING', 'COMPLETION_SUBMITTED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('REQUESTED', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- CreateTable
CREATE TABLE "assignments" (
    "id" TEXT NOT NULL,
    "status" "AssignmentStatus" NOT NULL DEFAULT 'ONGOING',
    "amount" DECIMAL(10,2) NOT NULL,
    "advanceAmount" DECIMAL(10,2) NOT NULL,
    "requestId" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "citizenId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "fileType" TEXT,
    "fileName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "assignmentId" TEXT NOT NULL,
    "citizenId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "paymentGateway" TEXT NOT NULL DEFAULT 'sslcommerz',
    "merchantInvoiceNumber" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3),
    "gatewayResponse" JSONB,
    "refundTrxId" TEXT,
    "refundAmount" DECIMAL(10,2),
    "refundReason" TEXT,
    "refundedAt" TIMESTAMP(3),
    "requestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sslcommerz_payments" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "tranId" TEXT NOT NULL,
    "bankTranId" TEXT,
    "valId" TEXT,
    "cardType" TEXT,
    "cardIssuer" TEXT,
    "cardBrand" TEXT,
    "cardIssuerCountry" TEXT,
    "storeAmount" DECIMAL(10,2),
    "gatewayResponse" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sslcommerz_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotations" (
    "id" TEXT NOT NULL,
    "proposedFee" DECIMAL(10,2) NOT NULL,
    "status" "QuotationStatus" NOT NULL DEFAULT 'PENDING',
    "requestId" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_applications" (
    "id" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "experienceDetails" TEXT NOT NULL,
    "status" "StaffApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "applicantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_category" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "staff_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_invitations" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "status" "InvitationStatus" NOT NULL DEFAULT 'REQUESTED',
    "responseNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_location" (
    "id" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "needPasswordChange" BOOLEAN NOT NULL DEFAULT false,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "googleId" TEXT,
    "authProvider" "AuthProvider" NOT NULL DEFAULT 'CREDENTIAL',
    "phone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CITIZEN',
    "division" TEXT,
    "district" TEXT,
    "address" TEXT,
    "postalCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_requests" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "approvedFee" DECIMAL(10,2),
    "status" "WorkStatus" NOT NULL DEFAULT 'PENDING',
    "rejectionReason" TEXT,
    "citizenId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "selectedQuotationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "assignments_staffId_idx" ON "assignments"("staffId");

-- CreateIndex
CREATE INDEX "assignments_citizenId_idx" ON "assignments"("citizenId");

-- CreateIndex
CREATE UNIQUE INDEX "assignments_requestId_key" ON "assignments"("requestId");

-- CreateIndex
CREATE INDEX "attachments_assignmentId_idx" ON "attachments"("assignmentId");

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "feedbacks_assignmentId_key" ON "feedbacks"("assignmentId");

-- CreateIndex
CREATE INDEX "feedbacks_citizenId_idx" ON "feedbacks"("citizenId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_merchantInvoiceNumber_key" ON "payments"("merchantInvoiceNumber");

-- CreateIndex
CREATE INDEX "payments_requestId_idx" ON "payments"("requestId");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "payments"("status");

-- CreateIndex
CREATE UNIQUE INDEX "sslcommerz_payments_paymentId_key" ON "sslcommerz_payments"("paymentId");

-- CreateIndex
CREATE UNIQUE INDEX "sslcommerz_payments_tranId_key" ON "sslcommerz_payments"("tranId");

CREATE UNIQUE INDEX "payments_one_active_per_request"
ON "payments" ("requestId")
WHERE "status" IN ('PENDING', 'PAID');

-- CreateIndex
CREATE INDEX "sslcommerz_payments_tranId_idx" ON "sslcommerz_payments"("tranId");

-- CreateIndex
CREATE INDEX "quotations_staffId_idx" ON "quotations"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "quotations_requestId_staffId_key" ON "quotations"("requestId", "staffId");

-- CreateIndex
CREATE UNIQUE INDEX "staff_applications_applicantId_key" ON "staff_applications"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "staff_category_staffId_categoryId_key" ON "staff_category"("staffId", "categoryId");

-- CreateIndex
CREATE INDEX "staff_invitations_requestId_idx" ON "staff_invitations"("requestId");

-- CreateIndex
CREATE INDEX "staff_invitations_staffId_idx" ON "staff_invitations"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "staff_invitations_requestId_staffId_key" ON "staff_invitations"("requestId", "staffId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_googleId_key" ON "users"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "work_requests_selectedQuotationId_key" ON "work_requests"("selectedQuotationId");

-- CreateIndex
CREATE INDEX "work_requests_citizenId_idx" ON "work_requests"("citizenId");

-- CreateIndex
CREATE INDEX "work_requests_status_idx" ON "work_requests"("status");

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_citizenId_fkey" FOREIGN KEY ("citizenId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "assignments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "assignments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_citizenId_fkey" FOREIGN KEY ("citizenId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sslcommerz_payments" ADD CONSTRAINT "sslcommerz_payments_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_applications" ADD CONSTRAINT "staff_applications_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_category" ADD CONSTRAINT "staff_category_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_category" ADD CONSTRAINT "staff_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_invitations" ADD CONSTRAINT "staff_invitations_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_invitations" ADD CONSTRAINT "staff_invitations_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_location" ADD CONSTRAINT "staff_location_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_citizenId_fkey" FOREIGN KEY ("citizenId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_selectedQuotationId_fkey" FOREIGN KEY ("selectedQuotationId") REFERENCES "quotations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
