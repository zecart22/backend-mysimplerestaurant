import { Request, Response } from "express";
import { EditProductService } from "../../services/products/EditProductService";

class EditProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;
    const {
      name,
      price,
      description,
      category_id,
      image,
      hungryLevel,
      protein,
    } = req.body;
    const editProductController = new EditProductService();
    const product = await editProductController.execute({
      product_id,
      name,
      price,
      description,
      category_id,
      image,
      hungryLevel,
      protein,
    });

    return res.json(product);
  }
}

export { EditProductController };
