"use client";
import { Skeleton } from "@heroui/react";

export default function SliderSkeleton() {
  // Create an array to render multiple skeleton items
  const skeletonItems = Array(3).fill(null);

  return (
    <div className="w-full h-[475px] flex relative overflow-hidden">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="w-full overflow-hidden flex-shrink-0 flex-grow-0 lg:w-1/3 h-full lg:px-[1px] relative"
        >
          {/* Image skeleton */}
          <Skeleton className="w-full h-full rounded-none">
            <div className="w-full h-full bg-default-300" />
          </Skeleton>

          {/* Content at the bottom with gradient */}
          <div className="absolute bottom-0 w-full h-auto p-5 bg-gradient-to-t from-black/50 to-transparent">
            <div className="flex mb-2 items-center">
              {/* Category badge skeleton */}
              <Skeleton className="h-5 w-[57px] rounded-[56px]">
                <div className="h-5 w-[57px] rounded-[56px] bg-default-300" />
              </Skeleton>

              {/* Date skeleton */}
              <Skeleton className="h-4 w-24 ml-3 rounded-lg">
                <div className="h-4 w-24 rounded-lg bg-default-200" />
              </Skeleton>
            </div>

            {/* Title skeleton - two lines */}
            <div className="space-y-2 mt-2">
              <Skeleton className="w-full rounded-lg">
                <div className="h-5 w-full rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-5 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
            </div>
          </div>
        </div>
      ))}

      {/* Skeleton for navigation buttons */}
      <Skeleton className="hidden lg:flex absolute top-1/2 left-[10%] -translate-y-full w-11 h-11 rounded-full">
        <div className="w-11 h-11 rounded-full bg-default-300" />
      </Skeleton>
      <Skeleton className="hidden lg:flex absolute top-1/2 right-[10%] -translate-y-full w-11 h-11 rounded-full">
        <div className="w-11 h-11 rounded-full bg-default-300" />
      </Skeleton>

      {/* For small device */}
      <Skeleton className="lg:hidden flex absolute top-1/2 left-5 -translate-y-full w-11 h-11 rounded-full">
        <div className="w-11 h-11 rounded-full bg-default-300" />
      </Skeleton>
      <Skeleton className="lg:hidden flex absolute top-1/2 right-5 -translate-y-full w-11 h-11 rounded-full">
        <div className="w-11 h-11 rounded-full bg-default-300" />
      </Skeleton>
    </div>
  );
}
