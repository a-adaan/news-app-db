"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

export default function VideoSection({ videosData }) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [formattedTime, setFormattedTime] = useState("0:00");
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995612_pexels-tima-miroshnichenko-6550654%20(360p).mp4",
    "http://192.168.68.118/newsappflutteradminpanel/public/backend/uploads/reels-videos/1705995581_video_inside_a_library%20(360p).mp4",
  ];

  // Set up Intersection Observer to detect when video is in viewport
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the video must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          // console.error("Autoplay failed:", error);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, selectedVideo]);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    setIsMuted(e.target.value === "0");
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Format time in MM:SS or HH:MM:SS format
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";

    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    // Pad seconds with leading zero if needed
    const paddedSeconds = seconds.toString().padStart(2, "0");

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${paddedSeconds}`;
    } else {
      return `${minutes}:${paddedSeconds}`;
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const current = videoRef.current.currentTime;
    setCurrentTime(current);
    setFormattedTime(formatTime(current));
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setFormattedTime(formatTime(newTime));
  };

  return (
    <section className="w-full h-auto">
      {/* Video Container */}
      <div className="w-full lg:h-[590px] bg-white shadow-xl rounded-md p-[28px]">
        <div
          ref={videoContainerRef}
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            src={videos[selectedVideo]}
            className="w-full h-full xl:h-[520px] object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => {
              setDuration(videoRef.current.duration);
              setFormattedTime("0:00");
            }}
            playsInline
          />

          {/* Custom Controls */}
          {showControls && (
            <button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-2xl bg-[#FF8D4D80] px-10 py-6 rounded"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          )}
          {showControls && (
            <div className="absolute bottom-0 left-0 right-0 bg-[#FF8D4D80] p-3 flex items-center justify-between">
              <button onClick={togglePlayPause} className="text-white text-lg">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <span className="text-white text-sm mx-1">{formattedTime}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime || 0}
                onChange={handleSeek}
                className="flex-1 mx-2 h-1"
              />
              <span className="text-white text-sm mx-1">
                {formatTime(duration)}
              </span>
              <button onClick={toggleMute} className="text-white text-xl">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-10 h-1 mx-2 "
              />
              <button onClick={handleFullscreen} className="text-white text-xl">
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Options */}
      <div
        ref={scrollContainerRef}
        className="w-full h-auto my-10 overflow-x-auto custom-scrollbar"
      >
        <div className="flex justify-start items-center gap-5 whitespace-nowrap pb-2">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(index)}
              className={`w-[240px] h-[133px] rounded-md flex-shrink-0 cursor-pointer relative ${
                selectedVideo === index ? "border-3 border-[#F2752EAB]" : ""
              }`}
            >
              <video
                autoPlay={false}
                muted
                src={video}
                className="w-full h-full object-cover rounded-[4px]"
              />

              {/* Non-functional control overlay for thumbnails */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between">
                {/* Center play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="text-white text-xl bg-[#FF8D4D80] px-4 py-2 rounded">
                    <FaPlay />
                  </div>
                </div>

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#FF8D4D80] p-1 flex items-center justify-between text-xs">
                  <div className="text-white">
                    <FaPlay />
                  </div>
                  <div className="h-[3px] bg-white bg-opacity-50 flex-1 mx-1 rounded-full">
                    <div className="h-full w-1/3 bg-white rounded-full"></div>
                  </div>
                  <div className="text-white">
                    <FaVolumeUp />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
