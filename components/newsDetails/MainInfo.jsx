import { AiFillMessage } from "react-icons/ai";
import { IoCalendar } from "react-icons/io5";
import Image from "next/image";
import ShareBtn from "./ShareBtn";
import CmtSec from "./commentSection.jsx/CmtSec";
import LoadingWrapper from "../LoaddingWrapper";
import LikesBtn from "./LikesBtn";

export default function MainInfo({ news }) {
  return (
    <div>
      <p className="text-black text-[28px] font-[900] leading-[37px]">
        {news?.news?.title || news?.slider?.title}
      </p>
      <LoadingWrapper
        link={`/category/id=${
          news?.news?.category_id || news?.slider?.category_id
        }&name=${news?.news?.category_name || news?.slider?.category_name}`}
        cls="lg:hidden "
      >
        <span className="lg:hidden px-[6px] py-[5px] justify-center rounded-[56px] text-white font-extrabold text-xs bg-[#6E74FF]">
          {news?.news?.category_name || news?.slider?.category_name}
        </span>
      </LoadingWrapper>
      <div className="flex items-center justify-between mt-3 lg:mt-6 ">
        <LoadingWrapper
          link={`/category/id=${
            news?.news?.category_id || news?.slider?.category_id
          }&name=${news?.news?.category_name || news?.slider?.category_name}`}
          cls="hidden lg:block"
        >
          <span className="hidden px-[6px] py-[5px] lg:block justify-center rounded-[56px] text-white font-extrabold text-xs bg-[#6E74FF]">
            {news?.news?.category_name || news?.slider?.category_name}
          </span>
        </LoadingWrapper>
        <span className="flex items-center justify-center gap-1 lg:gap-3">
          <IoCalendar size={18} color="#9D9D9D" />
          <span className="text-xs font-extrabold text-black">
            {news?.news?.updated_at.split(" ")[0] ||
              news?.slider?.updated_at.split(" ")[0]}
          </span>
        </span>
        <span className="flex items-center gap-1 lg:gap-3">
          <AiFillMessage size={20} color="#9D9D9D" />
          <span className="text-xs font-extrabold text-black">
            {news?.comments.length > 0 ? news?.comments.length : 0} Comments
          </span>
        </span>
        <LikesBtn />
      </div>
      <div className="w-full mt-6">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL}${
            news?.news?.featured_image || news?.slider?.featured_image
          }`}
          width={700}
          height={700}
          alt="news"
          className="rounded-md w-full object-cover"
        />
        <div
          className="text-sm font-[650] text-black text-justify mt-6 lg:mt-8"
          dangerouslySetInnerHTML={{
            __html: news?.news?.description || news?.slider?.description,
          }}
        ></div>
        <div className="w-full h-[1px] bg-brdr mt-8 mb-6"></div>
        <ShareBtn url={news?.url} />
      </div>
      <CmtSec cmtData={news?.comments} />
    </div>
  );
}
