import prismaClient from "../../prisma";

interface OrderRemoveRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRemoveRequest) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };
