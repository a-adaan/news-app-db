"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function LoadingWrapper({ children, link, cls = "" }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const handleClick = () => {
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
