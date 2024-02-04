import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid } from "@mui/material";

interface DatesFilterProps {
  onChange: (date: Dayjs | null, type: DateType) => void;
  dateFromValue: Dayjs | null;
  dateToValue: Dayjs | null;
}

export type DateType = "from" | "to";

export default function DatesFilter(props: DatesFilterProps) {
  const handleDateChange = (type: DateType) => (date: Dayjs | null) => {
    props.onChange(date, type);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <Grid container>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%", backgroundColor: "#f9f9f9" }}
            label="Check-in"
            minDate={dayjs()}
            value={props.dateFromValue}
            onChange={handleDateChange("from")}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%", backgroundColor: "#f9f9f9" }}
            label="Check-out"
            minDate={props.dateFromValue || dayjs()}
            value={props.dateToValue}
            onChange={handleDateChange("to")}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
