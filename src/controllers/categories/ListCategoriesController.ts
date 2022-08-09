import { Response, Request } from "express";
import { ListCategorieService } from "../../services/categories/ListCategoriesService";

class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const listCategoriesService = new ListCategorieService();
    const category = await listCategoriesService.execute();

    return res.json(category);
  }
}

export { ListCategoriesController };
