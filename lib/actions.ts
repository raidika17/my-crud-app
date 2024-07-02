"use server";
import { prisma } from "./prisma";

export const addData = async (name: string, email: string, phone: string) => {
  try {
    await prisma.users.create({
      data: {
        name: name,
        email: email,
        phone: phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create user" };
  }
};
