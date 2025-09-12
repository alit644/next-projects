"use server";

import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const addTag = async (title: string) => {
  if (!title || !title.trim()) {
    throw new Error("Tag title is required");
  }
  try {
    await prisma.tag.create({
      data: {
        name: title,
      },
    });
    revalidatePath("/dashboard/tags");
  } catch (error) {
    console.error(error);
    throw new Error("Could not create tag");
  }
};

export const addCategory = async (title: string) => {
  if (!title || !title.trim()) {
    throw new Error("Category title is required");
  }
  try {
    await prisma.category.create({
      data: {
        name: title,
      },
    });
    revalidatePath("/dashboard/categories");
  } catch (error) {
    console.error(error);
    throw new Error("Could not create category");
  }
};

// get Tags and Categories
export const getTagsAndCategories = async () => {
  const [tags, categories] = await Promise.all([
    prisma.tag.findMany(),
    prisma.category.findMany(),
  ]);
  return { tags, categories };
};

// get only tags
export const getTags = async () => {
  const tags = await prisma.tag.findMany({
   orderBy: {
    createdAt: "desc"
   }
  });
  return tags;
};
// get only categories
export const getCategories = async () => {
 const categories = await prisma.category.findMany({
  orderBy: {
   createdAt: "desc"
  }
 });
 return categories;
};
