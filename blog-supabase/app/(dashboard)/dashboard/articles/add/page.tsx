import { getTagsAndCategories } from "@/actions";
import AddForm from "@/components/dashboard/AddForm";
import { Card, CardHeader } from "@/components/ui/card";

const Page = async () => {
  const { tags, categories } = await getTagsAndCategories();

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold mb-6">Add Article</h1>
        </CardHeader>
        <AddForm tags={tags} categories={categories} />
      </Card>
    </div>
  );
};

export default Page;
