import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
  name: string;
}

class EditCategorieService {
  async execute({ category_id, name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Name invalid");
    }

    const category = await prismaClient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
      select: {
        name: true,
        id: true,
      },
    });

    return category;
  }
}

export { EditCategorieService };
