import ArchiveCard from "@/components/card/ArchiveCard";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Archive | Orbits Blog",
  description: "Archive page , All posts in timeline format",
};
const Page = () => {
  return (
    <div className="w-full">
      <Card>
        <ArchiveCard />
      </Card>
    </div>
  );
};

export default Page;
