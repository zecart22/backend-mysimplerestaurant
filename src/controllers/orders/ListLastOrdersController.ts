import { Request, Response } from "express";
import { ListLastOrdersService } from "../../services/order/ListLastOrdersService";

class ListLastOrdersController {
  async handle(req: Request, res: Response) {
    const listLastOrderService = new ListLastOrdersService();
    const orders = await listLastOrderService.execute();

    return res.json(orders);
  }
}

export { ListLastOrdersController };
