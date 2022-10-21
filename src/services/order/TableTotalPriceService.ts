import prismaClient from "../../prisma";

interface TableRequest {
  table: number;
}

class TableTotalPriceService {
  async execute({ table }: TableRequest) {
    const ordersInTable = await prismaClient.order.findMany({
      where: {
        table: table,
        draft: false,
        status: false,
      },
      include: {
        items: true,
      },
    });

    const arrayOrders = [];

    let index = 0;

    const ordersId = ordersInTable.map((order) => order.items[0].id);

    while (index < ordersId.length) {
      let id = ordersId[index];

      const itemData = await prismaClient.item.findMany({
        where: {
          id: id,
        },
        include: {
          product: true,
        },
      });
      arrayOrders.push(itemData);
      index++;
    }

    const subtotal = arrayOrders[0].map(
      (item: { amount: number; product: { price: any } }) =>
        item.amount * Number(item.product.price)
    );

    const total = subtotal.reduce(function (acc: number, cur: number) {
      return acc + cur;
    }, 0);

    return total;
  }
}

export { TableTotalPriceService };
