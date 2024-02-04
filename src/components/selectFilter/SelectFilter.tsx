import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectFilterProps {
  onChange: (selectedOption: string) => void;
  label: string;
  options: string[];
  value: string;
}

export default function SelectFilter(props: SelectFilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value as string);
  };

  return (
    <Box>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <FormControl fullWidth sx={{ backgroundColor: "#f9f9f9" }}>
        <Select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
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
