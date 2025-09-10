/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema } from "@/schema";
import { AddTaskSchemaType } from "@/schema";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Form, FormMessage } from "./ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { addTask } from "@/action";

const TaskAddForm = () => {
  const router = useRouter();
  const form = useForm<AddTaskSchemaType>({
    resolver: zodResolver(addTaskSchema),
  });
  const onSubmit: SubmitHandler<AddTaskSchemaType> = async (
    data: AddTaskSchemaType
  ) => {
    try {
      await addTask(data);

      toast.success("Task added successfully", {
        duration: 3000,
      });
      form.reset();
      router.push("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Task added failed", {
        duration: 5000,
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label>Task Title</Label>
          <Input
            placeholder="Enter Task Title"
            type="text"
            {...form.register("title")}
            className="h-12"
          />
          <FormMessage>{form.formState.errors.title?.message}</FormMessage>
        </div>
        <div className="space-y-2">
          <Label>Task Description</Label>
          <Textarea
            {...form.register("description")}
            placeholder="Enter Task Description"
            className="h-12"
          />
          <FormMessage>
            {form.formState.errors.description?.message}
          </FormMessage>
        </div>
        <div className="space-y-2 ">
          <Label>Task Status</Label>
          <Select
            name="status"
            value={form.watch("status")}
            onValueChange={(value: "todo" | "inprogress" | "done") =>
              form.setValue("status", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Task Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" {...form.register("status")} />
          <FormMessage>{form.formState.errors.status?.message}</FormMessage>
        </div>
        <Button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white"
          size={"lg"}
          disabled={form.formState.isLoading}
        >
          {form.formState.isLoading ? "Adding..." : "Add Task"}
        </Button>
      </form>
    </Form>
  );
};

export default TaskAddForm;
