import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";

interface ToggleFilterProps {
  onChange: (selectedOptions: string[]) => void;
}

export default function ToggleFilter(props: ToggleFilterProps) {
  const [value, setValue] = React.useState<string[]>([]);
  const options = ["Pool", "Luxury", "Seaview", "Couples", "Large", "Family"];
  const handleValueChange = (_event: React.MouseEvent, newValue: string[]) => {
    setValue(newValue);
    props.onChange(newValue);
  };
  return (
    <ToggleButtonGroup value={value} onChange={handleValueChange}>
      {options.map((o, i) => {
        return (
          <Button key={i} value={o}>
            {o}
          </Button>
        );
      })}
    </ToggleButtonGroup>
  );
}
