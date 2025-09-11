import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const TagsCard = () => {
  return (
      <Card className="w-full h-fit md:w-[300px]">
        <CardHeader>
          <CardTitle className="text-md sm:text-xl ">Tags </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">JavaScript</Badge>
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">React</Badge>
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">Next JS</Badge>
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">Css</Badge>
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">Saas</Badge>
          <Badge className="text-xs bg-[#263746] rounded-md text-gray-300 h-8">Typescript</Badge>
        </CardContent>
      </Card>
  );
};

export default TagsCard;
