import { Request, Response } from "express";
import { CreateProductURLService } from "../../services/products/CreateProductsURLService";

class CreateProductsURLController {
  async handle(req: Request, res: Response) {
    const {
      category_id,
      description,
      hungryLevel,
      name,
      prices,
      protein,
      image,
    } = req.body;

    const price = prices.toString();

    const createProductService = new CreateProductURLService();

    if (!image) {
      throw new Error("error to send image url");
    }

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

export { CreateProductsURLController };
