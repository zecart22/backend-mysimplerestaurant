import prismaClient from "../../prisma";

interface SendOrderRequest {
  table: number;
}

class CloseAllOrdersInTable {
  async execute({ table }: SendOrderRequest) {
    const isEmpetyTable = await prismaClient.order.findMany({
      where: {
        table: table,
        draft: false,
        status: false,
      },
    });

    if (isEmpetyTable.length === 0) {
      throw new Error("There is no order in this table");
    }

    const closedTable = prismaClient.order.updateMany({
      where: {
        table: table,
        draft: false,
        status: false,
      },
      data: {
        status: true,
      },
    });

    return closedTable;
  }
}

export { CloseAllOrdersInTable };
