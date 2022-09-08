/*
  Warnings:

  - You are about to drop the column `createdAt` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `questions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "createdAt";
