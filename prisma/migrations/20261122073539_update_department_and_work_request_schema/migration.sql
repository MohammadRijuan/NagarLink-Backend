/*
  Warnings:

  - Added the required column `departmentId` to the `work_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "work_requests" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
