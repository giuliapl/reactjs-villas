import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./SideBar.scss";
import ToggleFilter from "../toggleFilter/ToggleFilter";
import SelectFilter from "../selectFilter/SelectFilter";
import DatesFilter, { DateType } from "../datesFilter/DatesFilter";
import dayjs, { Dayjs } from "dayjs";
import InputFilter from "../inputFilter/InputFilter";
import SliderFilter from "../sliderFilter/SliderFilter";
import MultiSelectFilter from "../multiSelectFilter/MultiSelectFilter";
import ExclusiveToggleFilter from "../exclusiveToggleFilter/ExclusiveToggleFilter";
import { Grid } from "@mui/material";

interface SideBarProps {
  onFilterApply: (
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
  ) => void;
}

export default function SideBar(props: SideBarProps) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [ideas, setIdeas] = React.useState<string[]>([]);
  const [experiences, setExperiences] = React.useState<string[]>([]);
  const [location, setLocation] = React.useState<string>("");
  const [airport, setAirport] = React.useState<string>("");
  const [dateFrom, setDateFrom] = React.useState<Dayjs | null>(dayjs());
  const [dateTo, setDateTo] = React.useState<Dayjs | null>(null);
  const [adults, setAdults] = React.useState<number>(0);
  const [kids, setKids] = React.useState<number>(0);
  const [infants, setInfants] = React.useState<number>(0);
  const [bedrooms, setBedrooms] = React.useState<string>("");
  const [currency, setCurrency] = React.useState<string>("");
  const [priceRange, setPriceRange] = React.useState<number[]>([]);

  const ideasOptions = [
    "Pool",
    "Luxury",
    "Seaview",
    "Couples",
    "Large",
    "Family",
  ];
  const locationOptions = ["Corfu", "Cefalu", "Noto"];
  const airportOptions = ["Palermo Airport", "Noto Airport"];
  const bedroomsOptions = ["1-2", "3-4", "4-5"];
  const tagsOptions = ["Cooking Experiences", "Sicily Outdoors"];

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const handleIdeasFilter = (value: string[]) => {
    setIdeas(value);
  };
  const handleExperiencesFilter = (value: string[]) => {
    setExperiences(value);
  };
  const handleLocationFilter = (value: string) => {
    setLocation(value);
  };
  const handleAirportFilter = (value: string) => {
    setAirport(value);
  };
  const handleDatesFilter = (date: Dayjs | null, type: DateType) => {
    if (type === "from") setDateFrom(date);
    if (type === "to") setDateTo(date);
  };
  const handleAdultsFilter = (value: number | null) => {
    setAdults(value || 0);
  };
  const handleKidsFilter = (value: number | null) => {
    setKids(value || 0);
  };
  const handleInfantsFilter = (value: number | null) => {
    setInfants(value || 0);
  };
  const handleBedroomsFilter = (value: string) => {
    setBedrooms(value);
  };
  const handleCurrencyFilter = (value: string) => {
    setCurrency(value);
  };
  const handlePriceRangeFilter = (value: number[]) => {
    setPriceRange(value);
  };

  const onApply = () => {
    props.onFilterApply(
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
      currency,
      priceRange
    );
    setState({ ...state, ["left"]: false })
  };

  const filters = () => (
    <Box role="filters" sx={{ width: "90vh", margin: "1em 1.5em" }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <ToggleFilter
            onChange={handleIdeasFilter}
            options={ideasOptions}
            label="Villas Ideas"
          />
        </Grid>
        <Grid item xs={12}>
          <MultiSelectFilter
            label="Experiences"
            tags={tagsOptions}
            onChange={handleExperiencesFilter}
          />
        </Grid>
        <Grid item container columnSpacing={4} xs={12}>
          <Grid item xs={6}>
            <SelectFilter
              onChange={handleLocationFilter}
              label="Search by location"
              options={locationOptions}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectFilter
              onChange={handleAirportFilter}
              label="Search by airport"
              options={airportOptions}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <DatesFilter onChange={handleDatesFilter} />
        </Grid>

        <Grid item container xs={12}>
          <Grid item container columnSpacing={1} xs={7}>
            <Grid item xs={4}>
              <InputFilter
                onChange={handleAdultsFilter}
                min={0}
                max={6}
                label="Adults"
              />
            </Grid>
            <Grid item xs={4}>
              <InputFilter
                onChange={handleKidsFilter}
                min={0}
                max={6}
                label="Children (age 2-12)"
              />
            </Grid>
            <Grid item xs={4}>
              <InputFilter
                onChange={handleInfantsFilter}
                min={0}
                max={6}
                label="Infants (age >2)"
              />
            </Grid>
          </Grid>
          <Grid item xs={5} display={"flex"} justifyContent={"end"}>
            <SelectFilter
              onChange={handleBedroomsFilter}
              label="Bedrooms"
              options={bedroomsOptions}
            />
          </Grid>
        </Grid>
        <Grid item container columnSpacing={2} xs={12}>
          <Grid item xs={3}>
            <ExclusiveToggleFilter
              label="Currency"
              onChange={handleCurrencyFilter}
            />
          </Grid>
          <Grid item xs={8}>
            <SliderFilter
              onChange={handlePriceRangeFilter}
              label="Price range"
              currency={currency}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} display={"flex"}  justifyContent={"center"}>
          <Button className="apply-filter-btn" onClick={onApply}>
            APPLY FILTER
          </Button>
        </Grid>
        <Grid item xs={12} display={"flex"}  justifyContent={"center"}>
          <Button className="reset-filter-btn">RESET FILTER</Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <>
        <Box className="container">
          <hr className="hr" />
          <Button onClick={toggleDrawer("left", true)}>FILTER SEARCH</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {filters()}
          </Drawer>
        </Box>
      </>
    </div>
  );
}
