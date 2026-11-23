/*
  Warnings:

  - The values [APPROVED] on the enum `WorkStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Quotation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[selectedQuotationId]` on the table `work_requests` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AssignmentStatus" ADD VALUE 'COMPLETION_SUBMITTED';
ALTER TYPE "AssignmentStatus" ADD VALUE 'CANCELLED';

-- AlterEnum
ALTER TYPE "QuotationStatus" ADD VALUE 'REJECTED';

-- AlterEnum
BEGIN;
CREATE TYPE "WorkStatus_new" AS ENUM ('PENDING', 'REQUESTED', 'ACCEPTED', 'CITIZEN_DECLINED', 'ADVANCE_PAID', 'ASSIGNED', 'COMPLETED');
ALTER TABLE "public"."work_requests" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "work_requests" ALTER COLUMN "status" TYPE "WorkStatus_new" USING ("status"::text::"WorkStatus_new");
ALTER TYPE "WorkStatus" RENAME TO "WorkStatus_old";
ALTER TYPE "WorkStatus_new" RENAME TO "WorkStatus";
DROP TYPE "public"."WorkStatus_old";
ALTER TABLE "work_requests" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Quotation" DROP CONSTRAINT "Quotation_requestId_fkey";

-- DropForeignKey
ALTER TABLE "Quotation" DROP CONSTRAINT "Quotation_staffId_fkey";

-- AlterTable
ALTER TABLE "work_requests" ADD COLUMN     "selectedQuotationId" TEXT;

-- DropTable
DROP TABLE "Quotation";

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

-- CreateIndex
CREATE INDEX "quotations_requestId_idx" ON "quotations"("requestId");

-- CreateIndex
CREATE INDEX "quotations_staffId_idx" ON "quotations"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "work_requests_selectedQuotationId_key" ON "work_requests"("selectedQuotationId");

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_selectedQuotationId_fkey" FOREIGN KEY ("selectedQuotationId") REFERENCES "quotations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
