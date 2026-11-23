/*
  Warnings:

  - The values [UNPAID,CANCELLED,PARTIALLY_REFUNDED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `division` to the `staff_location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `division` to the `work_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');
ALTER TABLE "public"."payments" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "payments" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "public"."PaymentStatus_old";
ALTER TABLE "payments" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "staff_location" ADD COLUMN     "division" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "work_requests" ADD COLUMN     "division" TEXT NOT NULL;
