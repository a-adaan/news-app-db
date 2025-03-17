"use client";
import { submitNewsCmt, submitSliderCmt } from "@/app/actions/common";
import { addToast, Button, Textarea } from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SubmitCmt() {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const search = useSearchParams();
  const router = useRouter();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCmt = async () => {
    if (typeof window !== "undefined") {
      const user = window.localStorage.getItem("userId");
      if (user) {
        if (comment === "") {
          addToast({
            title: "Warning",
            description: "Comment box is empty.",
            color: "warning",
          });
        } else {
          setIsSubmitting(true);
          try {
            let response;
            if (search.get("from") === "news") {
              const cmtQuery = {
                news_id: search.get("id"),
                user_id: user,
                comment: comment,
              };
              response = await submitNewsCmt(cmtQuery);
            } else {
              const cmtQuery = {
                slider_id: search.get("id"),
                user_id: user,
                comment: comment,
              };
              response = await submitSliderCmt(cmtQuery);
            }

            if (response && response.status === "success") {
              addToast({
                title: "Success",
                description: "Comment submitted successfully",
                color: "success",
              });
              setComment("");

              // Revalidate the page to show the new comment
              router.refresh();
            } else {
              addToast({
                title: "Error",
                description: response?.message || "Failed to submit comment",
                color: "danger",
              });
            }
          } catch (error) {
            console.error("Error submitting comment:", error);
            addToast({
              title: "Error",
              description: "Something went wrong while submitting your comment",
              color: "danger",
            });
          } finally {
            setIsSubmitting(false);
          }
        }
      } else {
        addToast({
          title: "Error",
          description: "You must be logged in",
          color: "danger",
        });
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <Textarea
        className="w-full "
        label="Leave a Comment"
        labelPlacement="outside"
        value={comment}
        onValueChange={(v) => setComment(v)}
        placeholder="Write a comment"
        variant="bordered"
        classNames={{
          label: "text-black text-base font-[900] mb-2",
          inputWrapper: "rounded-md",
        }}
      />
      <Button
        radius="sm"
        color="default"
        onPress={handleCmt}
        isLoading={isSubmitting}
        className="bg-black text-white w-[130px] h-[41px] text-base font-extrabold"
      >
        Submit
      </Button>
    </div>
  );
}
