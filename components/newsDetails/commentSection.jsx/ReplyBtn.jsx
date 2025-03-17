"use client";
import { Button } from "@heroui/react";
import { VscReply } from "react-icons/vsc";

export default function ReplyBtn({ date }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-bold text-[#7A7A7A]">{date}</p>
      {/* <Button
        variant="light"
        className="text-sm font-bold text-[#7A7A7A]"
        endContent={<VscReply size={15} />}
      >
        Reply
      </Button> */}
    </div>
  );
}
