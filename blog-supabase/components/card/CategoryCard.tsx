import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const CategoryCard = () => {
  return (
    <Card className="w-full h-fit md:w-[300px]">
      <CardHeader>
        <CardTitle className="text-md sm:text-xl ">Categories </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <h5 className="text-sm text-gray-300 ">Web Development</h5>
          <Badge className="bg-[var(--primaryMy)] text-white">20</Badge>
        </div>
        <div className="flex items-center justify-between w-full mb-2">
          <h5 className="text-sm text-gray-300 ">Web Development</h5>
          <Badge className="bg-[var(--primaryMy)] text-white">20</Badge>
        </div>
        <div className="flex items-center justify-between w-full mb-2">
          <h5 className="text-sm text-gray-300 ">Web Development</h5>
          <Badge className="bg-[var(--primaryMy)] text-white">20</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
