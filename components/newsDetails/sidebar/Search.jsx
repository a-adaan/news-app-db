"use client";
import { Input } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="w-full px-2 py-4">
      <Input
        placeholder="Search News"
        type="text"
        variant={"bordered"}
        endContent={
          <span className="h-full w-[42px] cursor-pointer bg-[#E8E8E8] hover:bg-[#dbdbdb] flex items-center justify-center text-black">
            <CiSearch size={20} />
          </span>
        }
        classNames={{
          inputWrapper: "rounded pr-0",
        }}
      />
    </div>
  );
}
