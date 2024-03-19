import React from "react";
import videoBg from "../VideoBackground/particle-wave.mp4";

const VideoBackground = () => {
  return (
    <div className="videoBackground">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default VideoBackground;
