import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class ListProductByIdService {
  async execute({ product_id }: ProductRequest) {
    const products = await prismaClient.product.findUnique({
      where: {
        id: product_id,
      },
    });

    return products;
  }
}

export { ListProductByIdService };
