"use client";
import { useState } from "react";
import { RadioGroup, Radio } from "@heroui/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function VotingTab() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const votedata = [
    {
      question: "What is your favourite food?",
      options: ["Pizza", "Burger", "Ice cream", "Chicken"],
    },
    {
      question: "What is your favourite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      question: "What is your favourite city?",
      options: ["Buenos Aires", "San Francisco", "London", "Tokyo"],
    },
    {
      question: "What is your favourite country?",
      options: ["USA", "Canada", "UK", "Japan"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % votedata.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + votedata.length) % votedata.length);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {votedata.map((data, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 w-full"
              aria-hidden={index !== currentSlide}
            >
              <RadioGroup
                label={data.question}
                classNames={{
                  label:
                    "bg-black text-white rounded-t font-extrabold text-sm p-2",
                  wrapper: "px-2",
                }}
              >
                {data.options.map((option) => (
                  <div
                    key={option}
                    className=" w-full p-2 border-b-1 border-dashed border-b-brdr"
                  >
                    <Radio
                      value={option}
                      classNames={{
                        wrapper: "border-2 border-black",
                        label: "text-xs font-[600]",
                      }}
                    >
                      {option}
                    </Radio>
                  </div>
                ))}
                <div className="border-b-1 border-dashed border-b-brdr w-full pb-2">
                  <button
                    onClick={() => console.log("🚀 ~ vote clicked")}
                    className="w-[62px] h-6 m-2 place-content-center bg-[#FB8502] text-white rounded-full text-[10px] font-extrabold"
                  >
                    VOTE
                  </button>
                </div>
              </RadioGroup>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-4">
        <button
          onClick={prevSlide}
          className="lg:w-5 lg:h-5 w-11 h-11 bg-black/25 text-white lg:text-xs text-xl flex justify-center items-center rounded-full"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="lg:w-5 lg:h-5 w-11 h-11 bg-black/25 text-white lg:text-xs text-xl flex justify-center items-center rounded-full"
        >
          <GoArrowRight />
        </button>
      </div>
    </>
  );
}
