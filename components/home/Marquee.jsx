"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Marquee() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  const newsTitle = [
    "lorem Ipsum Ipsum Ipsum Ipsum Ipsum Ipsum",
    "TRUMP MUST PAY $83.3M FOR DEFAMING",
    "Marquee/Scrolling Text Animation in Figma",
  ];
  const handleNewsClick = (link) => {
    setLoading(true);
    router.push(link);
  };

  return (
    <div className="h-16 md:h-24 flex items-center flex-shrink-0 flex-grow-0 overflow-hidden">
      <motion.div
        className="flex items-center flex-shrink-0 flex-grow-0 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {newsTitle.map((title, index) => (
          <div key={index} className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleNewsClick("/news/10")}
              className="text-[30px] text-black hover:text-primary font-[900] whitespace-nowrap"
            >
              {title}
            </button>

            <Image
              src={"/common/slider.svg"}
              alt="marquee"
              width={100}
              height={100}
              className="w-7 mx-10"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center flex-shrink-0 flex-grow-0"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {newsTitle.map((title, index) => (
          <div key={index} className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleNewsClick("/news/10")}
              className="text-[30px] text-black hover:text-primary font-[900] whitespace-nowrap"
            >
              {title}
            </button>
            <Image
              src={"/common/slider.svg"}
              alt="marquee"
              width={100}
              height={100}
              className="w-7 mx-10"
            />
          </div>
        ))}
      </motion.div>
      {loading && (
        <div className="w-svw h-svh flex justify-center items-center fixed top-0 right-0 bg-black/50 bg-opacity-90 z-[100]">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
