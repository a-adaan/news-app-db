"use client";
import { logoutUser } from "@/app/actions/auth/Login";
import Loading from "@/app/loading";
import LoadingWrapper from "@/components/LoaddingWrapper";
import { addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";

export default function LogInOutBtn() {
  const [loggedIN, setLoggedIN] = useState(false);
  const [loading, setloading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userImg, setUserImg] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // Function to check login status
  const checkLoginStatus = () => {
    if (typeof window !== "undefined") {
      const storedUserId = window.localStorage.getItem("userId");
      const storedUserImg = window.localStorage.getItem("userImg");
      setUserId(storedUserId || "");
      setUserImg(storedUserImg);
      setLoggedIN(!!storedUserId);
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
    if (res.status == 200) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("userImg");
        setLoggedIN(false);
        setUserId("");
        setUserImg("");
        router.refresh();
      }
      addToast({
        title: "success",
        description: res?.message,
        color: "success",
      });
    } else {
      addToast({
        title: "Error",
        description: res?.message,
        color: "danger",
      });
    }
    setloading(false);
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
        <div className="flex items-center gap-5 lg:gap-3">
          <button
            onClick={handleLogout}
            className="text-white hover:text-primary text-sm"
          >
            Logout
          </button>
          <LoadingWrapper
            link={`/user?userId=${userId}`}
            cls="ring-primary ring-2 rounded-full"
          >
            <Avatar size="sm" src={`${userImg}`} />
          </LoadingWrapper>
        </div>
      )}
    </>
  );
}
