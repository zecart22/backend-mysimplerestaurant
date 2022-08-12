import prismaClient from "../../prisma";

class ListLastOrdersService {
  async execute() {
    const orders = prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListLastOrdersService };
