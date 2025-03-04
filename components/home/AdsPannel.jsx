import Image from "next/image";

export default function AdsPannel() {
  return (
    <div className="w-full">
      <Image
        src={"/common/ads.png"}
        width={500}
        height={700}
        alt="ads"
        objectFit="cover"
        className="w-full"
      />
    </div>
  );
}
