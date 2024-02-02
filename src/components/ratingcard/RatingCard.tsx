import { Box, Card } from "@mui/joy";
import { Rating } from "@mui/material";

export default function RatingCard() {
  return (
    <Card sx={{ minHeight: '280px', width: 240 }}>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="read-only"
        value={3}
        readOnly disabled />
        <p>Luke Skywalker</p>
      </Box>
    </Card>
  );
}