import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
  isDelivery: boolean;
}

class CreateOrderService {
  async execute({ table, name, isDelivery }: OrderRequest) {
    if (isDelivery) {
      const order = prismaClient.order.create({
        data: {
          table: table,
          name: name,
          isDelivery: isDelivery,
          draft: false,
        },
      });
      return order;
    } else {
      const order = prismaClient.order.create({
        data: {
          table: table,
          name: name,
          isDelivery: isDelivery,
        },
      });
      return order;
    }
  }
}

export { CreateOrderService };
