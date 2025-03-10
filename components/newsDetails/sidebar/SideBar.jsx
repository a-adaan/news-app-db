import RecentTab from "@/components/home/NewNewsSection/RecentTab";
import Categories from "./Categories";
import Search from "./Search";
import Tags from "./Tags";
import { getRecentNews } from "@/app/actions/common";

export default async function SideBar({ tags }) {
  const recent = await getRecentNews();
  return (
    <div className="w-full max-h-max rounded border border-brdr mt-5 md:mt-0 ">
      <Search />
      <Categories />
      <RecentTab
        tabName={"Releted News"}
        data={recent?.data.slice(0, 3) || []}
      />
      <Tags tags={tags} />
    </div>
  );
}
