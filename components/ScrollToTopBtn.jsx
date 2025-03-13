"use client";
import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
export default function ScrollToTopBtn() {
  const [isVisible, setVisible] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // console.log("🚀 ~ toggleVisibility ~ window.scrollY:", window.scrollY);
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-[5%] right-[5%] lg:right-[2%] z-[200] ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <button
        onClick={handleScrollToTop}
        className="text-2xl text-white bg-primary hover:shadow-lg p-4 rounded-full"
      >
        <GoArrowUp />
      </button>
    </div>
  );
}
