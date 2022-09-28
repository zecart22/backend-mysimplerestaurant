import { Request, Response } from "express";
import { OrderDetailsService } from "../../services/order/OrderDetailsService";
import { ListAllOrdersByTableNumberService } from "../../services/order/ListAllOrdersByTableNumberService";

class ListAllOrdersByTableNumberController {
  async handle(req: Request, res: Response) {
    /* const table = req.query.table as unknown as number; */
    const { table } = req.body;

    const listAllOrdersByTableNumberService =
      new ListAllOrdersByTableNumberService();

    const tableNumber = await listAllOrdersByTableNumberService.execute({
      table,
    });

    return res.json(tableNumber);
  }
}

export { ListAllOrdersByTableNumberController };
