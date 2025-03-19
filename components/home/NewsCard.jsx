import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";

export default function NewsCard({ news }) {
  const { id, featured_image, title, category_name, category_id, created_at } =
    news;

  const getRandomColor = () => {
    return [
      { bg: "bg-orange-500", text: "text-white" },
      { bg: "bg-blue-600", text: "text-white" },
      { bg: "bg-gray-700", text: "text-white" },
      { bg: "bg-green-600", text: "text-white" },
    ][Math.floor(Math.random() * 4)];
  };

  const color = getRandomColor();

  return (
    <div className="w-full md:max-w-[220px] lg:max-w-[240px] xl:max-w-[325px] xl:h-[260px] h-[235px] flex flex-col md:justify-between  justify-start bg-transparent">
      <div className="">
        <div className="overflow-hidden rounded">
          <LoadingWrapper
            link={`/news/news?from=news&id=${id}`}
            aria-label={`Read more about ${title}`}
          >
            <Image
              src={
                featured_image
                  ? `${process.env.NEXT_PUBLIC_IMG_URL}${featured_image}`
                  : "/news/news01.jpg"
              }
              alt={title}
              width={700}
              height={700}
              className="w-full h-[157px] xl:h-[175px] object-cover rounded hover:scale-[1.3] transition-all duration-300 ease-in-out cursor-pointer"
            />
          </LoadingWrapper>
        </div>
        <LoadingWrapper
          link={`/news/news?from=news&id=${id}`}
          cls="max-w-full text-[14px] font-extrabold mt-2 mb-1 text-black text-pretty hover:text-primary line-clamp-2 overflow-hidden"
          aria-label={`Read more about ${title}`}
        >
          {title}
        </LoadingWrapper>
      </div>
      <div className="flex items-center">
        <LoadingWrapper
          link={`/category/id=${category_id}&name=${category_name}`}
        >
          <span
            className={`px-[6px] py-[5px] rounded-full font-extrabold text-xs ${color.bg} ${color.text}`}
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
