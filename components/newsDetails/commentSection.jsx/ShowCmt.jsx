import Image from "next/image";
import ReplyBtn from "./ReplyBtn";

export default function ShowCmt({ cmt }) {
  // console.log("🚀 ~ ShowCmt ~ cmt:", cmt);
  const img = cmt?.user?.profile_image
    ? `${process.env.NEXT_PUBLIC_IMG_URL}${cmt?.user?.profile_image}`
    : "/common/avater.jpeg";

  return (
    <div className="flex gap-5 items-start ">
      <Image
        src={img}
        width={400}
        height={400}
        objectFit="cover"
        alt="avater"
        className="w-[53px] h-[53px] rounded-full"
      />
      <div className="relative bg-white border border-brdr w-full max-h-max rounded-md p-4">
        <div className="left-0 absolute top-[10px] transform -translate-x-1/2 translate-y-1/2 rotate-[135deg] w-5 h-5 bg-white border-r border-b border-brdr"></div>
        <p className="text-black text-base font-[900]">{cmt?.user?.name}</p>
        <p className="text-black text-sm font-medium">{cmt?.comment}</p>
        <ReplyBtn />
      </div>
    </div>
  );
}
