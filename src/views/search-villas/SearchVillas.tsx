import { Box, Grid } from "@mui/material";
import "./SearchVillas.scss";
import SideBar from "../../components/sidebar/SideBar";
import FavCard from "../../components/favCard/FavCard";
import { Dayjs } from "dayjs";

export default function SearchVillas() {
  const items = ["item1", "item2", "item3", "item4"];
  const handleFilterApply = (
    ideas: string[],
    experiences: string[],
    location: string,
    airport: string,
    dateFrom: Dayjs | null,
    dateTo: Dayjs | null,
    adults: number,
    kids: number,
    infants: number,
    bedrooms: string,
    priceRange: number[]
  ) => {
    console.group(
      "par",
      ideas,
      experiences,
      location,
      airport,
      dateFrom,
      dateTo,
      adults,
      kids,
      infants,
      bedrooms,
      priceRange
    );
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "2em" }}>
        <Grid container rowSpacing={4}>
          <Grid item container xs={12}>
            <Grid item xs={12} md={6}>
              <div>Title</div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>order by</div>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container>
              <Grid item xs={2}>
                <SideBar onFilterApply={handleFilterApply} />
              </Grid>
              <Grid item container rowSpacing={2} xs={10}>
                {items.map((el, i) => {
                  return (
                    <Grid item key={i} md={6}>
                      <FavCard />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
