"use client";
import { useState, useRef, useEffect } from "react";

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const scrollContainerRef = useRef(null);

  const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995612_pexels-tima-miroshnichenko-6550654%20(360p).mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995581_video_inside_a_library%20(360p).mp4",
  ];

  // Handle horizontal scrolling with mouse wheel
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section className="w-full h-auto">
      {/* video div */}
      <div className="w-full lg:h-[590px] bg-white shadow-xl rounded-md p-[28px]">
        {/* video container */}
        <div className=" h-full w-full">
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
      <div
        ref={scrollContainerRef}
        className="w-full h-auto my-10 overflow-x-auto custom-scrollbar"
      >
        <div className="flex justify-start items-center gap-5 whitespace-nowrap pb-2">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(index)}
              className={`w-[240px] h-[133px] rounded-md flex-shrink-0 ${
                selectedVideo === index ? "border-3 border-[#F2752EAB]" : ""
              }`}
            >
              <video
                autoPlay={false}
                muted
                src={video}
                className="w-full h-full object-cover rounded-[3px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
