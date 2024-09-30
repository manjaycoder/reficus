import React, { useState, useRef } from 'react';

const VideoHover = ({ videoSrc, posterSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset to the beginning
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        className={`w-full h-auto rounded-lg ease ${isPlaying ? 'block' : 'hidden'}`}
      />
      {!isPlaying && (
        <img
          src={posterSrc}
          alt="Video Thumbnail"
          className="w-full h-[20rem] rounded-lg invisible"
        />
      )}
    </div>
  );
};

export default VideoHover;
