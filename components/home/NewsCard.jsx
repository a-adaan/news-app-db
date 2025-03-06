import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";

export default function NewsCard({ news }) {
  const { img, title, tag, date } = news;
  const getRandomColor = () => {
    const colors = ["orange", "blue", "gray", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="w-full md:max-w-[220px] lg:max-w-[240px] h-auto bg-transparent">
      <Image
        src={img}
        alt="news01"
        width={700}
        height={700}
        className="w-full h-[157px] object-cover rounded"
      />
      <LoadingWrapper
        link={"/news/12"}
        cls="text-[14px] font-extrabold text-black text-pretty my-[10px] hover:text-primary inline-block"
      >
        {title}
      </LoadingWrapper>
      <div className="flex">
        <LoadingWrapper link={`/category/${tag}`}>
          <span
            className="h-5 w-[57px] flex items-center justify-center  rounded-[56px] text-white font-extrabold text-xs "
            style={{ backgroundColor: getRandomColor() }}
          >
            {tag}
          </span>
        </LoadingWrapper>
        <span className="text-black font-extrabold text-xs ml-3">{date}</span>
      </div>
    </div>
  );
}
