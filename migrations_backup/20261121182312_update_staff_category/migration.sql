/*
  Warnings:

  - A unique constraint covering the columns `[staffId,categoryId]` on the table `staff_category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "staff_category_categoryId_key";

-- DropIndex
DROP INDEX "staff_category_staffId_key";

-- CreateIndex
CREATE UNIQUE INDEX "staff_category_staffId_categoryId_key" ON "staff_category"("staffId", "categoryId");
