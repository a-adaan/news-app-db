"use client";
import PageDropDown from "./PageDropDown";
import LoadingWrapper from "@/components/LoaddingWrapper";
import LogInOutBtn from "./LogInOutBtn";
import SearchPop from "./SearchPop";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <ul className="hidden lg:flex items-center gap-6 text-white text-sm font-[733]">
      <li className="cursor-pointer ">
        <LoadingWrapper
          link="/"
          cls={` text-sm hover:text-primary ${
            pathname === "/"
              ? "text-primary underline underline-offset-4 font-extrabold"
              : "text-white"
          }`}
        >
          Home
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer ">
        <LoadingWrapper
          link="/latest-news"
          cls={` text-sm hover:text-primary ${
            pathname === "/latest-news"
              ? "text-primary underline underline-offset-4 font-extrabold"
              : "text-white"
          }`}
        >
          Latest News
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer">
        <LoadingWrapper
          link="/category"
          cls={` text-sm hover:text-primary ${
            pathname === "/category"
              ? "text-primary underline underline-offset-4 font-extrabold"
              : "text-white"
          }`}
        >
          Category
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer">
        <PageDropDown />
      </li>
      <li className="cursor-pointer">
        <LogInOutBtn />
      </li>
      <li className="cursor-pointer hover:text-primary">
        <SearchPop />
      </li>
    </ul>
  );
}
