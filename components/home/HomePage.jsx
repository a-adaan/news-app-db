import {
  fetchNewsData,
  getBreakingNews,
  getNews,
  getPopularNews,
  getRecentNews,
  getSliderNews,
  getVideos,
} from "@/app/actions/common";
import Marquee from "./Marquee";
import NewsSection from "./NewNewsSection/NewsSection";
import OtherNews from "./OtherNews";
import PopularSection from "./PopularSection";
import RecentSection from "./RecentSection";
import Slider from "./Slider";
import VideoSection from "./VideoSection";
import { Suspense } from "react";
import SliderSkeleton from "../skeletons/SliderSkeleton";
import CategorySection from "./CategorySection";

export default async function HomePage() {
  const sliderData = await getSliderNews();
  const recentNews = await getRecentNews();
  const popularNews = await getPopularNews();
  const otherNews = await getNews();
  const videoData = await getVideos();
  const breaking = await getBreakingNews();
  const { categories, allCategoryNews } = await fetchNewsData();
  // console.log("🚀 ~ HomePage ~ slidedata:", sliderData.data);
  return (
    <main>
      <CategorySection />
      <Marquee breakingNews={breaking} />
      <Suspense fallback={<SliderSkeleton />}>
        <Slider sliderData={sliderData?.data} />
      </Suspense>
      <div className="container">
        <NewsSection
          initialCategories={categories}
          initialRecentNews={recentNews?.data?.slice(0, 4)}
          initialAllCategoryNews={allCategoryNews}
        />
        <RecentSection recentNews={recentNews} />
        <PopularSection popularNews={popularNews} />
        <VideoSection videos={videoData} />
        <OtherNews otherNews={otherNews} />
      </div>
    </main>
  );
}
