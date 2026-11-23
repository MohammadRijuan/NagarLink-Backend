CREATE TYPE "SslCommerzStatus" AS ENUM (
    'INITIATING',
    'INITIATED',
    'AMBIGUOUS',
    'FAILED',
    'CANCELLED',
    'VALIDATED'
);

ALTER TABLE "payments"
ALTER COLUMN "paymentGateway" SET DEFAULT 'SSLCOMMERZ';

CREATE TABLE "sslcommerz_payments" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "tranId" TEXT NOT NULL,
    "sessionKey" TEXT,
    "valId" TEXT,
    "bankTranId" TEXT,
    "cardType" TEXT,
    "storeAmount" DECIMAL(10,2),
    "currencyType" TEXT NOT NULL DEFAULT 'BDT',
    "status" "SslCommerzStatus" NOT NULL DEFAULT 'INITIATING',
    "initiationResponse" JSONB,
    "validationResponse" JSONB,
    "ipnResponse" JSONB,
    "validatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sslcommerz_payments_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "sslcommerz_payments_paymentId_key"
ON "sslcommerz_payments"("paymentId");

CREATE UNIQUE INDEX "sslcommerz_payments_tranId_key"
ON "sslcommerz_payments"("tranId");

CREATE INDEX "sslcommerz_payments_status_idx"
ON "sslcommerz_payments"("status");

CREATE INDEX "sslcommerz_payments_createdAt_idx"
ON "sslcommerz_payments"("createdAt");

ALTER TABLE "sslcommerz_payments"
ADD CONSTRAINT "sslcommerz_payments_paymentId_fkey"
FOREIGN KEY ("paymentId") REFERENCES "payments"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
