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
    });

    const itens = await prismaClient.item.findMany({
      include: {
        product: true,
      },
    });

    const arrayOrders = [];

    let index = 0;

    let order = "";

    const ordersId = ordersInTable.map((order) => order.id);

    while (index < ordersInTable.length) {
      index++;
      let id = ordersId[index];
      const itemData = await prismaClient.item.findMany({
        where: {
          order_id: id,
        },
        include: {
          product: true,
        },
      });
      arrayOrders.push(itemData);
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
