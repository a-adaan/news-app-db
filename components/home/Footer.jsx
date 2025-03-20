import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import LoadingWrapper from "../LoaddingWrapper";
import { getWebSetting } from "@/app/actions/common";
import Link from "next/link";
import { getAllPages } from "@/app/actions/common/pages";

export const revalidate = 3600;

export default async function Footer() {
  const footer = await getWebSetting();

  const pageslugs = await getAllPages();

  const pageList = pageslugs?.slice(0, 3).map((page) => ({
    slug: page?.slug,
    name: page?.title,
  }));

  // console.log("🚀 ~ Footer ~ footer:", footer);
  return (
    <>
      <footer className="bg-black text-white mt-[70px] px-3 py-5 lg:h-[340px] md:p-5 lg:py-[80px]">
        {/* Ensuring fixed height to avoid shifts */}

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 text-sm">
          {/* Customer Service - Aligned to start */}
          <div className="lg:justify-self-start">
            <div className="flex items-center gap-[15px] my-7 md:mb-7 md:mt-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${footer?.footer_logo}`}
                alt="App Logo"
                width={150}
                height={150}
                className="w-10 h-10"
              />
              <p className="text-[26px] text-primary font-extrabold">
                {footer?.web_app_name}
              </p>
            </div>
            <p className="text-footerTxt text-base font-medium">
              Customer Support :
            </p>
            <h3 className="font-bold text-base mb-6">
              {" "}
              {footer?.footer_contact}
            </h3>
            <address className="not-italic space-y-0 text-footerTxt text-base font-medium">
              <p>{footer?.footer_address}</p>
            </address>
          </div>

          {/* Top Category - Aligned to center */}
          <div className="lg:justify-self-center">
            <h3 className="font-bold capitalize text-base mb-6">
              Top Category
            </h3>
            <ul className="space-y-3 text-footerTxt text-base font-medium">
              <li>
                <LoadingWrapper link="/recent-news" cls="hover:text-gray-300">
                  Recent News
                </LoadingWrapper>
              </li>
              <li>
                <LoadingWrapper link="/popular-news" cls="hover:text-gray-300">
                  Popular News
                </LoadingWrapper>
              </li>
              <li>
                <LoadingWrapper link="/latest-news" cls="hover:text-gray-300">
                  Latest News
                </LoadingWrapper>
              </li>
            </ul>
          </div>

          {/* Quick Link - Aligned to center */}
          <div className="lg:justify-self-center">
            <h3 className="font-bold text-base capitalize mb-6">Quick Link</h3>
            <ul className="space-y-3 text-footerTxt text-base font-medium">
              <li>
                <LoadingWrapper link="/contact" cls="hover:text-gray-300">
                  Contact Us
                </LoadingWrapper>
              </li>
              {pageList?.map((page) => (
                <li key={page.name}>
                  <LoadingWrapper
                    link={`/pages/${page.slug}`}
                    cls="hover:text-gray-300"
                  >
                    {page.name}
                  </LoadingWrapper>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Our App - Aligned to end */}
          <div className="lg:justify-self-end">
            <h3 className="font-bold text-base mb-6">DOWNLOAD OUR APP</h3>
            <div className="flex flex-col space-y-4">
              <Link
                href={`${footer?.google_play_app_link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[53px] w-[176px] flex items-center justify-center gap-4 rounded-lg bg-[#333333]">
                  <Image
                    src={"/common/google.svg"}
                    alt="Google Play Store Icon"
                    width={176}
                    height={53}
                    className="h-[30px] w-[30px]"
                  />
                  <div>
                    <p className="text-footerTxt text-start text-[11px] font-medium">
                      Get it now
                    </p>
                    <p className="text-white text-start text-sm font-bold">
                      Google Play
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href={`${footer?.app_store_link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[53px] w-[176px] flex items-center justify-center gap-4 rounded-lg bg-[#333333]">
                  <Image
                    src={"/common/app-store.svg"}
                    alt="App Store Icon"
                    width={176}
                    height={53}
                    className="h-[30px] w-[30px]"
                  />
                  <div>
                    <p className="text-footerTxt text-start text-[11px] font-medium">
                      Get it now
                    </p>
                    <p className="text-white text-start text-sm font-bold">
                      App Store
                    </p>
                  </div>
                </div>
              </Link>
              {/* <div className="flex items-center text-2xl gap-[30px] py-3">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaTwitter />
                <IoLogoYoutube />
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#333333] h-[54px] flex">
        <p className="text-sm font-medium text-center text-white m-auto">
          {footer?.copyright}
        </p>
      </footer>
    </>
  );
}
