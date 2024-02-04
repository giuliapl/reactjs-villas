import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface SliderFilterProps {
  label: string;
  onChange: (range: number[]) => void;
  currency?: string;
}
export default function SliderFilter(props: SliderFilterProps) {
  const [value, setValue] = React.useState<number[]>([100, 50000]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.onChange(newValue as number[]);
  };

  return (
    <Box width={"50vh"} marginLeft={"auto"}>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <Slider
        max={50000}
        min={100}
        getAriaLabel={() => props.label}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(n: number) => {
          return `Price ${n}${props.currency ? props.currency : "$"}`;
        }}
      />
    </Box>
  );
}
