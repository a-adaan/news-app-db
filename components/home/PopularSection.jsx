import Link from "next/link";
import NewsCard from "./NewsCard";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";

export default function PopularSection() {
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
    <section className="h-auto my-14">
      <div className="flex justify-between items-center">
        <p className="text-black text-[20px] my-4 font-[900]">Popular News</p>
        <LoadingWrapper
          link="/category/popular"
          cls="text-primary capitalize text-sm font-bold flex items-center gap-1"
        >
          <span>see all</span>
          <span>
            <GoChevronRight />
          </span>
        </LoadingWrapper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* First news card (two rows wide) */}
        <div className="relative md:col-span-2 md:row-span-2 h-[400px] md:h-full rounded">
          <Image
            src={newsData[0].img}
            alt="featured news"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
          <div className="absolute bottom-0 w-full h-1/2 flex flex-col justify-end rounded-b p-5 bg-gradient-to-t from-black/80 to-black/0">
            <div className="flex items-center gap-2">
              <LoadingWrapper link={`/category/${newsData[0].tag}`}>
                <span className="h-5 w-[57px] flex items-center justify-center rounded-[56px] text-white font-extrabold text-xs bg-orange-700">
                  {newsData[0].tag}
                </span>
              </LoadingWrapper>
              <span className="text-white font-extrabold text-xs ">
                {newsData[0].date}
              </span>
            </div>
            <LoadingWrapper
              link={"/news/123"}
              cls="text-[20px] font-extrabold text-white hover:text-primary text-pretty mt-2"
            >
              {newsData[0].title}
            </LoadingWrapper>
          </div>
        </div>
        {/* Remaining news cards */}
        {newsData.slice(1).map((news, i) => (
          <NewsCard key={i} news={news} />
        ))}
      </div>
    </section>
  );
}
