import prismaClient from "../../prisma";

class ListAllProductsService {
  async execute() {
    const products = await prismaClient.product.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}

export { ListAllProductsService };
