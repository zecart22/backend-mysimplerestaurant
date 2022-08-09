import { Response, Request } from "express";
import { CreateCategorieService } from "../../services/categories/CreateCategorieService";

class CreateCategorieController {
  async handle(req: Request, res: Response) {
    const createCategorieService = new CreateCategorieService();
    const { id, name } = req.body;
    const category = await createCategorieService.execute({ name });

    return res.json(category);
  }
}

export { CreateCategorieController };
