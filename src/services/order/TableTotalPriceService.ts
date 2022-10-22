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

    const itensId = [];

    const takeItensId = ordersInTable.map((order) =>
      order.items.map((item) => itensId.push(item.id))
    );

    let index = 0;
    let size = itensId.length;

    while (index < size) {
      let id = itensId[index];

      const itemData = await prismaClient.item.findMany({
        where: {
          id: id,
        },
        include: {
          product: true,
        },
      });
      arrayOrders.push(itemData[0]);
      index++;
    }

    const arrayItens = arrayOrders.map((item) => item);

    const subtotal = arrayItens.map(
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
