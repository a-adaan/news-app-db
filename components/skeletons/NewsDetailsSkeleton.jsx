"use client";
import { Skeleton } from "@heroui/react";

export default function NewsDetailsSkeleton() {
  return (
    <div className="w-full h-full my-5 flex flex-col justify-start bg-transparent">
      <Skeleton className="rounded-lg">
        <div className="h-6 rounded-lg bg-default-300" />
      </Skeleton>
      <Skeleton className="w-full h-[300px] mt-5 rounded-lg">
        <div className=" w-full rounded-lg bg-default-200" />
      </Skeleton>
      <div className="mt-5 space-y-5">
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </div>
  );
}
