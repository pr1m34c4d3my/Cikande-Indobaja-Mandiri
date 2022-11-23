import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import introVideo from "../assets/intro.mp4";

function VideoPlayer() {
  return (
    <div className="w-[1080px]">
      <Video loop>
        <source src={introVideo} type="video/webm" />
      </Video>
    </div>
  );
}

export default VideoPlayer;
