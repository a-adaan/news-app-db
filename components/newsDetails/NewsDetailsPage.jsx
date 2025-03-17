import NewsDetailsSkeleton from "../skeletons/NewsDetailsSkeleton";
import MainInfo from "./MainInfo";
import SideBar from "./sidebar/SideBar";

export default async function NewsDetailsPage({ singleNews }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-3 lg:my-14">
        <MainInfo news={singleNews.data} />
        <SideBar tags={singleNews.data?.news?.tags || []} />
      </div>
    </>
  );
}
