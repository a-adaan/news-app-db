import NewsCard from "./NewsCard";
import { GoChevronRight } from "react-icons/go";
import LoadingWrapper from "../LoaddingWrapper";
import CardSkeleton from "../skeletons/CardSkeleton";

export default async function RecentSection({ recentNews }) {
  // console.log("🚀 ~ RecentSection ~ recentNews:", recentNews);

  return (
    <section className=" h-auto my-14">
      <div className="flex justify-between items-center">
        <p className="text-black text-[20px] my-4 font-[900]">Recent News</p>
        <LoadingWrapper
          link="/recent-news"
          cls="text-primary capitalize text-sm font-bold flex items-center gap-1"
        >
          <span>see all</span>
          <span>
            <GoChevronRight />
          </span>
        </LoadingWrapper>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-6 xl:gap-x-6 xl:gap-y-6">
        {recentNews?.data
          ? recentNews?.data
              .slice(0, 8)
              .map((news) => <NewsCard key={news?.id} news={news} />)
          : Array(3)
              .fill()
              .map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
      </div>
    </section>
  );
}
