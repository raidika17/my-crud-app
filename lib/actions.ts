"use server";
import { prisma } from "./prisma";

export const createData = async (
  name: string,
  email: string,
  phone: string
) => {
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

export const UpdateData = async (
  id: string,
  name: string,
  email: string,
  phone: string
) => {
  try {
    await prisma.users.update({
      where: { id },
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
