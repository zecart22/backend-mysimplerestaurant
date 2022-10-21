import prismaClient from "../../prisma";

interface AddItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: AddItemRequest) {
    const isOrderNoDraft = prismaClient.order.findMany({
      where: {
        id: order_id,
        draft: false,
      },
    });

    if (isOrderNoDraft) {
      throw new Error("This order is not draft anymore");
    }

    const order = prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount,
      },
    });
    return order;
  }
}

export { AddItemService };
