import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";

export default function NewsCard({ news }) {
  const { id, featured_image, title, category_name, category_id, created_at } =
    news;
  const getRandomColor = () => {
    const colors = ["orange", "blue", "gray", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="w-full md:max-w-[220px] lg:max-w-[240px] h-[235px] flex flex-col md:justify-between  justify-start bg-transparent">
      <div className="">
        <Image
          src={
            `${process.env.NEXT_PUBLIC_IMG_URL}${featured_image}` ||
            "/news/news01.jpg"
          }
          alt="news01"
          width={700}
          height={700}
          className="w-full h-[157px] object-cover rounded"
        />
        <LoadingWrapper
          link={`/news/${id}`}
          cls="max-w-[320px] md:max-w-[220px] text-[14px] font-extrabold mt-2 mb-1 text-black text-pretty hover:text-primary line-clamp-2 overflow-hidden"
        >
          {title}
        </LoadingWrapper>
      </div>
      <div className="flex items-center">
        <LoadingWrapper
          link={`/category/id=${category_id}&name=${category_name}`}
        >
          <span
            className="h-5 w-[57px] flex items-center justify-center  rounded-[56px] text-white font-extrabold text-xs "
            style={{ backgroundColor: getRandomColor() }}
          >
            {category_name}
          </span>
        </LoadingWrapper>
        <span className="text-black font-extrabold text-xs ml-3">
          {created_at.split(" ")[0]}
        </span>
      </div>
    </div>
  );
}
