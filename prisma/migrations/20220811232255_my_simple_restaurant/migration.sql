/*
  Warnings:

  - You are about to drop the column `orderId` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "orderId",
DROP COLUMN "productId";
