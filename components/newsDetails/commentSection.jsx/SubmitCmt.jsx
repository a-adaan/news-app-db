"use client";
import { addToast, Button, Textarea } from "@heroui/react";
import { useState } from "react";

export default function SubmitCmt() {
  const [comment, setComment] = useState("");
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
          addToast({
            title: "Success",
            description: "Cmt success",
            color: "success",
          });
          setComment("");
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
        className="bg-black text-white w-[130px] h-[41px] text-base font-extrabold"
      >
        Submit
      </Button>
    </div>
  );
}
