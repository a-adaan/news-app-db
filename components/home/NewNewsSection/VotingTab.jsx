"use client";
import { useEffect, useState } from "react";
import { RadioGroup, Radio, addToast, Button } from "@heroui/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { getAllsurvey, submitSurvey } from "@/app/actions/common/survey";
import { motion, AnimatePresence } from "framer-motion";

export default function VotingTab() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [survey, setSurvey] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState(0);

  const [surveyValue, setSurveyValue] = useState({
    survey_id: "",
    option_id: "",
  });

  useEffect(() => {
    const fetchSurvey = async () => {
      const response = await getAllsurvey();
      setSurvey(response.data);
    };
    fetchSurvey();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % survey.length);
    // Reset survey value when changing slides
    setSurveyValue({
      survey_id: "",
      option_id: "",
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + survey.length) % survey.length);
    // Reset survey value when changing slides
    setSurveyValue({
      survey_id: "",
      option_id: "",
    });
  };

  const handleSurvey = async () => {
    setIsLoading(true);
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

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Only render the current slide instead of all slides
  const currentSurvey = survey[currentSlide];

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {currentSurvey && (
              <div className="w-full">
                <RadioGroup
                  label={currentSurvey.question}
                  value={surveyValue.option_id}
                  onValueChange={(value) =>
                    setSurveyValue({
                      survey_id: currentSurvey?.id,
                      option_id: value,
                    })
                  }
                  classNames={{
                    label:
                      "bg-black text-white rounded-t font-extrabold text-sm p-2",
                    wrapper: "px-2",
                  }}
                >
                  {currentSurvey.options.map((option) => (
                    <div
                      key={option?.id}
                      className="w-full p-2 border-b-1 border-dashed border-b-brdr"
                    >
                      <Radio
                        value={option?.id}
                        classNames={{
                          wrapper: "border-2 border-black w-4 h-4",
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
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8 mt-4">
        <motion.button
          aria-label="left-btn"
          onClick={prevSlide}
          className="lg:w-5 lg:h-5 w-11 h-11 bg-black/25 text-white lg:text-xs text-xl flex justify-center items-center rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GoArrowLeft />
        </motion.button>
        <motion.button
          aria-label="right-btn"
          onClick={nextSlide}
          className="lg:w-5 lg:h-5 w-11 h-11 bg-black/25 text-white lg:text-xs text-xl flex justify-center items-center rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GoArrowRight />
        </motion.button>
      </div>
    </>
  );
}
