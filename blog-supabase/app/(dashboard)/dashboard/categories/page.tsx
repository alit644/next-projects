import AddDialog from "@/components/dashboard/AddDialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { addCategory, getCategories } from "@/actions";
import { DataTable } from "@/components/dashboard/DataTable";
import { TableHead, TableRow } from "@/components/ui/table";
import { ITagAndCategory } from "@/utils/interfaces";

const Page = async () => {
  const categories = await getCategories()
 
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <AddDialog title="Add Category" formAction={addCategory}>
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Category Title"
              required
              minLength={3}
              maxLength={20}
            />
          </div>
        </AddDialog>
      </div>
      <DataTable data={categories as ITagAndCategory[]}>
        <TableRow>
          <TableHead className="w-[10px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </DataTable>
    </div>
  );
};

export default Page;
