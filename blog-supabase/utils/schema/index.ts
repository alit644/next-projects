import { z } from "zod";

export const addArticleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(200, "Title must be at most 200 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  categories: z.array(z.string()).min(1, "At least one category is required"),
});
export type AddArticleSchema = z.infer<typeof addArticleSchema>;