import LoadingWrapper from "@/components/LoaddingWrapper";
import Image from "next/image";

export default function RecentTab({ tabName, data }) {
  const newsData = [
    {
      img: "/news/news01.jpg",
      title: "South Korea's President Yoon banned from foreign travel",
      date: "aug 1,2017",
    },
    {
      img: "/news/news02.jpg",
      title: "AI technology's impact on the future of work",
      date: "sep 2,2017",
    },
    {
      img: "/news/news03.jpg",
      title: "India's Prime Minister Narendra Modi to visit China",
      date: "oct 3,2017",
    },
    {
      img: "/news/news04.jpg",
      title: "Apple announces new iPhones and iPads",
      date: "nov 4,2017",
    },
  ];
  return (
    <div className="p-2">
      <p className="text-base font-extrabold text-black mb-2">{tabName}</p>
      <div>
        <div className="flex flex-col gap-2 p-1">
          {data.map((news) => (
            <div
              key={news?.id}
              className="w-full grid grid-cols-[30%_70%] h-11 gap-2 "
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${news?.featured_image}`}
                alt="news01"
                width={100}
                height={100}
                className="w-full h-11 object-cover rounded"
              />
              <LoadingWrapper link={`/news/${news?.id}`}>
                <p className="text-[10px] font-extrabold text-black hover:text-primary line-clamp-2 overflow-hidden text-pretty">
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
