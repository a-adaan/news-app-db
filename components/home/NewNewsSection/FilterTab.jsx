"use client";

export default function FilterTab({ selectedNews, setSelectedNews }) {
  console.log("🚀 ~ FilterTab ~ selectedNews:", selectedNews);
  const filter = ["Travel", "Tech", "World", "Politics", "Sports"];
  return (
    <div className="mb-6">
      <p className="text-xs font-extrabold text-black mb-[6px]">What's New</p>
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between">
        <p className="text-black text-[32px] font-[900]">{selectedNews}</p>
        <div>
          {filter.map((f, i) => (
            <button
              key={i}
              className={`${
                selectedNews.toLowerCase() === f.toLowerCase()
                  ? " text-primary underline underline-offset-2"
                  : " text-black"
              } pr-4 lg:px-4 py-2 text-base font-[650] `}
              onClick={() => setSelectedNews(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
