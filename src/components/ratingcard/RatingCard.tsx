import { Box, Card } from "@mui/joy";
import { Rating } from "@mui/material";

interface RatingCardProps {
  description: string;
  author: string;
  rating: number;
}

export default function RatingCard(props: RatingCardProps) {
  return (
    <Card
      sx={{ minHeight: "280px", width: 240, border: "none", boxshadow: "none" }}
    >
      <p>{props.description}</p>
      <Box
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Rating name="read-only" value={props.rating} readOnly disabled />
        <p>{props.author}</p>
      </Box>
    </Card>
  );
}
