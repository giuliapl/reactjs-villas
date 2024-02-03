import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={opt}
          label={props.label}
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
