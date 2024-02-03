import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

interface GradientCoverProps {
  imgUrl: string;
  title?: string;
  description?: string;
  alt?: string;
}
export default function GradientCover(props: GradientCoverProps) {
  return (
    <Card
      sx={{
        minHeight: "320px",
        width: 180,
        "&:hover": {
          cursor: "pointer",
          transition: "transform .2s",
          transform: "scale(1.07)"
        },
      }}
    >
      <CardCover>
        <img src={props.imgUrl} loading="lazy" alt={props.alt} />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          {props.title}
        </Typography>
        <Typography textColor="neutral.300">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}
