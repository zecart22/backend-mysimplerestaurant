import { ListProductsSizeService } from "../../services/products/ListProductBySizeService";
import { Request, Response } from "express";

class ListProductsBySizeController {
  async handle(req: Request, res: Response) {
    const size = req.query.size as string;
    const listProductsSizeService = new ListProductsSizeService();
    const product = await listProductsSizeService.execute({
      size,
    });
    return res.json(product);
  }
}

export { ListProductsBySizeController };
