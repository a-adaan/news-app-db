import Image from "next/image";
import ReplyBtn from "./ReplyBtn";

export default function ShowCmt() {
  return (
    <div className="flex gap-5 items-start ">
      <Image
        src={"/common/avater.jpeg"}
        width={400}
        height={400}
        objectFit="cover"
        alt="avater"
        className="w-[53px] h-[53px] rounded-full"
      />
      <div className="relative bg-white border border-brdr w-full max-h-max rounded-md p-4">
        <div className="left-0 absolute top-[10px] transform -translate-x-1/2 translate-y-1/2 rotate-[135deg] w-5 h-5 bg-white border-r border-b border-brdr"></div>
        <p className="text-black text-base font-[900]">Jahid Khan</p>
        <p className="text-black text-sm font-medium">
          His testimony was recorded by the International Crime Tribunal's
          investigation{" "}
        </p>
        <ReplyBtn />
      </div>
    </div>
  );
}
