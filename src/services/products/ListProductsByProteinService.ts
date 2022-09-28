import prismaClient from "../../prisma";

interface ProductRequest {
  protein: string;
}

class ListProductsByProteinService {
  async execute({ protein }: ProductRequest) {
    const products = await prismaClient.product.findMany({
      where: {
        protein: protein,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}

export { ListProductsByProteinService };
