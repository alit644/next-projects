
import TaskAddForm from "@/components/TaskAddForm";

const Page = () => {
  

  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-bold">Add New Task</h2>
      </div>
      <div className="w-full sm:w-[80%] md:w-1/2 border border-input p-4 rounded-md">
      <TaskAddForm/>
      </div>
    </div>
  );
};

export default Page;
