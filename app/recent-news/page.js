import AdsPannel from "@/components/home/AdsPannel";
import NewsCard from "@/components/home/NewsCard";
import { getRecentNews } from "../actions/common";

export default async function RecentNews() {
  const recent = await getRecentNews();
  //   console.log("🚀 ~ RecentNews ~ recent:", recent);
  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-5 h-auto my-3 lg:my-14">
        <div>
          <p className="text-black text-[32px] font-[900] mb-3">Recent News</p>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
            {recent?.data.length > 0 ? (
              recent?.data.map((news) => (
                <NewsCard key={news?.id} news={news} />
              ))
            ) : (
              <p className="text-black text-xl font-bold">
                News not available in this category
              </p>
            )}
          </div>
        </div>
        <AdsPannel />
      </div>
    </main>
  );
}
