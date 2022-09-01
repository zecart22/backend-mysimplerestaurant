import { Request, Response } from "express";
import { EditCategorieService } from "../../services/categories/EditCategoryService";

class EditCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const { name } = req.body;
    const editCategorieService = new EditCategorieService();
    const category = await editCategorieService.execute({
      category_id,
      name,
    });
    return res.json(category);
  }
}

export { EditCategoryController };
