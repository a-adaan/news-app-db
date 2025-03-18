import { getCategoryNews, getAllCategories } from "@/app/actions/common";
import AdsPannel from "@/components/home/AdsPannel";
import NewsCard from "@/components/home/NewsCard";

// Force static rendering
export const dynamic = "force-static";
export const revalidate = 30;

// Generate static params for all categories
export async function generateStaticParams() {
  try {
    // Fetch all categories
    const categories = await getAllCategories();

    // Map categories to params format
    return (
      categories?.data?.map((category) => ({
        catId: `id=${category.id}&name=${encodeURIComponent(category.name)}`,
      })) || []
    );
  } catch (error) {
    console.error("Error generating static params for categories:", error);
    return [];
  }
}

export default async function SingleCategoryPage({ params }) {
  const { catId } = await params;
  const searchParams = new URLSearchParams(decodeURIComponent(catId));
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const categories = await getCategoryNews(id);

  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-5 h-auto my-3 lg:my-14">
        <div>
          <p className="text-black text-[32px] font-[900] mb-3">{name}</p>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
            {categories?.data?.data.length > 0 ? (
              categories?.data?.data.map((news) => (
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
