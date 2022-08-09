/*
  Warnings:

  - You are about to drop the column `banner` on the `products` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `items` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `hungryLevel` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" ADD COLUMN     "orderId" INTEGER NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "isDelivery" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "banner",
ADD COLUMN     "hungryLevel" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "protein" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "adress" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
