import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}
class DetailUserService {
  async execute({ user_id }: UserRequest) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: user_id,
      },
      select: {
        name: true,
        adress: true,
        type: true,
        email: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
