import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  category_id: string;
  image: string;
  hungryLevel: string;
  protein: string;
  product_id: string;
}

class EditProductService {
  async execute({
    product_id,
    name,
    price,
    description,
    category_id,
    image,
    hungryLevel,
    protein,
  }: ProductRequest) {
    const nameUnavailable = await prismaClient.product.findFirst({
      where: {
        name: name,
      },
    });

    if (name === "") {
      throw new Error("Name invalid");
    }

    if (nameUnavailable) {
      throw new Error("The name of product is Unavailable");
    }

    const product = prismaClient.product.update({
      where: {
        id: product_id,
      },
      data: {
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        image: image,
        hungryLevel: hungryLevel,
        protein: protein,
      },
    });

    return product;
  }
}

export { EditProductService };
