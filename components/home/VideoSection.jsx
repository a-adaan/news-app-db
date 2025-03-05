"use client";

import { useState } from "react";

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995612_pexels-tima-miroshnichenko-6550654%20(360p).mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995581_video_inside_a_library%20(360p).mp4",
  ];
  return (
    <section className="w-full h-auto">
      {/* video div */}
      <div className="w-full lg:h-[590px] bg-white shadow-xl rounded-md p-[28px]">
        {/* video container */}
        <div className="bg-red-500 h-full w-full">
          <video
            autoPlay
            muted
            loop
            src={videos[selectedVideo]}
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* video options */}
      <div className="w-full h-auto mt-5 overflow-x-auto scrollbar-hide lg:overflow-hidden">
        <div className="flex justify-start items-center gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(index)}
              className={`w-[240px] h-[133px] rounded-sm flex-shrink-0 ${
                selectedVideo === index ? "border-2 border-black" : ""
              }`}
            >
              <video
                autoPlay={false}
                muted
                src={video}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
