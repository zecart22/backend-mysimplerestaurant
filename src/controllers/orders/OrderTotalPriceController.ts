import { Request, Response } from "express";
import { OrderTotalPriceService } from "../../services/order/OrderTotalPriceService";

class OrderTotalPriceController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const orderTotalPriceService = new OrderTotalPriceService();

    const orders = await orderTotalPriceService.execute({
      order_id,
    });

    return res.json(orders);
  }
}

export { OrderTotalPriceController };
