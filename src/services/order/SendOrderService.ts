import prismaClient from "../../prisma";

interface SendOrderRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: SendOrderRequest) {
    const isEmpetyOrder = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
    });

    if (isEmpetyOrder.length === 0) {
      throw new Error("This order is empety");
    }

    const order = prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return order;
  }
}

export { SendOrderService };
