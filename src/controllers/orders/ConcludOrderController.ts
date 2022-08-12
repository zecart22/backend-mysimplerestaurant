import { Request, Response } from "express";
import { ConcludOrderService } from "../../services/order/ConcludOrderService";

class ConcludOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const concludOrderService = new ConcludOrderService();

    const order = await concludOrderService.execute({
      order_id,
    });

    return res.json(order);
  }
}

export { ConcludOrderController };
