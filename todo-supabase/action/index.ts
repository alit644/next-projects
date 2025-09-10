"use server";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { TaskBody } from "@/interfaces";

export const addTask = async (data: TaskBody) => {
  try {
    const tasks = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
      },
    });
    revalidatePath("/");
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (id: string, data: TaskBody) => {
  try {
    const task = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
      },
    });
    revalidatePath("/");
    return task;
  } catch (error) {
    console.log(error);
  }
};
