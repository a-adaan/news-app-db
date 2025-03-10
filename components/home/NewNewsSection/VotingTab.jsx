"use client";
import { useEffect, useState } from "react";
import { RadioGroup, Radio, addToast, Button } from "@heroui/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { getAllsurvey, submitSurvey } from "@/app/actions/common/survey";

export default function VotingTab() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [survey, setSurvey] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [surveyValue, setSurveyValue] = useState({
    survey_id: "",
    option_id: "",
  });

  useEffect(() => {
    const fetchSurvey = async () => {
      const response = await getAllsurvey();
      // console.log("🚀 ~ fetchSurvey ~ response:", response.data);
      setSurvey(response.data);
    };
    fetchSurvey();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % survey.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + survey.length) % survey.length);
  };

  const handleSurvey = async () => {
    setIsLoading(true);
    // console.log("🚀 ~ vote clicked", surveyValue);
    if (!surveyValue.survey_id || !surveyValue.option_id) {
      addToast({
        title: "Error",
        description: "Please select an option",
        color: "danger",
      });
      setIsLoading(false);
      return;
    }
    try {
      const res = await submitSurvey(surveyValue);
      // console.log("🚀 ~ handleSurvey ~ res:", res.message);
      addToast({
        title: "Success",
        description: res.message,
        color: "success",
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("🚀 ~ handleSurvey ~ error:", error);
    }
    setSurveyValue({
      survey_id: "",
      option_id: "",
    });
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {survey.map((data, index) => (
            <div
              key={data?.id}
              className="flex-shrink-0 flex-grow-0 w-full"
              aria-hidden={index !== currentSlide}
            >
              <RadioGroup
                label={data.question}
                value={surveyValue.option_id}
                onValueChange={(value) =>
                  setSurveyValue({ survey_id: data?.id, option_id: value })
                }
                classNames={{
                  label:
                    "bg-black text-white rounded-t font-extrabold text-sm p-2",
                  wrapper: "px-2",
                }}
              >
                {data.options.map((option) => (
                  <div
                    key={option?.id}
                    className=" w-full p-2 border-b-1 border-dashed border-b-brdr"
                  >
                    <Radio
                      value={option?.id}
                      classNames={{
                        wrapper: "border-2 border-black",
                        label: "text-xs font-[600]",
                      }}
                    >
                      {option.option}
                    </Radio>
                  </div>
                ))}
                <div className="border-b-1 border-dashed border-b-brdr w-full pb-2">
                  <Button
                    isLoading={isLoading}
                    onPress={handleSurvey}
                    className="w-[62px] h-6 m-2 place-content-center bg-[#FB8502] text-white rounded-full text-[10px] font-extrabold"
                  >
                    VOTE
                  </Button>
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
