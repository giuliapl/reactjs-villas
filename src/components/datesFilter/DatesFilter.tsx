import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid } from "@mui/material";

interface DatesFilterProps {
  onChange: (date: Dayjs | null, type: DateType) => void;
}

export type DateType = "from" | "to";

export default function DatesFilter(props: DatesFilterProps) {
  const [dateFrom, setDateFrom] = React.useState<Dayjs | null>(dayjs());
  const [dateTo, setDateTo] = React.useState<Dayjs | null>(null);

  const handleDateChange = (type: DateType) => (date: Dayjs | null) => {
    if (type === "from") {
      setDateFrom(date);
    } else if (type === "to") {
      setDateTo(date);
    }
    props.onChange(date, type);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%", backgroundColor: "#f9f9f9" }}
            label="Check-in"
            minDate={dayjs()}
            value={dateFrom}
            onChange={handleDateChange("from")}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%", backgroundColor: "#f9f9f9" }}
            label="Check-out"
            minDate={dateFrom || dayjs()}
            value={dateTo}
            onChange={handleDateChange("to")}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
