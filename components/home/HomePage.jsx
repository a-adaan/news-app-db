import { getNews, getSliderNews } from "@/app/actions/common";
import Marquee from "./Marquee";
import NewsSection from "./NewNewsSection/NewsSection";
import OtherNews from "./OtherNews";
import PopularSection from "./PopularSection";
import RecentSection from "./RecentSection";
import Slider from "./Slider";
import VideoSection from "./VideoSection";

export default async function HomePage() {
  const data = await getNews();
  const sliderData = await getSliderNews();
  // console.log("🚀 ~ HomePage ~ slidedata:", sliderData.data);
  return (
    <main>
      <Marquee />
      <Slider sliderData={sliderData.data} />
      <div className="container">
        <NewsSection />
        <RecentSection />
        <PopularSection />
        <VideoSection />
        <OtherNews />
      </div>
    </main>
  );
}
