import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./SideBar.scss";
import ToggleFilter from "../toggleFilter/ToggleFilter";
import SelectFilter from "../selectFilter/SelectFilter";
import DatesFilter, { DateType } from "../datesFilter/DatesFilter";
import { Dayjs } from "dayjs";

export default function SideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const locationOptions = ["Corfu", "Cefalu", "Noto"];
  const airportOptions = ["Corfu AIRP", "Cefalu AIRP", "Noto AIRP"];

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

  const handleToggleFilter = (toggleOpts: string[]) => {
    console.log("ok", toggleOpts);
  };
  const handleSelectFilter = (selectOpt: string) => {
    console.log("ok select", selectOpt);
  };
  const handleDatesFilter = (date: Dayjs | null, type: DateType) => {
    console.log("d", date, type)
  };

  const filters = (anchor: string) => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ToggleFilter onChange={handleToggleFilter} />
      <SelectFilter
        onChange={handleSelectFilter}
        label="Location"
        options={locationOptions}
      />
      <SelectFilter
        onChange={handleSelectFilter}
        label="Airport"
        options={airportOptions}
      />
      <DatesFilter
        onChange={handleDatesFilter}
      />
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
            {filters("left")}
          </Drawer>
        </Box>
      </>
    </div>
  );
}
