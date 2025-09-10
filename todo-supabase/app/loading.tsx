import React from "react";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center space-x-2 items-center h-screen">
      <LoaderCircle className="h-10 w-10  animate-spin text-indigo-500" />
      <p className="text-xl font-bold ">Loading...</p>
    </div>
  );
};

export default Loading;
