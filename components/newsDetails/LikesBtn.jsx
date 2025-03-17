"use client";
import {
  incrementSliderLikes,
  getSingleNews,
  getSliderSingleNews,
  incrementNewsLikes,
} from "@/app/actions/common";
import { useSearchParams } from "next/navigation";
import { BiSolidLike } from "react-icons/bi";
import { useState, useEffect } from "react";
import { addToast } from "@heroui/react";

export default function LikesBtn() {
  const search = useSearchParams();
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchLikes() {
      try {
        if (search.get("from") === "news") {
          const singleNews = await getSingleNews(search.get("id"));
          //   console.log("likes", singleNews?.data?.slider?.favorite_count);
          if (singleNews?.data?.slider?.favorite_count) {
            setLikes(singleNews.data.slider.favorite_count);
          }
        } else {
          const singleNews = await getSliderSingleNews(search.get("id"));
          //   console.log("likes", singleNews?.data?.slider?.favorite_count);
          if (singleNews?.data?.slider?.favorite_count) {
            setLikes(singleNews.data.slider.favorite_count);
          }
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    }

    fetchLikes();
  }, [likes]);

  async function handleLikes() {
    if (search.get("from") === "news") {
      const response = await incrementNewsLikes(search.get("id"));
      if (response.status === "success") {
        addToast({
          title: "Success",
          description: "Likes updated",
          timeout: 1000,
          color: "success",
        });
        setLikes((prev) => prev + 1);
      } else {
        console.error("Error updating likes", response);
      }
    } else {
      const response = await incrementSliderLikes(search.get("id"));
      if (response.status === "success") {
        addToast({
          title: "Success",
          description: "Likes updated",
          timeout: 1000,
          color: "success",
        });
        setLikes((prev) => prev + 1);
      } else {
        console.error("Error updating likes", response);
      }
    }
  }

  return (
    <span
      className="flex items-center gap-1 lg:gap-3 cursor-pointer"
      onClick={handleLikes}
    >
      <BiSolidLike size={20} className="hover:text-primary text-[#9D9D9D]" />
      <span className="text-xs font-extrabold text-black hover:text-primary">
        {likes} Likes
      </span>
    </span>
  );
}
