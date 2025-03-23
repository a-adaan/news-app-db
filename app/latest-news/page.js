import { fetchNewsData } from "../actions/common";
import LatestNewsPage from "./LatestNewsPage";

export const revalidate = 30;

export default async function LatestNews() {
  const { categories, allCategoryNews } = await fetchNewsData();

  return (
    <main className="container">
      <LatestNewsPage
        initialCategories={categories}
        initialAllCategoryNews={allCategoryNews}
      />
    </main>
  );
}
