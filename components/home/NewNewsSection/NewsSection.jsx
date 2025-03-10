"use client";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard";
import VotingTab from "./VotingTab";
import FilterTab from "./FilterTab";
import RecentTab from "./RecentTab";
import {
  getAllCategories,
  getCategoryNews,
  getRecentNews,
} from "@/app/actions/common";

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState();
  const [filterOptions, setFilterOptions] = useState([]);
  const [newNewsData, setNewNewsData] = useState([]);
  const [RecentNews, setRecentNews] = useState([]);
  useEffect(() => {
    const allcategories = async () => {
      const categories = await getAllCategories();
      setSelectedNews(categories[1]);
      setFilterOptions(
        categories.length > 4 ? categories.slice(1, 5) : categories
      );
      const recent = await getRecentNews();
      // console.log("🚀 ~ allcategories ~ recent:", recent.data.slice(0, 3));
      setRecentNews(recent.data.slice(0, 3));
      // console.log(
      //   "🚀 ~ useEffect ~ categories:",
      //   categories.length > 4 ? categories.slice(0, 4) : categories
      // );
    };

    allcategories();
  }, []);
  useEffect(() => {
    const getNews = async () => {
      const newNews = await getCategoryNews(12);
      setNewNewsData(newNews);
      // console.log("🚀 ~ getNews ~ res:", newNewsData?.data?.data);
    };
    getNews();
  }, [selectedNews]);
  return (
    <section className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[77%_1fr] gap-1 h-auto my-14">
      <div>
        <FilterTab
          selectedNews={selectedNews}
          setSelectedNews={setSelectedNews}
          filterOptions={filterOptions}
        />
        <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
          {newNewsData?.data?.data.map((news) => (
            // console.log("��� ~ NewsSection ~ news:", news),
            <NewsCard key={news?.id} news={news} />
          ))}
        </div>
      </div>
      <div className="w-full rounded border overflow-hidden border-brdr mt-5 md:mt-0 ">
        <VotingTab />
        <RecentTab tabName={"Most Recent"} data={RecentNews} />
      </div>
    </section>
  );
}
