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
  const [allCategoryNews, setAllCategoryNews] = useState({});
  const [displayedNews, setDisplayedNews] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch all categories and recent news on initial render
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Get all categories
        const categories = await getAllCategories();
        setFilterOptions(
          categories.length > 4 ? categories.slice(0, 4) : categories
        );

        // Set the first category as selected by default
        setSelectedNews(categories[0]);

        // Fetch news for all categories in parallel
        const newsPromises = categories.slice(0, 4).map(async (category) => {
          const newsData = await getCategoryNews(category.id);
          return { categoryId: category.id, data: newsData?.data?.data || [] };
        });

        const allNewsResults = await Promise.all(newsPromises);

        // Convert array of results to an object with category IDs as keys
        const newsObject = allNewsResults.reduce((acc, item) => {
          acc[item.categoryId] = item.data;
          return acc;
        }, {});

        setAllCategoryNews(newsObject);

        // Set the initial displayed news to the first category
        if (categories[0]) {
          setDisplayedNews(newsObject[categories[0].id] || []);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Handle category change with transition
  const handleCategoryChange = (category) => {
    setIsTransitioning(true);

    // Set the selected category immediately for UI feedback
    setSelectedNews(category);

    // Add a small delay for the transition effect
    setTimeout(() => {
      setDisplayedNews(allCategoryNews[category.id] || []);
      setIsTransitioning(false);
    }, 200);
  };
  return (
    <main className="container">
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
    </main>
  );
}
