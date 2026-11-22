/*
  Warnings:

  - A unique constraint covering the columns `[requestId,staffId]` on the table `quotations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "quotations_requestId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "quotations_requestId_staffId_key" ON "quotations"("requestId", "staffId");
