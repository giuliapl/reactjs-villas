import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="From date"
          minDate={dayjs()}
          value={dateFrom}
          onChange={handleDateChange("from")}
        />
        <DatePicker
          label="To date"
          minDate={dateFrom || dayjs()}
          value={dateTo}
          onChange={handleDateChange("to")}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
