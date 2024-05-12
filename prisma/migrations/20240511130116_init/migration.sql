/*
  Warnings:

  - Added the required column `contact` to the `Librarian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Librarian" ADD COLUMN     "contact" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contact" TEXT NOT NULL;
