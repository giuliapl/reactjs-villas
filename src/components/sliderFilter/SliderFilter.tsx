import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface SliderFilterProps {
    label: string,
    onChange: (range: number[]) => void
}
export default function SliderFilter(props: SliderFilterProps) {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.onChange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => props.label}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
