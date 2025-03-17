import LoadingWrapper from "@/components/LoaddingWrapper";
import Image from "next/image";

export default function RecentTab({ tabName, data }) {
  return (
    <div className="p-2">
      <p className="text-base font-extrabold text-black mb-2">{tabName}</p>
      <div>
        <div className="flex flex-col gap-2 xl:gap-4 p-1">
          {data &&
            data.map((news) => (
              <div
                key={news?.id}
                className="w-full grid grid-cols-[30%_70%] h-11 xl:h-14 gap-2 "
              >
                <LoadingWrapper link={`/news/news?from=news&id=${news?.id}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${news?.featured_image}`}
                    alt="news01"
                    width={100}
                    height={100}
                    className="w-full h-11 xl:h-14 object-cover rounded hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer"
                  />
                </LoadingWrapper>
                <LoadingWrapper link={`/news/news?from=news&id=${news?.id}`}>
                  <p className="text-[12px] font-extrabold text-black hover:text-primary line-clamp-2 overflow-hidden text-pretty">
                    {news?.title}
                  </p>
                  <p className="text-[9px] font-extrabold text-[#9D9D9D] text-pretty">
                    {news?.updated_at.split(" ")[0]}
                  </p>
                </LoadingWrapper>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
