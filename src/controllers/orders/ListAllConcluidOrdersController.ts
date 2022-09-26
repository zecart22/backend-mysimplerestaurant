import { Request, Response } from "express";
import { ListAllConcluidOrdersService } from "../../services/order/ListAllConcluidOrdesService";

class ListAllConcluidOrdersController {
  async handle(req: Request, res: Response) {
    const listAllConcluidOrdersService = new ListAllConcluidOrdersService();
    const orders = await listAllConcluidOrdersService.execute();

    return res.json(orders);
  }
}

export { ListAllConcluidOrdersController };
