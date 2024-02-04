import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import "./SearchVillas.scss";
import SideBar from "../../components/sidebar/SideBar";
import FavCard from "../../components/favCard/FavCard";
import { Dayjs } from "dayjs";
import { VILLAS_MOCK } from "../../mocks/mock";
import { useEffect, useState } from "react";
import { BookedDates, Villa } from "../../models/villas";

export default function SearchVillas() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
  const fullVillas: Villa[] = VILLAS_MOCK;
  useEffect(() => {
    // simulation of http request
    setVillas(VILLAS_MOCK);
  }, []);

  const getDateFilterPreCondition = (
    dateFrom: Dayjs | null,
    dateTo: Dayjs | null,
    bookedDates: BookedDates[]
  ): boolean => {
    if (!dateFrom || !dateTo) return true;
    bookedDates.forEach((bd) => {
      if (checkDate(dateFrom, bd) || checkDate(dateTo, bd)) return false;
    });

    return true;
  };

  const checkDate = (selectedDate: Dayjs, bookedDate: BookedDates): boolean => {
    return (
      (selectedDate?.isBefore(bookedDate.dateTo) &&
        selectedDate?.isAfter(bookedDate.dateFrom)) ||
      selectedDate?.isSame(bookedDate.dateFrom) ||
      selectedDate?.isSame(bookedDate.dateTo)
    );
  };

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
    currency: string,
    priceRange: number[]
  ) => {
    const filteredVillas: Villa[] = fullVillas.filter((v: Villa) => {
      const tagsPreCond: boolean = ideas
        ? ideas.every((idea) => v.tags?.includes(idea))
        : true;
      const expPreCond: boolean = experiences
        ? experiences.every((exp) => v.experiences?.includes(exp))
        : true;
      const locationPreCond: boolean = location
        ? location === v.location
        : true;
      const airportPreCond: boolean = airport ? airport === v.airport : true;
      const datesPreCond: boolean = getDateFilterPreCondition(
        dateFrom,
        dateTo,
        v.bookedDates
      );
      const adultsPreCond: boolean = adults ? adults <= v.adults : true;
      const kidsPreCond: boolean = kids ? kids <= v.kids : true;
      const infantsPreCond: boolean = infants ? infants <= v.infants : true;
      const bedroomsPreCond: boolean = bedrooms
        ? bedrooms.split("-").includes(v.bedrooms.toString())
        : true;
      const priceRangePreCond: boolean =
        priceRange.length > 0
          ? priceRange[0] <= v.price && v.price <= priceRange[1]
          : true;

      console.group(
        tagsPreCond,
        expPreCond,
        locationPreCond,
        airportPreCond,
        datesPreCond,
        adultsPreCond,
        kidsPreCond,
        infantsPreCond,
        bedroomsPreCond,
        priceRangePreCond
      );

      return (
        tagsPreCond &&
        expPreCond &&
        locationPreCond &&
        airportPreCond &&
        datesPreCond &&
        adultsPreCond &&
        kidsPreCond &&
        infantsPreCond &&
        bedroomsPreCond &&
        priceRangePreCond
      );
    });

    setVillas(filteredVillas);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "2em" }}>
        <Grid container rowSpacing={4}>
          <Grid item container xs={12}>
            <Grid item xs={12} md={6}>
              <h2>Villas in East Sicily</h2>
              <p>23 results found</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>order by</div>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container>
              <Grid item xs={2}>
                {isExtraSmallSize ? (
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button>Filtra</Button>
                    <Button>Ordina</Button>
                  </Box>
                ) : (
                  <>
                    <SideBar onFilterApply={handleFilterApply} />
                  </>
                )}
              </Grid>
              <Grid item container rowSpacing={2} xs={10}>
                {villas.map((el, i) => {
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
