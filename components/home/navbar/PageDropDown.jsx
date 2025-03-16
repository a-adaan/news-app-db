"use client";
import { getAllPages } from "@/app/actions/common/pages";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
export default function PageDropDown() {
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);
  const pathname = usePathname();
  const handleClick = (link) => {
    if (link === pathname) return;
    setLoading(true);
  };
  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  useEffect(() => {
    async function fetchPages() {
      const data = await getAllPages();
      setPages(data);
    }
    fetchPages();
  }, []);
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <span
            className="flex items-center text-white font-[733] hover:text-primary"
            aria-controls="dropdown-menu"
          >
            Pages <FaAngleDown size={15} className="ml-1" />
          </span>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown Variants" variant={"light"}>
          <DropdownItem key="contact">
            <Link
              href="/contact"
              onClick={() => handleClick("/contact")}
              className={`hover:text-primary text-sm ${
                pathname === "/contact"
                  ? "text-primary underline underline-offset-4 font-extrabold"
                  : "text-black font-semibold"
              }`}
            >
              Contact
            </Link>
          </DropdownItem>
          {pages?.map((page) => (
            <DropdownItem key={page?.title}>
              <Link
                href={`/pages/${page.slug}`}
                onClick={() => handleClick(`/pages/${page.slug}`)}
                className={`hover:text-primary text-sm ${
                  pathname === `/pages/${page.slug}`
                    ? "text-primary underline underline-offset-4 font-extrabold"
                    : "text-black font-semibold"
                }`}
              >
                {page?.title}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {loading && (
        <div className="w-svw h-svh flex inset-0 justify-center items-center fixed top-0 left-0 bg-black/50 bg-opacity-90 z-50">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
