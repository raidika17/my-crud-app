import { prisma } from "./prisma";

export const getUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
