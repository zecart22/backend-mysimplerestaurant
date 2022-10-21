import prismaClient from "../../prisma";

interface OrderDetailsRequest {
  order_id: string;
}

class OrderTotalPriceService {
  async execute({ order_id }: OrderDetailsRequest) {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
        
      },
      include: {
        product: true,
      },
    });

    const subtotal = order.map(
      (item) => item.amount * Number(item.product.price)
    );

    const total = subtotal.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);

    console.log(subtotal);

    return total;
  }
}

export { OrderTotalPriceService };
