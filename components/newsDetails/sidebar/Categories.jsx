export default function Categories() {
  const categories = ["Travel", "Tech", "World", "Politics", "Sports"];
  return (
    <div className="p-2">
      <p className="text-black text-base font-extrabold">Categories</p>
      <div className="flex flex-col mt-2">
        {categories.map((category, index) => (
          <p
            key={index}
            className="text-black border-y-1 border-y-brdr border-dashed text-xs py-3 px-2 font-semibold"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}
