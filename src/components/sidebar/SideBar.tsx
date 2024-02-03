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
  const [priceRange, setPriceRange] = React.useState<number[]>([]);

  const locationOptions = ["Corfu", "Cefalu", "Noto"];
  const airportOptions = ["Palermo Airport", "Noto Airport"];
  const bedroomsOptions = ["1-2", "3-4", "4-5"];

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
    setBedrooms(value);
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
      priceRange
    );
  };

  const filters = () => (
    <Box role="presentation">
      <ToggleFilter onChange={handleIdeasFilter} />
      <MultiSelectFilter
        label="Experiences"
        tags={["Cooking Experiences", "Sicily Outdoors"]}
        onChange={handleExperiencesFilter}
      />
      <SelectFilter
        onChange={handleLocationFilter}
        label="Location"
        options={locationOptions}
      />
      <SelectFilter
        onChange={handleAirportFilter}
        label="Airport"
        options={airportOptions}
      />
      <DatesFilter onChange={handleDatesFilter} />
      <InputFilter
        onChange={handleAdultsFilter}
        min={0}
        max={6}
        label="Adults"
      />
      <InputFilter
        onChange={handleKidsFilter}
        min={0}
        max={6}
        label="Children (age 2-12)"
      />
      <InputFilter
        onChange={handleInfantsFilter}
        min={0}
        max={6}
        label="Infants (age >2)"
      />
      <SelectFilter
        onChange={handleBedroomsFilter}
        label="Bedrooms"
        options={bedroomsOptions}
      />
      <ExclusiveToggleFilter onChange={handleCurrencyFilter} />
      <SliderFilter onChange={handlePriceRangeFilter} label="Price range" />

      <Button className="apply-filter-btn" onClick={onApply}>
        APPLY FILTER
      </Button>
      <Button className="reset-filter-btn">RESET FILTER</Button>
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
