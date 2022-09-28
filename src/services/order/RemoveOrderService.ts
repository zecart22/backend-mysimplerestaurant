import prismaClient from "../../prisma";

interface OrderRemoveRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRemoveRequest) {
    const isEmpetyOrder = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
    });

    if (isEmpetyOrder.length > 0) {
      throw new Error("This order is not empety");
    }

    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };
