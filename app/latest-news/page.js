"use client";
import AdsPannel from "@/components/home/AdsPannel";
import FilterTab from "@/components/home/NewNewsSection/FilterTab";
import NewsCard from "@/components/home/NewsCard";
import { useEffect, useState } from "react";
import { getAllCategories, getCategoryNews } from "../actions/common";
import CardSkeleton from "@/components/CardSkeleton";

export default function LatestNewsPage() {
  const [selectedNews, setSelectedNews] = useState();
  const [filterOptions, setFilterOptions] = useState([]);
  const [newNewsData, setNewNewsData] = useState([]);

  useEffect(() => {
    const allcategories = async () => {
      const categories = await getAllCategories();
      setSelectedNews(categories[1]);
      setFilterOptions(
        categories.length > 4 ? categories.slice(1, 5) : categories
      );
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
      // console.log("🚀 ~ getNews ~ res:", newNews);
    };
    getNews();
  }, [selectedNews]);
  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-14">
        <div>
          <FilterTab
            selectedNews={selectedNews}
            setSelectedNews={setSelectedNews}
            filterOptions={filterOptions}
          />
          <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
            {newNewsData?.data?.data
              ? newNewsData?.data?.data.map((news, i) => (
                  <NewsCard key={i} news={news} />
                ))
              : Array(3)
                  .fill()
                  .map((_, index) => (
                    <CardSkeleton key={`skeleton-${index}`} />
                  ))}
          </div>
        </div>
        <AdsPannel />
      </div>
    </main>
  );
}
