import prismaClient from "../../prisma";

interface TableProps {
  table: number;
}

class ListAllOrdersByTableNumberService {
  async execute({ table }: TableProps) {
    const orders = prismaClient.order.findMany({
      where: {
        table: table,
        draft: false,
        status: false,
      },
      select: {
        id: true,
        table: true,
        status: true,
        draft: true,
        name: true,
        items: true,
        isDelivery: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!orders) {
      throw new Error("There is no order in this table");
    }

    return orders;
  }
}

export { ListAllOrdersByTableNumberService };
