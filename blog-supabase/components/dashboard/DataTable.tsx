import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITagAndCategory } from "@/utils/interfaces";
import { Button } from "@/components/ui/button";
import { Pen, Trash } from "lucide-react";

interface ITable {
  children: React.ReactNode;
  data: ITagAndCategory[];
}
export function DataTable({ children, data }: ITable) {


  return (
    <Table>
      <TableHeader>{children}</TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-[10px]">{item.id}</TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.createdAt?.toDateString()}</TableCell>
            <TableCell className="text-right ">
              <Button variant="outline" size="icon" className="mr-2">
                <Pen className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{data?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
