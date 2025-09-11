"use client";
import React, { useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";

const SearchInput = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const onToggleMobileSearch = useCallback(() => {
    setIsMobileSearchOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative hidden md:block">
        <Input type="search" placeholder="Search..." className="pl-8" />
        <Search className="w-4 h-4 text-[var(--primaryMy)] absolute left-2 top-1/2 -translate-y-1/2" />
      </div>
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        aria-label="Open Search"
        onClick={onToggleMobileSearch}
      >
        <Search className="w-4 h-4 text-[var(--primaryMy)] " />
      </Button>
      {/* Mobile Search */}
      <AnimatePresence>
      {isMobileSearchOpen && (
          <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden absolute top-[70px] z-20 left-6 right-6 p-2 rounded-md bg-background"
        >
          <Input type="search" placeholder="Search..." className="pl-8" />
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default SearchInput;
