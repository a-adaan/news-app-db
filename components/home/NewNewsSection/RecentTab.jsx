import LoadingWrapper from "@/components/LoaddingWrapper";
import Image from "next/image";

export default function RecentTab() {
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
      <p className="text-base font-extrabold text-black mb-2">Most Recent</p>
      <div>
        <div className="flex flex-col gap-2 p-1">
          {newsData.map((news, i) => (
            <div
              key={i}
              className="w-full grid grid-cols-[30%_70%] h-11 gap-2 "
            >
              <Image
                src={news.img}
                alt="news01"
                width={100}
                height={100}
                className="w-full h-11 object-cover rounded"
              />
              <LoadingWrapper link={"/news/333"}>
                <p className="text-[10px] font-extrabold text-black hover:text-primary line-clamp-2 overflow-hidden text-pretty">
                  {news.title}
                </p>
                <p className="text-[9px] font-extrabold text-[#9D9D9D] text-pretty">
                  {news.date}
                </p>
              </LoadingWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
