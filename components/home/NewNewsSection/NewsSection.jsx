"use client";
import { useState } from "react";
import NewsCard from "../NewsCard";
import VotingTab from "./VotingTab";
import FilterTab from "./FilterTab";
import RecentTab from "./RecentTab";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function NewsSectionClient({
  initialCategories,
  initialRecentNews,
  initialAllCategoryNews,
}) {
  const [selectedNews, setSelectedNews] = useState(initialCategories[0]);
  const [filterOptions] = useState(initialCategories);
  const [allCategoryNews] = useState(initialAllCategoryNews);
  const [displayedNews, setDisplayedNews] = useState(
    initialAllCategoryNews[initialCategories[0]?.id] || []
  );
  const [recentNews] = useState(initialRecentNews);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setSelectedNews(category);

    setTimeout(() => {
      setDisplayedNews(allCategoryNews[category.id] || []);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[77%_1fr] gap-1 h-auto my-14">
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
      <div className="w-full rounded border overflow-hidden border-brdr mt-5 md:mt-0">
        <VotingTab />
        <RecentTab tabName={"Most Recent"} data={recentNews} />
      </div>
    </section>
  );
}
