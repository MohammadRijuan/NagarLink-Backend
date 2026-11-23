-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "staff_category" DROP CONSTRAINT "staff_category_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_category" ADD CONSTRAINT "staff_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
