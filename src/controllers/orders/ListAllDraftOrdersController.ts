import { Request, Response } from "express";
import { ListAllDraftOrdersService } from "../../services/order/ListAllDraftOrdersService";

class ListAllDraftOrdersController {
  async handle(req: Request, res: Response) {
    const listAllDraftOrderService = new ListAllDraftOrdersService();
    const orders = await listAllDraftOrderService.execute();

    return res.json(orders);
  }
}

export { ListAllDraftOrdersController };
