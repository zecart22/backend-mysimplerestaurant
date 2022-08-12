import prismaClient from "../../prisma";

interface OrderDetailsRequest {
  order_id: string;
}

class OrderDetailsService {
  async execute({ order_id }: OrderDetailsRequest) {
    const order = prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return order;
  }
}

export { OrderDetailsService };
