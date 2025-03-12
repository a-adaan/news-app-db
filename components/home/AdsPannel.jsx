"use client";
import { getAd } from "@/app/actions/common/pages";
import Image from "next/image";
import LoadingWrapper from "../LoaddingWrapper";
import { useEffect, useState } from "react";

export default function AdsPannel() {
  const [ads, setAds] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAds() {
      try {
        const adsData = await getAd();
        setAds(adsData);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAds();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!ads || !ads.data) {
    return <div className="w-full">No advertisement available</div>;
  }

  return (
    <div className="w-full">
      <LoadingWrapper link={`${ads?.data?.sidebar_ad_link}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL}${ads?.data?.sidebar_ad_img}`}
          width={500}
          height={700}
          alt="ads"
          className="w-full object-cover"
        />
      </LoadingWrapper>
    </div>
  );
}
