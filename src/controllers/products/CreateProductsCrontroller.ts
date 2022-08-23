import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const {
      category_id,
      description,
      hungryLevel,
      name,
      price,
      protein,
      image,
    } = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { originalname, filename: image } = req.file;

      const product = await createProductService.execute({
        category_id,
        description,
        hungryLevel,
        image,
        name,
        price,
        protein,
      });

      return res.json(product);
    }
  }
}

export { CreateProductsController };
