"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { Task } from "@prisma/client";
import DeleteDialog from "./DeleteDialog";
import { useState } from "react";
import { EditDialog } from "./EditDialog";
interface ITask {
  task: Task[];
}
export function TaskFormTable({ task }: ITask) {
  const [dialog, setDialog] = useState<{
    type: "delete" | "edit" | null;
    id: string | null;
    task: Task | null;
  }>({
    type: null,
    id: null,
    task: null,
  });

  const handleDelete = (id: number) =>
    setDialog({ type: "delete", id: id.toString(), task: null });
  const handleEdit = (id: number, task: Task) =>
    setDialog({ type: "edit", id: id.toString(), task });
  const onClose = () => setDialog({ type: null, id: null, task: null });
  return (
    <>
      <Table>
        <TableCaption>A list of your tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Task Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Created At</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {task?.map((task: Task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell className="text-right">{task.status}</TableCell>
              <TableCell className="text-right">
                {task?.createdAt?.toTimeString()}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size={"icon"}
                  onClick={() => handleEdit(task.id, task)}
                >
                  <Pen />
                </Button>
                <Button
                  variant="outline"
                  size={"icon"}
                  onClick={() => handleDelete(task.id)}
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Task Count</TableCell>
            <TableCell className="text-right">{task?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <DeleteDialog
        open={dialog.type === "delete"}
        onOpenChange={(o) => !o && onClose()}
        taskId={dialog?.id || ""}
      />
      <EditDialog
        open={dialog.type === "edit"}
        onOpenChange={(o) => !o && onClose()}
        taskId={dialog?.id || ""}
        task={
          dialog?.task || {
            id: 0,
            title: "",
            description: "",
            status: "todo",
            createdAt: new Date(),
          }
        }
      />
    </>
  );
}
