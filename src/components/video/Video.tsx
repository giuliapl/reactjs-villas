import {
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Video.scss';
import { useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="video-container">
      <video onClick={handleTogglePlay} ref={videoRef} style={{ position: "relative" }}>
        <source src={"/src/assets/videos/video.mp4"} type="video/mp4" />
      </video>
      {!isPlaying && <FontAwesomeIcon
        onClick={handleTogglePlay}
        icon={faCirclePlay}
        className="icon-player"
      />}
    </div>
  );
}
