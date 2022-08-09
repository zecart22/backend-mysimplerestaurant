import prismaClient from "../../prisma";

interface CreateCategorie {
  name: string;
}

class CreateCategorieService {
  async execute({ name }: CreateCategorie) {
    if (name === "") {
      throw new Error("Name invalid");
    }

    const category = await prismaClient.category.create({
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

export { CreateCategorieService };
