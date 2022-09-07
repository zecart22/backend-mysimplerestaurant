import { ListProductByIdService } from "../../services/products/ListProductByIdService";
import { Request, Response } from "express";

class ListProductByIdController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;
    const listProductByIdService = new ListProductByIdService();
    const product = await listProductByIdService.execute({
      product_id,
    });
    return res.json(product);
  }
}

export { ListProductByIdController };
