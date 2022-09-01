import prismaClient from "../../prisma";

class ListAllOrdersService {
  async execute() {
    const orders = prismaClient.order.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListAllOrdersService };
