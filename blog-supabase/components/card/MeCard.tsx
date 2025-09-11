import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { Separator } from "../ui/separator";

const MeCard = () => {
  return (
    <Card className="w-full h-fit md:w-[300px]">
      <CardHeader>
        <Image
          src={"/avatar2.jpg"}
          alt="About Image"
          width={300}
          height={200}
          className="rounded-md mx-auto"
        />
        <CardTitle className="text-center mt-2 text-xl">Ali Talib</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ipsum
          error accusantium magni, ratione ullam vel.
        </p>
      </CardContent>
      <Separator />
      <CardFooter>
        <SocialLinks />
      </CardFooter>
    </Card>
  );
};

export default MeCard;
