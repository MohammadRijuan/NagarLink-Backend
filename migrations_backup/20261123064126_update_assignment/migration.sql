/*
  Warnings:

  - Added the required column `advanceAmount` to the `assignments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assignments" ADD COLUMN     "advanceAmount" DECIMAL(10,2) NOT NULL;
