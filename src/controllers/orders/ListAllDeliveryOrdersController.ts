import { Request, Response } from "express";
import { ListAllDeliveryOrdersService } from "../../services/order/ListAllDeliveryOrdersService";

class ListAllDeliveryOrdersController {
  async handle(req: Request, res: Response) {
    const listAllDeliveryOrdersService = new ListAllDeliveryOrdersService();
    const orders = await listAllDeliveryOrdersService.execute();
    return res.json(orders);
  }
}

export { ListAllDeliveryOrdersController };
