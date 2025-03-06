import NewsDetailsPage from "@/components/newsDetails/NewsDetailsPage";

export default async function NewsDetails({ params }) {
  const { newsId } = await params;
  return (
    <main className="container">
      <NewsDetailsPage id={newsId} />
    </main>
  );
}
