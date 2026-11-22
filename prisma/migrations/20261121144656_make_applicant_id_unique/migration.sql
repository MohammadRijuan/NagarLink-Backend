/*
  Warnings:

  - A unique constraint covering the columns `[applicantId]` on the table `staff_applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "staff_applications_applicantId_key" ON "staff_applications"("applicantId");
