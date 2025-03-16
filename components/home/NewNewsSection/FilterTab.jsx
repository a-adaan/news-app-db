"use client";

export default function FilterTab({
  selectedNews,
  setSelectedNews,
  filterOptions,
}) {
  // console.log("🚀 ~ FilterTab ~ selectedNews:", selectedNews);
  return (
    <div className="mb-6">
      <p className="text-xs font-extrabold text-black mb-[6px]">What's New</p>
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between">
        <p className="text-black text-[28px] lg:text-[32px] font-[900]">
          {selectedNews?.name}
        </p>
        <div>
          {filterOptions.map((f) => (
            <button
              key={f?.id}
              className={`${
                Number(selectedNews?.id) === Number(f?.id)
                  ? " text-primary underline underline-offset-2 font-extrabold"
                  : " text-black font-semibold"
              } pr-4 lg:px-4 py-2 text-base bg-transparent `}
              onClick={() => setSelectedNews(f)}
            >
              {f?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
