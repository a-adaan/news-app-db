import Link from "next/link";
import NewsCard from "./NewsCard";
import { GoChevronRight } from "react-icons/go";
import LoadingWrapper from "../LoaddingWrapper";
import { getNews } from "@/app/actions/common";

export default async function OtherNews() {
  const otherNews = await getNews();
  // console.log("🚀 ~ OtherNews ~ otherNews:", otherNews);
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
    <section className=" h-auto my-14">
      <div className="flex justify-between items-center">
        <p className="text-black text-[20px] my-4 font-[900]">Other News</p>
        <LoadingWrapper
          link="/category/news"
          cls="text-primary capitalize text-sm font-bold flex items-center gap-1"
        >
          <span>see all</span>
          <span>
            <GoChevronRight />
          </span>
        </LoadingWrapper>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
        {otherNews.data.map((news) => (
          <NewsCard key={news?.id} news={news} />
        ))}
      </div>
    </section>
  );
}
