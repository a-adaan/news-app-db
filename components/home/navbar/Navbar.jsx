import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LoadingWrapper from "@/components/LoaddingWrapper";
import { getWebSetting } from "@/app/actions/common";

export const revalidate = 3600;

export default async function Navbar() {
  const webData = await getWebSetting();
  return (
    <nav className=" h-[80px] bg-black ">
      <div className="flex h-full items-center justify-between container">
        <LoadingWrapper link="/" cls="cursor-pointer">
          <div className="flex items-center gap-[15px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}${webData?.header_logo}`}
              alt="App Logo"
              width={150}
              height={150}
              className="w-10 h-10"
            />
            <p className="text-[26px] text-primary font-extrabold">
              {webData?.web_app_name}
            </p>
          </div>
        </LoadingWrapper>
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
}
