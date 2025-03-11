import NewsCard from "./NewsCard";
import { GoChevronRight } from "react-icons/go";
import LoadingWrapper from "../LoaddingWrapper";
import { getNews } from "@/app/actions/common";
import CardSkeleton from "../CardSkeleton";

export default async function OtherNews() {
  const otherNews = await getNews();
  // console.log("🚀 ~ OtherNews ~ otherNews:", otherNews);
  return (
    <section className=" h-auto my-14">
      <div className="flex justify-between items-center">
        <p className="text-black text-[20px] my-4 font-[900]">Other News</p>
        <LoadingWrapper
          link="/latest-news"
          cls="text-primary capitalize text-sm font-bold flex items-center gap-1"
        >
          <span>see all</span>
          <span>
            <GoChevronRight />
          </span>
        </LoadingWrapper>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-6 xl:gap-x-5 xl:gap-y-6">
        {otherNews?.data
          ? otherNews?.data.map((news) => (
              <NewsCard key={news?.id} news={news} />
            ))
          : Array(3)
              .fill()
              .map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
      </div>
    </section>
  );
}
