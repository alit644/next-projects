import { Status } from "@prisma/client";
import z from "zod";

export const addTaskSchema = z.object({
 title : z.string({error:"Title is required"}).min(3, "Title must be at least 3 characters long").max(100, "Title must be at most 100 characters long"),
 description : z.string({error:"Description is required"}).min(3, "Description must be at least 3 characters long").max(255, "Description must be at most 255 characters long"),
 status : z.enum(Status),
});

export type AddTaskSchemaType = z.infer<typeof addTaskSchema>;