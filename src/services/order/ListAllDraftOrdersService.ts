import prismaClient from "../../prisma";

class ListAllDraftOrdersService {
  async execute() {
    const orders = prismaClient.order.findMany({
      where: {
        draft: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListAllDraftOrdersService };
