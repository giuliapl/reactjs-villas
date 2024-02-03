import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import "./Home.scss";
import NavBar from "../../components/navBar/NavBar";
import RatingCard from "../../components/ratingCard/RatingCard";
import Carousel from "../../components/carousel/Carousel";
import GradientCover from "../../components/gradientCover/GradientCover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faGift,
  faQuoteLeft,
  faStar,
  faUserGroup,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import TextCard from "../../components/textCard/TextCard";
import Video from "../../components/video/Video";

function Home() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} style={{ padding: "2em" }}>
        <Grid container rowSpacing={8}>
          <Grid item xs={12}>
            <Video />
          </Grid>

          <Grid container item>
            <Grid item xs={12} md={6} sx={{ paddingRight: "4em" }}>
              <h2 style={{ fontWeight: "900" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              {!isExtraSmallSize && (
                <div className="divider__container">
                  <hr className="hr" />
                  <p>VILLAS IN SICILY</p>
                </div>
              )}
            </Grid>
            {isExtraSmallSize ? (
              <Button className="cta-btn">VILLAS N SICILY</Button>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <img
                    style={{ width: "100%" }}
                    src={"/src/assets/images/region.jpg"}
                    alt={"Map of Sicily"}
                  />
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item columnSpacing={4} rowSpacing={2}>
            <Grid item xs={12} md={4}>
              <h2>
                Perché <span className="underlight">scegliere</span>
              </h2>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                <Carousel>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faGem}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="High Quality"
                    description="Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                    key={0}
                  />
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Outstanding service"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                    key={1}
                  />
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Local Team"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                    key={2}
                  />
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faWandMagicSparkles}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Extra Services"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                    key={3}
                  />
                </Carousel>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} md={4}>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faGem}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="High Quality"
                    description="Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Outstanding service"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Local Team"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faWandMagicSparkles}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="Extra Services"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextCard
                    icon={
                      <FontAwesomeIcon
                        icon={faGift}
                        size="lg"
                        style={{ color: "#74C0FC", fontSize: "3em" }}
                      />
                    }
                    title="E-Travel Pack"
                    description=" Many desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy."
                  />
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item>
            <Grid item xs={12}>
              <div style={{ textAlign: "center" }}>
                <h3>
                  Chose your next{" "}
                  <span className="underlight">Destination</span>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                <Carousel>
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily1.jpg"}
                    alt={"North Sicily"}
                    title={"North Sicily"}
                    description={"32 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily2.jpg"}
                    alt={"South Sicily"}
                    title={"South Sicily"}
                    description={"16 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily3.jpg"}
                    alt={"West Sicily"}
                    title={"West Sicily"}
                    description={"22 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily4.jpg"}
                    alt={"East Sicily"}
                    title={"East Sicily"}
                    description={"18 Villas"}
                  />
                </Carousel>
              </Grid>
            ) : (
              <>
                <Grid
                  container
                  item
                  md={12}
                  justifyContent={"center"}
                  gap={"2em"}
                >
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily1.jpg"}
                    alt={"North Sicily"}
                    title={"North Sicily"}
                    description={"32 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily2.jpg"}
                    alt={"South Sicily"}
                    title={"South Sicily"}
                    description={"16 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily3.jpg"}
                    alt={"West Sicily"}
                    title={"West Sicily"}
                    description={"22 Villas"}
                  />
                  <GradientCover
                    imgUrl={"/src/assets/images/sicily4.jpg"}
                    alt={"East Sicily"}
                    title={"East Sicily"}
                    description={"18 Villas"}
                  />
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item>
            <Grid item xs={12} md={4}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                fontSize={"4em"}
                color={"#cccccc"}
              />
              <h2>
                What they say <span className="underlight">about</span>
              </h2>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                <Carousel>
                  <RatingCard
                    author="John White"
                    description="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
                    rating={4}
                    key={0}
                  />
                  <RatingCard
                    author="Mary Green"
                    description="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
                    rating={5}
                    key={1}
                  />
                </Carousel>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} md={4}>
                  <RatingCard
                    author="John White"
                    description="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
                    rating={4}
                    key={0}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <RatingCard
                    author="Mary Green"
                    description="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
                    rating={5}
                    key={1}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
