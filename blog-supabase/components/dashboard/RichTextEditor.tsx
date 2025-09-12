"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../ui/button";

const modules = {
 toolbar: [
   [{ header: [1, 2, false] }],
   ["bold", "italic", "underline", "strike", "blockquote"],
   [{ list: "ordered" }, { list: "bullet" }], 
   ["link", "image", "code-block"],
 ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "align",
  "color",
  "background",
  "link",
  "image",
];
export default function RichTextEditor({
 value, onChange 
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [showContent, setShowContent] = useState<boolean>(false);
  const onShowContent = useCallback(() => {
    setShowContent((prev) => !prev);
  }, []);


  return (
    <div className="p-4 bg-background rounded-xl shadow w-full">
      <ReactQuill
        theme="bubble"
        formats={formats}
        modules={modules}
        value={value}
        onChange={onChange}
        className="min-h-[150px] w-full"
      />
      <div className="mt-4 p-2 bg-card rounded">
        <Button
          variant="outline"
          className="font-semibold"
          type="button"
          onClick={onShowContent}
        >
          Show Preview:
        </Button>
        {showContent && (
          <div className="mt-4 p-2 bg-[#263746] rounded">
            <h3 className="font-semibold">📌 Preview:</h3>
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </div>
        )}
      </div>
    </div>
  );
}
