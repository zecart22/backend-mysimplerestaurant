import prismaClient from "../../prisma";

interface CategoryRemoveRequest {
  category_id: string;
}

class RemoveCategoryService {
  async execute({ category_id }: CategoryRemoveRequest) {
    const isEmpetyCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    if (isEmpetyCategory.length > 0) {
      throw new Error("This category is not empety");
    }

    const category = await prismaClient.category.delete({
      where: {
        id: category_id,
      },
    });

    return category;
  }
}

export { RemoveCategoryService };
