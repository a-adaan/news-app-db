"use client";
import { Suspense, useEffect, useState } from "react";
import NewsCard from "../NewsCard";
import VotingTab from "./VotingTab";
import FilterTab from "./FilterTab";
import RecentTab from "./RecentTab";
import {
  getAllCategories,
  getCategoryNews,
  getRecentNews,
} from "@/app/actions/common";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState();
  const [filterOptions, setFilterOptions] = useState([]);
  const [newNewsData, setNewNewsData] = useState(null);
  const [RecentNews, setRecentNews] = useState(null);
  useEffect(() => {
    const allcategories = async () => {
      const categories = await getAllCategories();
      setSelectedNews(categories[0]);
      setFilterOptions(
        categories.length > 4 ? categories.slice(0, 4) : categories
      );
      const recent = await getRecentNews();
      setRecentNews(recent?.data.slice(0, 4));
    };

    allcategories();
  }, []);
  useEffect(() => {
    const getNews = async () => {
      const newNews = await getCategoryNews(selectedNews?.id);
      setNewNewsData(newNews?.data?.data);
      // console.log("🚀 ~ getNews ~ res:", newNews?.data?.data);
      // console.log("🚀 ~ getNews ~ res:", newNews?.message);
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
        <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-[22px] xl:gap-y-6">
          {newNewsData ? (
            newNewsData.length > 0 ? (
              newNewsData.map((news) => <NewsCard key={news?.id} news={news} />)
            ) : (
              <p className="text-black text-xl font-bold">
                News not available in this category
              </p>
            )
          ) : (
            Array(3)
              .fill("null")
              .map((_, index) => <CardSkeleton key={index} />)
          )}
        </div>
      </div>
      <div className="w-full rounded border overflow-hidden border-brdr mt-5 md:mt-0 ">
        <VotingTab />
        <RecentTab tabName={"Most Recent"} data={RecentNews} />
      </div>
    </section>
  );
}
