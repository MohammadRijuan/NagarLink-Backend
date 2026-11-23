/*
  Warnings:

  - You are about to drop the column `bkashPaymentId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `bkashTrxId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `payerReference` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `currencyType` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `initiationResponse` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `ipnResponse` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `sessionKey` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `validatedAt` on the `sslcommerz_payments` table. All the data in the column will be lost.
  - You are about to drop the column `validationResponse` on the `sslcommerz_payments` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "payments_bkashPaymentId_key";

-- DropIndex
DROP INDEX IF EXISTS "sslcommerz_payments_createdAt_idx";

-- DropIndex
DROP INDEX IF EXISTS "sslcommerz_payments_status_idx";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "bkashPaymentId",
DROP COLUMN "bkashTrxId",
DROP COLUMN "payerReference",
ALTER COLUMN "paymentGateway" SET DEFAULT 'sslcommerz';

-- AlterTable
ALTER TABLE "sslcommerz_payments" DROP COLUMN "currencyType",
DROP COLUMN "initiationResponse",
DROP COLUMN "ipnResponse",
DROP COLUMN "sessionKey",
DROP COLUMN "status",
DROP COLUMN "validatedAt",
DROP COLUMN "validationResponse",
ADD COLUMN     "cardBrand" TEXT,
ADD COLUMN     "cardIssuer" TEXT,
ADD COLUMN     "cardIssuerCountry" TEXT,
ADD COLUMN     "gatewayResponse" JSONB;

-- DropEnum
DROP TYPE "SslCommerzStatus";

-- CreateIndex
CREATE INDEX "sslcommerz_payments_tranId_idx" ON "sslcommerz_payments"("tranId");
