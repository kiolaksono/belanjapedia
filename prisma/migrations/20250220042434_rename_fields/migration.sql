/*
  Warnings:

  - You are about to drop the column `nunmReviews` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "nunmReviews",
ADD COLUMN     "numReviews" INTEGER NOT NULL DEFAULT 0;
