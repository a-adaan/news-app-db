import { getAllCategories } from "@/app/actions/common";
import LoadingWrapper from "@/components/LoaddingWrapper";

export default async function Categories() {
  const categories = await getAllCategories();
  // const categories = ["Travel", "Tech", "World", "Politics", "Sports"];
  return (
    <div className="p-2">
      <p className="text-black text-base font-extrabold">Categories</p>
      <div className="flex flex-col mt-2">
        {categories.map((category) => (
          <LoadingWrapper
            key={category?.id}
            link={`/category/id=${category?.id}&name=${category?.name}`}
            cls="text-black hover:text-primary border-y-1 border-y-brdr border-dashed text-xs py-3 px-2 font-semibold"
          >
            {category?.name}
          </LoadingWrapper>
        ))}
      </div>
    </div>
  );
}
