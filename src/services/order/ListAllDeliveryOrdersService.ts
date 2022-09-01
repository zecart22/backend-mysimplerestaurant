import prismaClient from "../../prisma";

class ListAllDeliveryOrdersService {
  async execute() {
    const orders = prismaClient.order.findMany({
      where: {
        isDelivery: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListAllDeliveryOrdersService };
