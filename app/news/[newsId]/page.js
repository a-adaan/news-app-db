import { getSingleNews } from "@/app/actions/common";
import NewsDetailsPage from "@/components/newsDetails/NewsDetailsPage";
import NewsDetailsSkeleton from "@/components/skeletons/NewsDetailsSkeleton";

export default async function NewsDetails({ params }) {
  const { newsId } = await params;
  const singleNews = await getSingleNews(newsId);
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
