import NewsCard from "./NewsCard";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";
import CardSkeleton from "../skeletons/CardSkeleton";

export default async function PopularSection({ popularNews }) {
  return (
    <section className="h-auto my-14">
      <div className="flex justify-between items-center">
        <p className="text-black text-[20px] my-4 font-[900]">Popular News</p>
        <LoadingWrapper
          link="/popular-news"
          cls="text-primary capitalize text-sm font-bold flex items-center gap-1"
        >
          <span>see all</span>
          <span>
            <GoChevronRight />
          </span>
        </LoadingWrapper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* First news card (two rows wide) */}

        {popularNews?.data && (
          <div className="relative md:col-span-2 md:row-span-2 h-[400px] md:h-full rounded overflow-hidden">
            <LoadingWrapper link={`/news/${popularNews?.data[0].id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${popularNews?.data[0].featured_image}`}
                alt="featured news"
                layout="fill"
                className="rounded object-cover  hover:scale-[1.3] transition-all duration-500 ease-in-out cursor-pointer"
              />
            </LoadingWrapper>
            <div className="absolute bottom-0 w-full h-auto flex flex-col justify-end rounded-b p-5 bg-gradient-to-t from-black to-black/0">
              <div className="flex items-center gap-2">
                <LoadingWrapper
                  link={`/category/id=${popularNews?.data[0].category_id}&name=${popularNews?.data[0].category_name}`}
                >
                  <span className="px-[6px] py-[5px] rounded-[56px] text-white font-extrabold text-xs bg-orange-700">
                    {popularNews?.data[0].category_name}
                  </span>
                </LoadingWrapper>
                <span className="text-white font-extrabold text-xs ">
                  {popularNews?.data[0].updated_at.split(" ")[0]}
                </span>
              </div>
              <LoadingWrapper
                link={`/news/${popularNews?.data[0].id}`}
                cls="text-[20px] font-extrabold text-white hover:text-primary text-pretty mt-2"
              >
                {popularNews?.data[0].title}
              </LoadingWrapper>
            </div>
          </div>
        )}
        {/* Remaining news cards */}
        {popularNews?.data
          ? popularNews?.data
              .slice(1, 5)
              .map((news, i) => <NewsCard key={i} news={news} />)
          : Array(3)
              .fill()
              .map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
      </div>
    </section>
  );
}
