import React from "react";
import { CardContent } from "../ui/card";
import Link from "next/link";
const ArchiveCard = () => {
  return (
    <CardContent>
      <div className="flex items-center flex-row h-[3.75rem] w-full">
        <div className="transition font-bold md:w-[10%] text-2xl text-75 text-right w-[15%]">
          2025
        </div>
        <div className="w-[15%] md:w-[10%]">
          <div className="mx-auto z-50 -outline-offset-[2px] bg-none h-3 outline-3 outline-[var(--primaryMy)] rounded-full w-3"></div>
        </div>
        <div className="transition text-50 md:w-[80%] text-left w-[70%]">
          9 posts
        </div>
      </div>

      {/* dash line */}
      {Array.from({ length: 9 }).map((_, index) => (
        <Link
          key={index}
          href="#"
          className="rounded-lg  w-full block group h-10 mb-4 hover:text-blue-500 hover:bg-[#263746]"
        >
          <div className="flex items-center h-full flex-row justify-start">
            <div className="transition text-sm text-gray-400 md:w-[10%] text-right w-[15%]">
              07-27
            </div>

            <div className="flex items-center h-full md:w-[10%] relative w-[15%]">
              <div
                className="transition-all mx-auto z-50 bg-blue-400 
                  group-hover:bg-blue-500 group-hover:h-5 
                  h-1 outline-4 outline-gray-800 
                  rounded w-1"
              ></div>
            </div>

            <div
              className="transition-all font-bold group-hover:text-blue-500 group-hover:translate-x-1 
                md:max-w-[65%] md:w-[65%] overflow-ellipsis overflow-hidden pr-8 
                text-gray-300 text-left w-[70%] whitespace-nowrap"
            >
              Mastering XHR in JavaScript
            </div>

            <div
              className="transition text-sm hidden md:block md:w-[15%] overflow-ellipsis 
                overflow-hidden text-gray-500 text-left whitespace-nowrap"
            >
              #JavaScript #AJAX #Web Development #HTTP #API
            </div>
          </div>
        </Link>
      ))}
    </CardContent>
  );
};

export default ArchiveCard;
