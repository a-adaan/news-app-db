"use client";
import AdsPannel from "@/components/home/AdsPannel";
import FilterTab from "@/components/home/NewNewsSection/FilterTab";
import NewsCard from "@/components/home/NewsCard";
import { useState } from "react";

export default function LatestNewsPage() {
  const [selectedNews, setSelectedNews] = useState("Travel");
  const newsData = [
    {
      img: "/news/news01.jpg",
      title: "South Korea's President Yoon banned from foreign travel",
      tag: "world",
      date: "aug 1,2017",
    },
    {
      img: "/news/news02.jpg",
      title: "AI technology's impact on the future of work",
      tag: "tech",
      date: "sep 2,2017",
    },
    {
      img: "/news/news03.jpg",
      title: "India's Prime Minister Narendra Modi to visit China",
      tag: "world",
      date: "oct 3,2017",
    },
    {
      img: "/news/news04.jpg",
      title: "Apple announces new iPhones and iPads",
      tag: "tech",
      date: "nov 4,2017",
    },
    {
      img: "/news/news05.jpg",
      title: "Russia invades Ukraine, leading to mass protests",
      tag: "world",
      date: "dec 5,2017",
    },
    {
      img: "/news/news06.svg",
      title: "Facebook reveals new privacy policy",
      tag: "tech",
      date: "jan 6,2018",
    },
  ];
  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-14">
        <div>
          <FilterTab
            selectedNews={selectedNews}
            setSelectedNews={setSelectedNews}
          />
          <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
            {newsData.map((news, i) => (
              <NewsCard key={i} news={news} />
            ))}
          </div>
        </div>
        <AdsPannel />
      </div>
    </main>
  );
}
