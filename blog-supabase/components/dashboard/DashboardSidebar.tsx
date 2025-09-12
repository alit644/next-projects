"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const ITEMS = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard/articles",
    label: "Articles",
  },
  {
    href: "/dashboard/articles/add",
    label: "Add Article",
  },
  {
    href: "/dashboard/categories",
    label: "Categories",
  },
  {
    href: "/dashboard/tags",
    label: "Tags",
  },
];
export function DashboardSidebar() {
  const pagePath = usePathname();
  const isActive = (path: string) => pagePath === path;
  return (
    <Card className="w-full h-fit md:w-[300px]">
      <CardHeader>
        <CardTitle>Navigation</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <ul className="flex flex-col gap-2">
          {ITEMS.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* add active class */}
              <li
                className={
                  isActive(item.href)
                    ? "px-4 h-10 flex items-center rounded-md bg-[#263746] text-[var(--primaryMy)]"
                    : "px-4 h-10 flex items-center rounded-md hover:bg-[#263746] hover:text-[var(--primaryMy)]"
                }
              >
                <Link href={item.href} aria-label={item.label}>{item.label}</Link>
              </li>
            </motion.div>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
