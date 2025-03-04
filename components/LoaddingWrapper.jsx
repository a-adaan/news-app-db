"use client";

import Loading from "@/app/loading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <Link href={link} onClick={handleClick} className={cls}>
      {loading && <Loading />}
      {children}
    </Link>
  );
}
