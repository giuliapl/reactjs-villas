import {
  faArrowDownLong,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import './Video.scss';

export default function Video() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "inherit",
        width: "100%",
        alignItems: "end"
      }}
    >
      <video style={{ position: "relative" }}>
        <source src={"/src/assets/videos/video.mp4"} type="video/mp4" />
      </video>

      <FontAwesomeIcon
        icon={faCirclePlay}
        className="icon-player"
      />
      <FontAwesomeIcon
        icon={faArrowDownLong}
        className="icon-arrow"
      />
    </Box>
  );
}
