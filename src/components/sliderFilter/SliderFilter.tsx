import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface SliderFilterProps {
    label: string,
    onChange: (range: number[]) => void
}
export default function SliderFilter(props: SliderFilterProps) {
  const [value, setValue] = React.useState<number[]>([100, 50000]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.onChange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
      max={50000}
      min={100}
        getAriaLabel={() => props.label}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={(n: number, i: number) => {return 'Price ' + n + '$'}}
      />
    </Box>
  );
}
