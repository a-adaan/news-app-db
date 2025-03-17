"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Create a client component that uses the search params
function LinkWithLoading({
  link,
  pathname,
  searchParams,
  setLoading,
  cls,
  children,
}) {
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
  }, [pathname, searchParams, setLoading]);

  return (
    <Link href={link} onClick={handleClick} className={cls}>
      {children}
    </Link>
  );
}

export default function LoadingWrapper({ children, link, cls = "" }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Suspense
        fallback={
          <Link href={link} className={cls}>
            {children}
          </Link>
        }
      >
        <ClientPart
          link={link}
          pathname={pathname}
          setLoading={setLoading}
          cls={cls}
        >
          {children}
        </ClientPart>
      </Suspense>
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

// This component will only be rendered on the client
function ClientPart({ link, pathname, setLoading, cls, children }) {
  const searchParams = useSearchParams();

  return (
    <LinkWithLoading
      link={link}
      pathname={pathname}
      searchParams={searchParams}
      setLoading={setLoading}
      cls={cls}
    >
      {children}
    </LinkWithLoading>
  );
}
