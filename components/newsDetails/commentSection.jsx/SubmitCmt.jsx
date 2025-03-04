"use client";
import { Button, Textarea } from "@heroui/react";

export default function SubmitCmt() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <Textarea
        className="w-full "
        label="Leave a Comment"
        labelPlacement="outside"
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
        className="bg-black text-white w-[130px] h-[41px] text-base font-extrabold"
      >
        Submit
      </Button>
    </div>
  );
}
