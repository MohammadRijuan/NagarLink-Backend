/*
  Warnings:

  - A unique constraint covering the columns `[requestId]` on the table `assignments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `assignments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestId` to the `assignments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assignments" ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "requestId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "assignments_requestId_key" ON "assignments"("requestId");

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "work_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
