import { getCategoryNews } from "@/app/actions/common";
import AdsPannel from "@/components/home/AdsPannel";

export default async function SingleCategoryPage({ params }) {
  const { catId } = await params;
  const categories = await getCategoryNews(catId);
  console.log("🚀 ~ SingleCategoryPage ~ categories:", categories);

  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-14">
        <div>
          <p className="text-black text-[32px] font-[900]">{catId}</p>
        </div>
        <AdsPannel />
      </div>
    </main>
  );
}
