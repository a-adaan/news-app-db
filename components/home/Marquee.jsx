"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Marquee() {
  const newsTitle = [
    "lorem Ipsum Ipsum Ipsum Ipsum Ipsum Ipsum",
    "TRUMP MUST PAY $83.3M FOR DEFAMING",
    "Marquee/Scrolling Text Animation in Figma",
  ];

  return (
    <div className="h-24 flex items-center flex-shrink-0 flex-grow-0 overflow-hidden">
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
            <p className="text-[30px] text-black font-[900] whitespace-nowrap">
              {title}
            </p>
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
            <p className="text-[30px] text-black font-[900] whitespace-nowrap">
              {title}
            </p>
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
    </div>
  );
}
