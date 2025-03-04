import AdsPannel from "@/components/home/AdsPannel";
import LoadingWrapper from "@/components/LoaddingWrapper";
import Image from "next/image";

export default function CategoryPage() {
  const categoryData = [
    {
      img: "/category/cat01.jpg",
      name: "Travel",
    },
    {
      img: "/category/cat02.jpg",
      name: "Tech",
    },
    {
      img: "/category/cat03.jpg",
      name: "World",
    },
    {
      img: "/category/cat04.jpg",
      name: "Business",
    },
    {
      img: "/category/cat05.jpg",
      name: "Sports",
    },
    {
      img: "/category/cat06.jpg",
      name: "health",
    },
    {
      img: "/category/cat07.jpg",
      name: "Flim",
    },
  ];
  return (
    <main className="container">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] lg:grid-cols-[75%_1fr] lg:gap-8 gap-3 h-auto my-14">
        <div>
          <p className="text-black text-[32px] font-[900] mb-6">Category</p>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-x-2 gap-y-3 xl:gap-x-5 xl:gap-y-6">
            {categoryData.map((category, i) => (
              <LoadingWrapper
                key={i}
                link={`/category/${category.name}`}
                cls="cursor-pointer"
              >
                <div className="w-full md:max-w-[220px] lg:max-w-[240px] h-auto bg-transparent">
                  <Image
                    src={category.img}
                    width={500}
                    height={500}
                    alt="category"
                    objectFit="cover"
                    className="w-[340px] md:w-[220px] lg:w-[240px] h-[157px] rounded"
                  />
                  <p className="text-black text-[20px] font-[900]">
                    {category.name}
                  </p>
                </div>
              </LoadingWrapper>
            ))}
          </div>
        </div>
        <AdsPannel />
      </div>
    </main>
  );
}
