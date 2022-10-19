import { Request, Response } from "express";
import { TableTotalPriceService } from "../../services/order/TableTotalPriceService";

class TableTotalPriceController {
  async handle(req: Request, res: Response) {
    const tableNumber = req.query.table as string;
    const table = Number(tableNumber);

    const tableTotalPriceService = new TableTotalPriceService();

    const tables = await tableTotalPriceService.execute({
      table,
    });

    return res.json(tables);
  }
}

export { TableTotalPriceController };
