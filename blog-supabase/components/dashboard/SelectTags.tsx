"use client";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Label } from "../ui/label";
interface IOption {
  id: string;
  name: string;
}
interface SelectTagsProps {
  placeholder: string;
  options?: IOption[];
  value: string[];
  onChange: (value: string[]) => void;
}
const SelectTags = ({
  placeholder,
  options,
  value,
  onChange,
}: SelectTagsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {value?.length ? `${value?.length} selected` : placeholder}{" "}
          <ChevronDownIcon className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64  h-[200px] md:h-[300px] overflow-auto">
        {options?.map((option) => (
          <div
            key={option?.id}
            className="flex items-center gap-2 p-1 w-full"
          >
            <Label className="hover:bg-accent/50 flex items-start gap-3 w-full rounded-lg border p-3 has-[[aria-checked=true]]:border-[var(--primaryMy)] has-[[aria-checked=true]]:bg-[#263746]">
              <Checkbox
                className="data-[state=checked]:border-[var(--primaryMy)] data-[state=checked]:bg-[var(--primaryMy)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primaryMy)] dark:data-[state=checked]:bg-[var(--primaryMy)]"
                checked={value?.includes(option?.id)}
                value={option?.id}
                onCheckedChange={() =>
                  onChange(
                    value?.includes(option?.id)
                      ? value?.filter((id) => id !== option?.id)
                      : [...value, option?.id]
                  )
                }
              />
              <span>{option?.name}</span>
            </Label>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default SelectTags;
