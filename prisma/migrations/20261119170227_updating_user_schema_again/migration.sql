/*
  Warnings:

  - The `needPasswordChange` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "emailVerified" SET DEFAULT false,
DROP COLUMN "needPasswordChange",
ADD COLUMN     "needPasswordChange" BOOLEAN NOT NULL DEFAULT false;
