"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Task } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateTask } from "@/action";
import { toast } from "sonner";
import { addTaskSchema, AddTaskSchemaType } from "@/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { useEffect } from "react";

export function EditDialog({
  open,
  onOpenChange,
  taskId,
  task,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId: string;
  task: Task;
}) {
  const form = useForm<AddTaskSchemaType>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      title: task?.title,
      description: task?.description,
      status: task?.status,
    },
  });
  // set default values
  useEffect(() => {
    form.reset({
      title: task?.title,
      description: task?.description,
      status: task?.status,
    });
  }, [task, form]);

  const onSubmit: SubmitHandler<AddTaskSchemaType> = async (
    data: AddTaskSchemaType
  ) => {
    try {
      await updateTask(taskId, data);

      toast.success("Task added successfully", {
        duration: 3000,
      });
      form.reset();
      onOpenChange(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Task added failed", {
        duration: 5000,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your Task here. Click save when you&apos;re done.{" "}
            {taskId}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Task Title</Label>
                <Input id="name-1" {...form.register("title")} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Task Description</Label>
                <Input id="username-1" {...form.register("description")} />
              </div>
              <div>
                <Select
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
              </div>
            </div>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
