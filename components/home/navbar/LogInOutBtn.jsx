"use client";
import { logoutUser } from "@/app/actions/auth/Login";
import Loading from "@/app/loading";
import LoadingWrapper from "@/components/LoaddingWrapper";
import { addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogInOutBtn() {
  const [loggedIN, setLoggedIN] = useState(false);
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to check login status
  const checkLoginStatus = () => {
    if (typeof window !== "undefined") {
      const userId = window.localStorage.getItem("userId");
      setLoggedIN(!!userId);
    }
  };

  // Check on initial load
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Check when pathname changes (after redirects)
  useEffect(() => {
    checkLoginStatus();
  }, [pathname]);

  const handleLogout = async () => {
    setloading(true);
    const res = await logoutUser();
    // console.log("��� ~ handleLogout ~ res:", res);
    if (res.status == 200) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("userId");
        setLoggedIN(false);
        router.refresh();
      }
      addToast({
        title: "success",
        description: res?.message,
        color: "success",
      });
      setloading(false);
    } else {
      addToast({
        title: "Error",
        description: res?.message,
        color: "danger",
      });
      setloading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {!loggedIN ? (
        <LoadingWrapper
          link="/auth/login"
          cls={`hover:text-primary text-sm ${
            pathname === "/auth/login"
              ? "text-primary underline underline-offset-4 font-extrabold"
              : "text-white"
          }`}
        >
          Login
        </LoadingWrapper>
      ) : (
        <button
          onClick={handleLogout}
          className="text-white hover:text-primary text-sm"
        >
          Logout
        </button>
      )}
    </>
  );
}
