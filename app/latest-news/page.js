"use client";
import AdsPannel from "@/components/home/AdsPannel";
import FilterTab from "@/components/home/NewNewsSection/FilterTab";
import NewsCard from "@/components/home/NewsCard";
import { useEffect, useState } from "react";
import { getAllCategories, getCategoryNews } from "../actions/common";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function LatestNewsPage() {
  const [selectedNews, setSelectedNews] = useState();
  const [filterOptions, setFilterOptions] = useState([]);
  const [newNewsData, setNewNewsData] = useState(null);

  useEffect(() => {
    const allcategories = async () => {
      const categories = await getAllCategories();
      setSelectedNews(categories[0]);
      setFilterOptions(
        categories.length > 4 ? categories.slice(0, 4) : categories
      );
    };

    allcategories();
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const newNews = await getCategoryNews(selectedNews?.id);
      setNewNewsData(newNews?.data?.data);
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
            {newNewsData ? (
              newNewsData.length > 0 ? (
                newNewsData.map((news) => (
                  <NewsCard key={news?.id} news={news} />
                ))
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
        <AdsPannel />
      </div>
    </main>
  );
}
