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
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
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
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 50000]);

  const max = 6;
  const min = 0;
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
  const currencyOptions = ["€", "$", "£", "&"];

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
  const handleAdultsFilter = (value: string) => {
    if (value === "add") {
      setAdults((prevValue) => {
        if (max !== null ? prevValue < max : true) prevValue = prevValue + 1;
        return prevValue;
      });
    } else if (value === "rm") {
      setAdults((prevValue) => {
        if (min !== null ? prevValue > min : true) prevValue = prevValue - 1;
        return prevValue;
      });
    }
  };
  const handleKidsFilter = (value: string) => {
    if (value === "add") {
      setKids((prevValue) => {
        if (max !== null ? prevValue < max : true) prevValue = prevValue + 1;
        return prevValue;
      });
    } else if (value === "rm") {
      setKids((prevValue) => {
        if (min !== null ? prevValue > min : true) prevValue = prevValue - 1;
        return prevValue;
      });
    }
  };
  const handleInfantsFilter = (value: string) => {
    if (value === "add") {
      setInfants((prevValue) => {
        if (max !== null ? prevValue < max : true) prevValue = prevValue + 1;
        return prevValue;
      });
    } else if (value === "rm") {
      setInfants((prevValue) => {
        if (min !== null ? prevValue > min : true) prevValue = prevValue - 1;
        return prevValue;
      });
    }
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
    setState({ ...state, ["left"]: false });
  };

  const onReset = () => {
    setIdeas([]);
    setExperiences([]);
    setLocation("");
    setAirport("");
    setDateFrom(null);
    setDateTo(null);
    setAdults(0);
    setKids(0);
    setInfants(0);
    setBedrooms("");
    setCurrency("");
    setPriceRange([0, 50000]);
  };

  const filters = () => (
    <Box
      role="filters"
      className={
        isExtraSmallSize
          ? "filters-container-small"
          : "filters-container-medium"
      }
    >
      <Grid container rowSpacing={2}>
        {isExtraSmallSize && (
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"0 !important"}
          >
            <p
              style={{
                paddingLeft: "20vh",
                fontSize: "1.5em",
                fontWeight: "900",
              }}
            >
              Filter
            </p>
            <FontAwesomeIcon
              icon={faXmark}
              fontSize={"1.7em"}
              color={"#cccccc"}
              cursor={"auto"}
              onClick={() => setState({ ...state, ["left"]: false })}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <ToggleFilter
            onChange={handleIdeasFilter}
            options={ideasOptions}
            label="Villas Ideas"
            value={ideas}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiSelectFilter
            label="Experiences"
            tags={tagsOptions}
            onChange={handleExperiencesFilter}
            value={experiences}
          />
        </Grid>
        <Grid item container columnSpacing={4} xs={12}>
          <Grid item xs={12} md={6}>
            <SelectFilter
              onChange={handleLocationFilter}
              label="Search by location"
              options={locationOptions}
              value={location}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectFilter
              onChange={handleAirportFilter}
              label="Search by airport"
              options={airportOptions}
              value={airport}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <DatesFilter
            onChange={handleDatesFilter}
            dateFromValue={dateFrom}
            dateToValue={dateTo}
          />
        </Grid>

        <Grid item container xs={12}>
          <Grid item container columnSpacing={1} xs={12} md={7}>
            <Grid item xs={12} md={4}>
              <InputFilter
                onChange={handleAdultsFilter}
                label="Adults"
                value={adults}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputFilter
                onChange={handleKidsFilter}
                label="Children (age 2-12)"
                value={kids}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputFilter
                onChange={handleInfantsFilter}
                label="Infants (age >2)"
                value={infants}
              />
            </Grid>
          </Grid>
          {!isExtraSmallSize && (
            <Grid item md={5} display={"flex"} justifyContent={"end"}>
              <SelectFilter
                onChange={handleBedroomsFilter}
                label="Bedrooms"
                options={bedroomsOptions}
                value={bedrooms}
              />
            </Grid>
          )}
        </Grid>
        <Grid item container columnSpacing={2} xs={12}>
          {isExtraSmallSize && (
            <Grid item md={5} display={"flex"} justifyContent={"end"}>
              <SelectFilter
                onChange={handleBedroomsFilter}
                label="Bedrooms"
                options={bedroomsOptions}
                value={bedrooms}
              />
            </Grid>
          )}
          <Grid item xs={3} alignSelf={"center"} marginBottom={".8em"}>
            <ExclusiveToggleFilter
              label="Currency"
              onChange={handleCurrencyFilter}
              options={currencyOptions}
              value={currency}
            />
          </Grid>
          <Grid item xs={8}>
            <SliderFilter
              onChange={handlePriceRangeFilter}
              label="Price range"
              currency={currency}
              value={priceRange}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} md={12} display={"flex"} justifyContent={"center"}>
          <Button className="apply-filter-btn" onClick={onApply}>
            APPLY FILTER
          </Button>
        </Grid>
        <Grid item xs={6} md={12} display={"flex"} justifyContent={"center"}>
          <Button className="reset-filter-btn" onClick={onReset}>
            RESET FILTER
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <>
        {!isExtraSmallSize ? (
          <Box className="container">
            <hr className="hr" />
            <Button onClick={toggleDrawer("left", true)}>FILTER SEARCH</Button>
          </Box>
        ) : (
          <Button
            onClick={toggleDrawer("left", true)}
            sx={{
              color: "black",
              backgroundColor: "#cccccc",
              textTransform: "capitalize",
              borderRadius: "0",
              width: "15vh",
              opacity: ".7",
            }}
          >
            Filtra
          </Button>
        )}

        <Drawer
          className={isExtraSmallSize ? "filters-drawer-small" : ""}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {filters()}
        </Drawer>
      </>
    </div>
  );
}
