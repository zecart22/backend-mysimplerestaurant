import { Request, Response } from "express";
import { CloseAllOrdersInTable } from "../../services/order/CloseAllOrdersInTable";

class CloseAllOrdersInTableController {
  async handle(req: Request, res: Response) {
    const tableNumber = req.query.table as string;
    const table = Number(tableNumber);

    const closeAllOrdersInTable = new CloseAllOrdersInTable();

    const tables = await closeAllOrdersInTable.execute({
      table,
    });

    return res.json(tables);
  }
}

export { CloseAllOrdersInTableController };
