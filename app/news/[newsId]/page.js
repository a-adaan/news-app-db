import { getSingleNews, getSliderSingleNews } from "@/app/actions/common";
import NewsDetailsPage from "@/components/newsDetails/NewsDetailsPage";
import NewsDetailsSkeleton from "@/components/skeletons/NewsDetailsSkeleton";

export default async function NewsDetails({ searchParams }) {
  const search = await searchParams;
  // console.log("searchParams : ", search);
  let singleNews = {};
  if (search.from === "news") {
    singleNews = await getSingleNews(search.id);
  } else {
    singleNews = await getSliderSingleNews(search.id);
  }
  return (
    <main className="container">
      {singleNews?.data ? (
        <NewsDetailsPage singleNews={singleNews} />
      ) : (
        <NewsDetailsSkeleton />
      )}
    </main>
  );
}
