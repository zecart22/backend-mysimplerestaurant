import prismaClient from "../../prisma";

interface ListCategorie {}

class ListCategorieService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategorieService };
