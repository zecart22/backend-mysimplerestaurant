import { Request, Response } from "express";
import { ListByCategoriesService } from "../../services/products/ListByCategoriesService";

class ListByCategoriesController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listByCategoriesService = new ListByCategoriesService();

    if (!category_id) {
      throw new Error("Invalid category Id");
    }

    const products = await listByCategoriesService.execute({
      category_id,
    });

    return res.json(products);
  }
}

export { ListByCategoriesController };
