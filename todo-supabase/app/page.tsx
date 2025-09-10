import { getTasks } from "@/action";
import Skeleton from "@/components/Skeleton";
import { TaskFormTable } from "@/components/TaskFormTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
export default async function Home() {
  const tasks = (await getTasks()) || [];
  //TODO : اساتخدام server action
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-bold">Welcome to Todo App</h2>
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
          <Link href="/tasks/add">Add New Task</Link>
        </Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <TaskFormTable task={tasks} />
      </Suspense>
    </div>
  );
}
