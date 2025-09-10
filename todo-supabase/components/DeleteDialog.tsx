/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteTask } from "@/action";
import { toast } from "sonner";
const DeleteDialog = ({
  open,
  onOpenChange,
  taskId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId: string;
}) => {
  const deleteTaskHandler = async () => {
    try {
      await deleteTask(taskId);
      toast.success("Task deleted successfully", {
        duration: 3000,
      });
      onOpenChange(false);
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.message || error?.response?.data?.error || "Task deleted failed",
        {
          duration: 5000,
        }
      );
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this task
            and remove your data from our servers. = {taskId}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteTaskHandler}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
