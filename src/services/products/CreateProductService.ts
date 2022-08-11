import prismaClient from "../../prisma";

interface CreateProducts {
  name: string;
  price: string;
  description: string;
  category_id: string;
  image: string;
  hungryLevel: string;
  protein: string;
}

class CreateProductService {
  async execute({
    protein,
    price,
    name,
    image,
    hungryLevel,
    description,
    category_id,
  }: CreateProducts) {
    const product = await prismaClient.product.create({
      data: {
        description: description,
        hungryLevel: hungryLevel,
        image: image,
        name: name,
        price: price,
        protein: protein,
        category_id: category_id,
      },
    });
    return product;
  }
}

export { CreateProductService };
