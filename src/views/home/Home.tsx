import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import "./Home.scss";
import NavBar from "../../components/navbar/NavBar";
import RatingCard from "../../components/ratingcard/RatingCard";
import Carousel from "../../components/carousel/Carousel";
import GradientCover from "../../components/gradientcover/GradientCover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const imgUrl = "https://placehold.co/400x200";
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} style={{ padding: "2em" }}>
        <Grid container rowSpacing={8}>
          <Grid item xs={12}>
            <img style={{ width: "100%" }} src={imgUrl} />
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
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <div className="divider__container">
                <hr className="hr" />
                <p>VILLAS IN SICILY</p>
              </div>
            </Grid>
            {isExtraSmallSize ? (
              <Button>VILLAS</Button>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <img style={{ width: "100%" }} src={imgUrl} />
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item rowSpacing={12}>
            <Grid item xs={12} md={4}>
              <h2>
                Perché <span className="underlight">scegliere</span>
              </h2>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                <Carousel>
                  <GradientCover name="pippo" key={0} />
                  <GradientCover name="pluto" key={1} />
                  <GradientCover name="paperino" key={2} />
                  <GradientCover name="paperoga" key={3} />
                </Carousel>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} md={4}>
                  <FontAwesomeIcon
                    icon={faGem}
                    size="lg"
                    style={{ color: "#74C0FC", fontSize: "3em" }}
                  />
                  <h4>High Quality</h4>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <AdbIcon />
                  <h4>Pk scegliere...</h4>
                  <p>PK SCEGLIERE 3</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <AdbIcon />
                  <h4>Pk scegliere...</h4>
                  <p>PK SCEGLIERE 4</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <AdbIcon />
                  <h4>Pk scegliere...</h4>
                  <p>PK SCEGLIERE 5</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <AdbIcon />
                  <h4>Pk scegliere...</h4>
                  <p>PK SCEGLIERE 6</p>
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item>
            <Grid item xs={12}>
              <div style={{ textAlign: "center" }}>
                <h3>TITLE NEXT DEST</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                {/* <Carousel /> */}
              </Grid>
            ) : (
              <>
                <Grid container item md={12} justifyContent={"center"} gap={"2em"}>
                  {/* <GradientCover />
                  <GradientCover />
                  <GradientCover />
                  <GradientCover /> */}
                </Grid>
              </>
            )}
          </Grid>

          <Grid container item>
            <Grid item xs={12} md={4}>
              <AdbIcon />
              <h3>What they say about</h3>
            </Grid>
            {isExtraSmallSize ? (
              <Grid item xs={12}>
                {/* <Carousel /> */}
              </Grid>
            ) : (
              <>
                <Grid item xs={12} md={4}>
                  <RatingCard />
                </Grid>
                <Grid item xs={12} md={4}>
                  <RatingCard />
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
