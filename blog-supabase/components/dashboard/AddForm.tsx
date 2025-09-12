"use client";
import React, { memo, Suspense } from "react";
import { CardContent, CardFooter } from "../ui/card";
import RichTextEditor from "./RichTextEditor";
import SelectTags from "./SelectTags";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { ITagAndCategory } from "@/utils/interfaces";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { AddArticleSchema, addArticleSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
interface AddFormProps {
  tags: ITagAndCategory[];
  categories: ITagAndCategory[];
}

const AddForm = ({ tags, categories }: AddFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<AddArticleSchema>({
    resolver: zodResolver(addArticleSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
      categories: [],
    },
  });
  const onSubmit = (data: AddArticleSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <div className="mb-4 space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="Article Main Title"
          />
          <p className="text-red-500 text-sm">{errors.title?.message}</p>
        </div>
        <Suspense fallback={<Skeleton className="h-[200px]" />}>
          <Controller
            name="content"
            control={control}
            render={({ field }) => <RichTextEditor {...field} />}
          />
          <p className="text-red-500 text-sm">{errors.content?.message}</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            {/* select tags */}
            <div className="w-full flex flex-col gap-2">
              <Controller
                name="tags"
                control={control}
                render={({ field }) => (
                  <SelectTags
                    {...field}
                    options={tags}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select Tag"
                  />
                )}
              />
              {errors.tags && (
                <p className="text-red-500 text-sm">{errors.tags?.message}</p>
              )}
            </div>
            {/* select categories */}
            <div className="w-full flex flex-col gap-2">
              <Controller
                name="categories"
                control={control}
                render={({ field }) => (
                  <SelectTags
                    {...field}
                    options={categories}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select Category"
                  />
                )}
              />
              {errors.categories && (
                <p className="text-red-500 text-sm">
                  {errors.categories?.message}
                </p>
              )}
            </div>
          </div>
        </Suspense>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="mt-4 text-white bg-[var(--primaryMy)] w-full"
        >
          Add Article
        </Button>
      </CardFooter>
    </form>
  );
};

export default memo(AddForm);
