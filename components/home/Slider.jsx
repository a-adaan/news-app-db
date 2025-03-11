"use client";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import LoadingWrapper from "../LoaddingWrapper";

export default function Slider({ sliderData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const colors = ["orange", "blue", "gray", "green"];

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide > 0 ? currentSlide - 1 : sliderData.length - 3
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide < sliderData.length - 3 ? currentSlide + 1 : 0
    );
    console.log("Slider : ", currentSlide);
  };
  const prevSlideS = () => {
    setCurrentSlide(
      currentSlide > 0 ? currentSlide - 1 : SliderData.length - 1
    );
  };
  const nextSlideS = () => {
    setCurrentSlide(
      currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0
    );
    console.log("Slider : ", currentSlide);
  };
  return (
    <div className="w-full h-[475px] flex relative overflow-hidden">
      {sliderData?.map((slider, i) => (
        <div
          key={i}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="w-full flex-shrink-0 flex-grow-0 lg:w-1/3 h-full lg:px-[1px] relative transition-all duration-300 ease-in-out"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${slider?.image}`}
            alt="slider"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-1/2 place-content-end p-5 bg-gradient-to-t from-black/80 to-black/0">
            <div className="flex mb-2">
              <LoadingWrapper
                link={`/category/id=${slider?.category_id}&name=${slider?.category_name}`}
              >
                <span
                  className="h-5 w-[57px] flex items-center justify-center rounded-[56px] text-white font-extrabold text-xs"
                  style={{ backgroundColor: colors[i % colors.length] }}
                >
                  {slider?.category_name}
                </span>
              </LoadingWrapper>
              <span className="text-white font-extrabold text-xs ml-3">
                {slider?.updated_at.split(" ")[0]}
              </span>
            </div>
            <LoadingWrapper
              link={`/news/${slider?.id}`}
              cls="text-[20px] font-extrabold text-white hover:text-primary text-pretty mt-2"
            >
              {slider?.title}
            </LoadingWrapper>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hidden absolute top-1/2 left-5 lg:left-[10%] -translate-y-full shadow-2xl w-11 h-11 backdrop-blur-lg bg-black/60 hover:bg-black/75 text-white text-3xl lg:flex justify-center items-center rounded-full"
      >
        <GoArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden absolute top-1/2 right-5 lg:right-[10%] -translate-y-full shadow-2xl w-11 h-11 backdrop-blur-lg bg-black/60 hover:bg-black/75 text-white text-3xl lg:flex justify-center items-center rounded-full"
      >
        <GoArrowRight />
      </button>
      {/* For small device */}
      <button
        onClick={prevSlideS}
        className="lg:hidden absolute top-1/2 left-5 lg:left-[10%] -translate-y-full shadow-2xl w-11 h-11 backdrop-blur-lg bg-black/60 hover:bg-black/75 text-white text-3xl flex justify-center items-center rounded-full"
      >
        <GoArrowLeft />
      </button>
      <button
        onClick={nextSlideS}
        className="lg:hidden absolute top-1/2 right-5 lg:right-[10%] -translate-y-full shadow-2xl w-11 h-11 backdrop-blur-lg bg-black/60 hover:bg-black/75 text-white text-3xl flex justify-center items-center rounded-full"
      >
        <GoArrowRight />
      </button>
    </div>
  );
}
