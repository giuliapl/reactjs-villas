import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faChildren,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { Villa } from "../../models/villas";

interface FavCardProps {
  villa: Villa;
}

export default function FavCard(props: FavCardProps) {
  return (
    <Card variant="outlined" sx={{ width: "40vh" }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ postion: "relative" }}>
          <img src={props.villa.imgUrl} loading="lazy" alt="villa's image" />
        </AspectRatio>
        <Grid
          container
          xs={12}
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            background: "rgba(0, 0, 0, 0.6)",
            padding: "1em",
          }}
        >
          <Grid item xs={6}>
            <Typography level="title-lg" sx={{ color: "white" }}>
              {props.villa.name}
            </Typography>
            <Typography level="title-sm">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white" }}
              />
              <span style={{ color: "white", marginLeft: ".5em" }}>
                {" "}
                {props.villa.location}
              </span>
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton aria-label="Like minimal photography" size="md">
              <StarBorderIcon fontSize={"large"} sx={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          From
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            {props.villa.currency}
            {props.villa.oldPrice}
          </span>
          <span
            style={{
              fontSize: "1.5em",
              fontWeight: "bolder",
              marginLeft: ".5em",
            }}
          >
            {props.villa.currency}
            {props.villa.price}
          </span>
          /per week
        </Typography>
        <Typography level="body-sm">
          <FontAwesomeIcon
            icon={faChildren}
            fontSize={"1.3em"}
            color={"grey"}
            style={{ marginRight: ".5em"}}
          />
          {props.villa.adults + props.villa.kids}
          <FontAwesomeIcon
            icon={faBed}
            style={{
              marginLeft: ".5em",
              marginRight: ".5em",
              fontSize: "1.3em",
              color: "grey",
            }}
          />
          {props.villa.bedrooms}
          <FontAwesomeIcon
            icon={faBath}
            style={{
              marginLeft: ".5em",
              marginRight: ".5em",
              fontSize: "1.3em",
              color: "grey",
            }}
          />
          {props.villa.bathrooms}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            sx={{ textAlign: "center", color: "grey" }}
          >
            {props.villa.tags.join(" / ")}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
