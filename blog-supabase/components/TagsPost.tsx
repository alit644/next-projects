import { BookDashed, Calendar, Hash } from "lucide-react";

const TagsPost = () => {
  return (
    <div className="flex items-center gap-4 w-full mb-4">
      {/* icon box */}
      <div className="flex items-center gap-2">
        <div className="size-9 flex items-center justify-center rounded-md bg-[#263746]">
          <Calendar className="text-[var(--primaryMy)] w-4 h-4" />
        </div>
        <span className="text-xs sm:text-sm text-gray-400">2025-07-27</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-9 flex items-center justify-center rounded-md bg-[#263746]">
          <BookDashed className="text-[var(--primaryMy)] w-4 h-4" />
        </div>
        <span className="text-xs sm:text-sm text-gray-400">Web Development</span>
      </div>
      <div className=" hidden md:flex items-center gap-2">
        <div className="size-9 flex items-center justify-center rounded-md bg-[#263746]">
          <Hash className="text-[var(--primaryMy)] w-4 h-4" />
        </div>
        <span className="text-sm text-gray-400">
          JavaScript / AJAX / Web Development / HTTP / API
        </span>
      </div>
    </div>
  );
};

export default TagsPost;
