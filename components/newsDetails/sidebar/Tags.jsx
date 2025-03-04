export default function Tags() {
  const tags = [
    "Travel",
    "Tech",
    "World",
    "Politics",
    "Sports",
    "Business",
    "Education",
  ];
  return (
    <div className="p-2">
      <p className="text-black text-base font-extrabold">Tags</p>
      <div className="flex flex-wrap mt-2 gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="p-2 rounded-[2px] text-black bg-black/10 font-extrabold text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
