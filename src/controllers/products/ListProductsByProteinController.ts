import { ListProductsByProteinService } from "../../services/products/ListProductsByProteinService";
import { Request, Response } from "express";

class ListProductsByProteinController {
  async handle(req: Request, res: Response) {
    const protein = req.query.protein as string;
    const listProductsByProteinService = new ListProductsByProteinService();
    const product = await listProductsByProteinService.execute({
      protein,
    });
    return res.json(product);
  }
}

export { ListProductsByProteinController };
