import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface SliderFilterProps {
  onChange: (range: number[]) => void;
  label: string;
  currency?: string;
  value: number[];
}
export default function SliderFilter(props: SliderFilterProps) {
  const handleChange = (_: Event, newValue: number | number[]) => {
    props.onChange(newValue as number[]);
  };

  return (
    <Box width={"50vh"} marginLeft={"auto"}>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <Slider
        max={50000}
        min={100}
        getAriaLabel={() => props.label}
        value={props.value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(n: number) => {
          return `Price ${n}${props.currency ? props.currency : "$"}`;
        }}
      />
    </Box>
  );
}
