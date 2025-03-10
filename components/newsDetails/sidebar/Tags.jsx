export default function Tags({ tags }) {
  // console.log("🚀 ~ Tags ~ tags:", tags);
  const parsedTags = typeof tags === "string" ? JSON.parse(tags) : tags;

  // console.log("🚀 ~ Tags ~ tags:", parsedTags);

  return (
    <div className="p-2">
      <p className="text-black text-base font-extrabold">Tags</p>
      <div className="flex flex-wrap mt-2 gap-2">
        {parsedTags.map((tag) => (
          <span
            key={tag}
            className="p-2 rounded-[2px] text-black bg-black/10 font-extrabold text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
