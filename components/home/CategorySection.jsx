import { getAllCategories } from "@/app/actions/common";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";

export default async function CategorySection() {
  const categories = await getAllCategories();

  const visibleCategories = categories?.slice(0, 8) || [];
  const dropdownCategories = categories?.slice(8) || [];
  const hasMoreCategories = dropdownCategories.length > 0;

  return (
    <section className="hidden lg:block h-auto my-0 border-b border-[#838383] border-dashed">
      <div className="container py-5">
        <ul className="flex items-center justify-between">
          {visibleCategories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/id=${category?.id}&name=${category?.name}`}
                className="text-black text-sm font-semibold hover:text-primary hover:underline hover:underline-offset-4 hover:font-extrabold"
              >
                {category.name}
              </Link>
            </li>
          ))}

          {hasMoreCategories && (
            <li>
              <CategoryDropdown categories={dropdownCategories} />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
