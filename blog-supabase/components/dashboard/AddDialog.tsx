"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { memo, useState, useTransition } from "react";
interface AddDialogProps {
  title: string;
  formAction: (title: string) => void;
  children: React.ReactNode;
}
const AddDialog = ({ title, formAction, children }: AddDialogProps) => {
  // close modal after transition
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    if (open) setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form
          action={(formData) =>
            startTransition(async () => {
              try {
                setError(null);
                await formAction(formData.get("title") as string);
                setOpen(false);
              } catch (e) {
                setError((e as Error).message || "Something went wrong");
              }
            })
          }
        >
          <div className="grid gap-4">{children}</div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={pending}>
              {pending ? "Adding..." : title}
            </Button>
          </DialogFooter>
        </form>
        {error && (
          <p className="text-center text-sm text-red-500 mt-2">{error}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddDialog);
