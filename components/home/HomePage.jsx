import Marquee from "./Marquee";
import NewsSection from "./NewNewsSection/NewsSection";
import OtherNews from "./OtherNews";
import PopularSection from "./PopularSection";
import RecentSection from "./RecentSection";
import Slider from "./Slider";

export default function HomePage() {
  return (
    <main>
      <Marquee />
      <Slider />
      <div className="container">
        <NewsSection />
        <RecentSection />
        <PopularSection />
        <OtherNews />
      </div>
    </main>
  );
}
