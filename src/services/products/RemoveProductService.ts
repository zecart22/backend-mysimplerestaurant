import prismaClient from "../../prisma";

interface ProductRemoveRequest {
  product_id: string;
}

class RemoveProductService {
  async execute({ product_id }: ProductRemoveRequest) {
    const product = await prismaClient.product.delete({
      where: {
        id: product_id,
      },
    });

    return product;
  }
}

export { RemoveProductService };
