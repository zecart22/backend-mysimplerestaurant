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
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}

export { ListProductsSizeService };
