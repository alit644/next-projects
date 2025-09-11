import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TagsPost from "../TagsPost";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const PostCard = () => {
  return (
    <div>
      <Card className=" md:pr-10 mb-4 relative">
        <CardHeader>
          {/* before title add Blue Line */}
          <CardTitle className="text-xl sm:text-2xl ">
            Mastering XHR in JavaScript{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* tags */}
          <TagsPost />
          {/* main content */}
          <p className="text-sm text-right text-gray-300 dir-rtl">
            دليل شامل لـ XMLHttpRequest في JavaScript - من التاريخ والتطور إلى
            الاستخدامات المتقدمة. تعلم كيفية إرسال طلبات HTTP، تتبع التقدم، رفع
            الملفات، إدارة الأخطاء، ومقارنة مع Fetch API.
          </p>
        </CardContent>
        <div className="hidden md:block absolute top-0 bottom-0 py-4  right-2  h-full">
          <Button className="bg-[#263746] h-full">
            <ChevronRight className="w-6 h-6 text-[var(--primaryMy)]" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
