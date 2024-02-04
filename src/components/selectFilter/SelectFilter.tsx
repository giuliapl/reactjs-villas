import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectFilterProps {
  label: string;
  options: string[];
  onChange: (selectedOption: string) => void;
}

export default function SelectFilter(props: SelectFilterProps) {
  const [opt, setOpt] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOpt(event.target.value as string);
    props.onChange(event.target.value as string);
  };

  return (
    <Box>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <FormControl fullWidth sx={{ backgroundColor: "#f9f9f9" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={opt}
          onChange={handleChange}
        >
          {props.options.map((o, i) => {
            return (
              <MenuItem key={i} value={o}>
                {o}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
