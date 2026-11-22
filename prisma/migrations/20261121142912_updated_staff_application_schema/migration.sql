/*
  Warnings:

  - Added the required column `experienceDetails` to the `staff_applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "staff_applications" ADD COLUMN     "experienceDetails" TEXT NOT NULL;
