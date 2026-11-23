/*
  Warnings:

  - Added the required column `address` to the `work_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "work_requests" ADD COLUMN     "address" TEXT NOT NULL;
