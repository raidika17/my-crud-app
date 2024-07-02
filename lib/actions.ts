"use server";
import { prisma } from "./prisma";

export const createUser = async (
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

export const UpdateUser = async (
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
    return { message: "Failed to update user" };
  }
};

export const deleteUser = async (id: string) => {
  try {
    await prisma.users.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete user" };
  }
};
