import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export default function Footer() {
  return (
    <>
      <footer className=" bg-black text-white mt-[70px] px-3 py-5 md:p-4 lg:py-[80px]">
        {/* Ensuring fixed height to avoid shifts */}

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {/* Customer Service */}
          <div>
            <div className="flex items-center gap-[15px] my-7 md:mb-7 md:mt-0">
              <Image
                src={"/common/logo.svg"}
                alt="App Logo"
                width={150}
                height={150}
                className="w-10 h-10"
              />
              <p className="text-[26px] text-primary font-extrabold">
                News Now
              </p>
            </div>
            <p>Customer Support :</p>
            <h3 className="font-bold text-base mb-6"> (629) 555-0129</h3>
            <address className="not-italic space-y-0 text-footerTxt text-base">
              <p>
                4517 Washington Ave. Manchester,
                <br /> Kentucky 39495
              </p>
              <p>info@newsnow.com</p>
            </address>
          </div>

          {/* Top Category */}
          <div>
            <h3 className="font-bold capitalize text-base mb-6">
              Top Category
            </h3>
            <ul className="space-y-3 text-footerTxt text-base">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Recent News
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Other News
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-base capitalize mb-6">Quick links</h3>
            <ul className="space-y-3 text-footerTxt text-base">
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Our App */}
          <div>
            <h3 className="font-bold text-base mb-6">DOWNLOAD OUR APP</h3>
            <div className="flex flex-col space-y-4">
              <div className="h-[53px] w-[176px] flex items-center justify-center gap-4 rounded-lg bg-[#333333]">
                <Image
                  src={"/common/google.svg"}
                  alt="Google Play Store Icon"
                  width={176}
                  height={53}
                  className="h-[30px] w-[30px]"
                />
                <div>
                  <p className="text-footerTxt text-start text-[11px]">
                    Get it now
                  </p>
                  <p className="text-white text-start text-sm">Google Play</p>
                </div>
              </div>
              <div className="h-[53px] w-[176px] flex items-center justify-center gap-4 rounded-lg bg-[#333333]">
                <Image
                  src={"/common/app-store.svg"}
                  alt="App Store Icon"
                  width={176}
                  height={53}
                  className="h-[30px] w-[30px]"
                />
                <div>
                  <p className="text-footerTxt text-start text-[11px]">
                    Get it now
                  </p>
                  <p className="text-white text-start text-sm">App Store</p>
                </div>
              </div>
              <div className="flex items-center text-2xl gap-[30px] py-3">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaTwitter />
                <IoLogoYoutube />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#333333] h-[54px] flex">
        <p className="text-xs text-center text-white m-auto">
          newsnow &copy; 2024. Design by D-bug Station Limited
        </p>
      </footer>
    </>
  );
}
