import Marquee from "./Marquee";
import NewsSection from "./NewNewsSection/NewsSection";
import OtherNews from "./OtherNews";
import PopularSection from "./PopularSection";
import RecentSection from "./RecentSection";
import Slider from "./Slider";
import VideoSection from "./VideoSection";

export default function HomePage() {
  return (
    <main>
      <Marquee />
      <Slider />
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
