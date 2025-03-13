"use client";
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
  const pathname = usePathname();
  const handleClick = (link) => {
    // console.log("pathname lw : ", pathname);
    // console.log("link lw : ", link);
    if (link === pathname) return;
    setLoading(true);
  };
  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <span className="flex items-center hover:text-primary">
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
          <DropdownItem key="privacy">
            <Link
              href="/privacy"
              onClick={() => handleClick("/privacy")}
              className={`hover:text-primary text-sm ${
                pathname === "/privacy"
                  ? "text-primary underline underline-offset-4 font-extrabold"
                  : "text-black font-semibold"
              }`}
            >
              Privacy
            </Link>
          </DropdownItem>
          <DropdownItem key="terms">
            <Link
              href="/terms&conditions"
              onClick={() => handleClick("/terms&conditions")}
              className={`hover:text-primary text-sm ${
                pathname === "/terms&conditions"
                  ? "text-primary underline underline-offset-4 font-extrabold"
                  : "text-black font-semibold"
              }`}
            >
              Terms & Condition
            </Link>
          </DropdownItem>
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
