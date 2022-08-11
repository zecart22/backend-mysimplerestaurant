import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListByCategoriesService {
  async execute({ category_id }: ProductRequest) {
    const findByCategoryId = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategoryId;
  }
}

export { ListByCategoriesService };
