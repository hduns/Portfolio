import React, { useRef, useEffect, useState } from "react";
import "./LazyVideo.css";

export const LazyVideo = ({ project, src, poster, width = "100%", preload = "none", forceLoad = false, onLoaded }) => {
  const videoRef = useRef(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = () => {
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {}); 
      }
    };

    if (forceLoad) {
      videoElement.load();
      playVideo();
      return;
    }

    if (!isMobileOrTablet) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            } else {
              videoElement.pause();
            }
          });
        },
        { threshold: 0.99 }
      );

      observer.observe(videoElement);
      return () => observer.unobserve(videoElement);
    }
  }, [forceLoad, isMobileOrTablet]);

  const handleClick = () => {
    if (isMobileOrTablet) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className={`video-wrapper-${project}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload={preload}
        poster={poster}
        width={width}
        src={src}
        disablePictureInPicture
        onCanPlay={onLoaded}
        onClick={handleClick}
      />
    </div>
  );
};

export default LazyVideo;
