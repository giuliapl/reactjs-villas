import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import { Box } from "@mui/material";

interface ToggleFilterProps {
  onChange: (selectedOptions: string[]) => void;
  options: string[];
  label: string;
}

export default function ToggleFilter(props: ToggleFilterProps) {
  const [value, setValue] = React.useState<string[]>([]);
  const handleValueChange = (_event: React.MouseEvent, newValue: string[]) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <Box>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <ToggleButtonGroup value={value} onChange={handleValueChange}>
        {props.options.map((o, i) => {
          return (
            <Button sx={{ width: "100%" }} key={i} value={o}>
              {o}
            </Button>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
}
