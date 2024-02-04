import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import FavCard from "../../components/favCard/FavCard";
import SelectFilter from "../../components/selectFilter/SelectFilter";
import SideBar from "../../components/sidebar/SideBar";
import { VILLAS_MOCK } from "../../mocks/mock";
import { BookedDates, Villa } from "../../models/villas";
import "./SearchVillas.scss";

export default function SearchVillas() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
  const fullVillas: Villa[] = VILLAS_MOCK;
  const orderByOptions = ["Increasing Price", "Decreasing Price"];
  const [orderByValue, setOrderByValue] = React.useState<string>("");

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

  const handleOrderByChange = (value: string) => {
    setOrderByValue(value);
    let orderedVillas = [];

    // todo: sort by key, add key-val to select
    if (value === "Increasing Price") {
      orderedVillas = villas.toSorted((a, b) => a.price - b.price);
    } else {
      orderedVillas = villas.toSorted((a, b) => b.price - a.price);
    }

    setVillas(orderedVillas);
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
            {isExtraSmallSize && (
              <Grid item xs={12}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <SideBar onFilterApply={handleFilterApply} />
                  <Button
                    sx={{
                      color: "black",
                      backgroundColor: "#cccccc",
                      textTransform: "capitalize",
                      borderRadius: "0",
                      width: "15vh",
                      opacity: ".7",
                    }}
                  >
                    Ordina
                  </Button>
                </Box>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <h1>Villas in East Sicily</h1>
              <p>23 results found</p>
            </Grid>
            {!isExtraSmallSize && (
              <Grid
                item
                container
                md={5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item md={7}>
                  <SelectFilter
                    onChange={handleOrderByChange}
                    label="Order By"
                    options={orderByOptions}
                    value={orderByValue}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item container xs={12}>
            {!isExtraSmallSize && (
              <>
                <Grid item md={2}>
                  <SideBar onFilterApply={handleFilterApply} />
                </Grid>
              </>
            )}
            <Grid item container rowSpacing={2} xs={12} md={10}>
              {villas.map((v: Villa, i) => {
                return (
                  <Grid item key={i} md={6} xs={12}>
                    <FavCard villa={v} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
