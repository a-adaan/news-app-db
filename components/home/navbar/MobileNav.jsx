"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Accordion, AccordionItem } from "@heroui/react";
import LoadingWrapper from "@/components/LoaddingWrapper";
import { usePathname } from "next/navigation";
import LogInOutBtn from "./LogInOutBtn";
import { getAllPages } from "@/app/actions/common/pages";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState([]);
  const pathename = usePathname();

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathename]);

  useEffect(() => {
    async function fetchPages() {
      const data = await getAllPages();
      setPages(data);
    }
    fetchPages();
  }, []);

  return (
    <div className="block lg:hidden overflow-hidden">
      <button
        onClick={toggleMenu}
        className={`${
          open ? "opacity-0 translate-x-[1000px]" : "opacity-100 translate-x-0"
        } transition-all duration-300`}
      >
        <FaBars size={30} className="text-white" />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/75  ${
          open ? "opacity-100 z-20" : "opacity-0 -z-30"
        } transition-all duration-100`}
      >
        <ul
          className={`${
            open ? "translate-x-0" : " translate-x-[1000px]"
          } transition-all duration-400 flex flex-col gap-5 font-[733] absolute top-0 left-[30%] space-y-3 text-left pl-10 pr-8 bg-black text-base text-white w-[70%] h-full`}
        >
          <div className="flex items-center justify-between my-5">
            <button onClick={toggleMenu} className="">
              <RxCross2 size={30} />
            </button>
            <LogInOutBtn />
          </div>
          <li className="cursor-pointer">
            <LoadingWrapper link="/">Home</LoadingWrapper>
          </li>
          <li className="cursor-pointer">
            <LoadingWrapper link="/latest-news">Latest News</LoadingWrapper>
          </li>
          <li className="cursor-pointer">
            <LoadingWrapper link="/category">Category</LoadingWrapper>
          </li>

          <li className="cursor-pointer pr-5">
            <Accordion className="p-0">
              <AccordionItem key="1" aria-label="Accordion 1" title="Pages">
                <ul className=" flex flex-col gap-3 ml-5">
                  <li className="cursor-pointer mb-2">
                    <LoadingWrapper link="/contact">Contact</LoadingWrapper>
                  </li>
                  {pages?.map((page) => (
                    <li key={page?.id} className="cursor-pointer mb-2">
                      <LoadingWrapper link={`/pages/${page?.slug}`}>
                        {page?.title}
                      </LoadingWrapper>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </div>
  );
}
