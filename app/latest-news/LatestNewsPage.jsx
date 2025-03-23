"use client";
import AdsPannel from "@/components/home/AdsPannel";
import FilterTab from "@/components/home/NewNewsSection/FilterTab";
import NewsCard from "@/components/home/NewsCard";
import { useState } from "react";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function LatestNewsPage({
  initialCategories,
  initialAllCategoryNews,
}) {
  const [selectedNews, setSelectedNews] = useState(initialCategories[0]);
  const [filterOptions] = useState(initialCategories);
  const [allCategoryNews] = useState(initialAllCategoryNews);
  const [displayedNews, setDisplayedNews] = useState(
    initialAllCategoryNews[initialCategories[0]?.id] || []
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle category change with transition
  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setSelectedNews(category);

    setTimeout(() => {
      setDisplayedNews(allCategoryNews[category.id] || []);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-14">
        <div>
          <FilterTab
            selectedNews={selectedNews}
            setSelectedNews={handleCategoryChange}
            filterOptions={filterOptions}
          />
          <div
            className={`flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-[22px] xl:gap-y-6 transition-opacity duration-300 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {displayedNews ? (
              displayedNews.length > 0 ? (
                displayedNews.map((news) => (
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
    </>
  );
}
