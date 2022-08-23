import { ListAllProductsService } from "../../services/products/ListAllProductsService";
import { Request, Response } from "express";

class ListAllProductsController {
  async handle(req: Request, res: Response) {
    const listAllService = new ListAllProductsService();
    const product = await listAllService.execute();
    return res.json(product);
  }
}

export { ListAllProductsController };
