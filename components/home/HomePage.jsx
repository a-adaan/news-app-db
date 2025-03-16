import {
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

export default async function HomePage() {
  const sliderData = await getSliderNews();
  const recentNews = await getRecentNews();
  const popularNews = await getPopularNews();
  const otherNews = await getNews();
  const videoData = await getVideos();
  // console.log("🚀 ~ HomePage ~ slidedata:", sliderData.data);
  return (
    <main>
      <Marquee />
      <Suspense fallback={<SliderSkeleton />}>
        <Slider sliderData={sliderData?.data} />
      </Suspense>
      <div className="container">
        <NewsSection />
        <RecentSection recentNews={recentNews} />
        <PopularSection popularNews={popularNews} />
        <VideoSection videosData={videoData} />
        <OtherNews otherNews={otherNews} />
      </div>
    </main>
  );
}
