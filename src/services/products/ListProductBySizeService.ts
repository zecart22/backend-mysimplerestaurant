import prismaClient from "../../prisma";

interface ProductRequest {
  size: string;
}

class ListProductsSizeService {
  async execute({ size }: ProductRequest) {
    const products = await prismaClient.product.findMany({
      where: {
        hungryLevel: size,
      },
    });

    return products;
  }
}

export { ListProductsSizeService };
