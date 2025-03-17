"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function LoadingWrapper({ children, link, cls = "" }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the current full URL (pathname + search params)
  const currentUrl =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  const handleClick = () => {
    // Compare the full link with the current URL, not just the pathname
    if (link === currentUrl) {
      return;
    }

    // Check if the link is the same pathname but with different query params
    const linkPathname = link.split("?")[0];
    const linkParams = link.includes("?") ? link.split("?")[1] : "";

    if (linkPathname === pathname && linkParams !== searchParams.toString()) {
      setLoading(true);
    } else if (link !== pathname) {
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Link href={link} onClick={handleClick} className={cls}>
        {children}
      </Link>
      {loading &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-90 z-[100]">
            <div className="loader"></div>
          </div>,
          document.body
        )}
    </>
  );
}
