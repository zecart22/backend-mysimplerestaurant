import prismaClient from "../../prisma";

interface ConcludOrderRequest {
  order_id: string;
}

class ConcludOrderService {
  async execute({ order_id }: ConcludOrderRequest) {
    const order = prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}

export { ConcludOrderService };
