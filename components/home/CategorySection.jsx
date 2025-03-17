import { getAllCategories } from "@/app/actions/common";
import Link from "next/link";

export default async function CategorySection() {
  const categories = await getAllCategories();
  return (
    <section className="h-auto my-0 border-b border-[#838383] border-dashed">
      <ul className="container py-5 flex items-center justify-between text-sm font-[650]">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/category/id=${category?.id}&name=${category?.name}`}
              className="text-black hover:text-primary hover:underline hover:underline-offset-4 hover:font-extrabold"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
