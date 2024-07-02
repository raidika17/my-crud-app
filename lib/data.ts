import { prisma } from "./prisma";

export const getUsers = async (query: string) => {
  try {
    const users = await prisma.users.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
