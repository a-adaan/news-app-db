import RecentTab from "@/components/home/NewNewsSection/RecentTab";
import Categories from "./Categories";
import Search from "./Search";
import Tags from "./Tags";

export default function SideBar() {
  return (
    <div className="w-full max-h-max rounded border border-brdr mt-5 md:mt-0 ">
      <Search />
      <Categories />
      <RecentTab />
      <Tags />
    </div>
  );
}
