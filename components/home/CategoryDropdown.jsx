"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
} from "@heroui/react";

export default function CategoryDropdown({ categories }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" color="default" variant="bordered">
          <span className="flex items-center gap-2 font-semibold">
            More <IoIosArrowDown size={20} />
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown Variants">
        {categories?.map((category) => (
          <DropdownItem
            key={category.id}
            classNames={{
              title: "font-semibold",
            }}
          >
            <Link href={`/category/id=${category?.id}&name=${category?.name}`}>
              {category.name}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
