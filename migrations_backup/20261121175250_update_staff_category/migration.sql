/*
  Warnings:

  - A unique constraint covering the columns `[staffId]` on the table `staff_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId]` on the table `staff_category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "staff_category_staffId_key" ON "staff_category"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "staff_category_categoryId_key" ON "staff_category"("categoryId");
