"use client";
import Search from "@/components/newsDetails/sidebar/Search";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function SearchPop() {
  return (
    <>
      <Popover color="default" placement={"bottom-end"}>
        <PopoverTrigger>
          <CiSearch size={20} />
        </PopoverTrigger>
        <PopoverContent>
          <Search />
        </PopoverContent>
      </Popover>
    </>
  );
}
