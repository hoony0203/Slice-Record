import React from "react";
import ReactPlayer from "react-player/youtube";
import { usePlayerStore } from "../../../store/playerStore";
const VideoPlay = () => {
  const { playVideoId } = usePlayerStore();

  return (
    <div className="video-container">
      <ReactPlayer
        onClick={() => {
          console.log(playVideoId);
        }}
        className="react-player"
        url={`https://www.youtube.com/embed/${playVideoId}?rel=0`}
        width="80rem"
        height="39rem"
        muted={false}
        playing={false}
        loop={true}
        controls
        config={{
          youtube: {
            playerVars: { modestbranding: 1 },
          },
        }}
        pip={true}
      />
    </div>
  );
};

export default VideoPlay;
