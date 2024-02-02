import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";

interface CarouselProps {
  children: React.ReactElement[]
}
function Carousel(props : CarouselProps) {
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");
  const cardsPerPage = 1;

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => (prevPage + 1) % cards.length);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => Math.abs((prevPage - 1) % cards.length));
  };

  useEffect(() => {
    setCards(props.children);
  }, []);
  const containerWidth = cardsPerPage * 250;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 5 }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
        {cards.map((_, index) => (
         currentPage === index && <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
              >
                {cards[currentPage]}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
        }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;
