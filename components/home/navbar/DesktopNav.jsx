import PageDropDown from "./PageDropDown";
import LoadingWrapper from "@/components/LoaddingWrapper";
import LogInOutBtn from "./LogInOutBtn";
import SearchPop from "./SearchPop";

export default function DesktopNav() {
  return (
    <ul className="hidden lg:flex items-center gap-6 text-white text-sm">
      <li className="cursor-pointer ">
        <LoadingWrapper link="/" cls="text-white text-sm">
          Home
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer">
        <LoadingWrapper link="/latest-news" cls="text-white text-sm">
          Latest News
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer">
        <LoadingWrapper link="/category" cls="text-white text-sm">
          Category
        </LoadingWrapper>
      </li>
      <li className="cursor-pointer">
        <PageDropDown />
      </li>
      <li className="cursor-pointer">
        <LogInOutBtn />
      </li>
      <li className="cursor-pointer">
        <SearchPop />
      </li>
    </ul>
  );
}
