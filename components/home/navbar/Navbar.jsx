import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LoadingWrapper from "@/components/LoaddingWrapper";

export default function Navbar() {
  return (
    <nav className=" h-[80px] bg-black ">
      <div className="flex h-full items-center justify-between container">
        <LoadingWrapper link="/" cls="cursor-pointer">
          <div className="flex items-center gap-[15px]">
            <Image
              src={"/common/logo.svg"}
              alt="App Logo"
              width={150}
              height={150}
              className="w-10 h-10"
            />
            <p className="text-[26px] text-primary font-extrabold">News Now</p>
          </div>
        </LoadingWrapper>
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
}
