import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import { Box } from "@mui/material";

interface ExclusiveToggleFilterProps {
  onChange: (selectedOption: string) => void;
  label: string;
  options: string[];
  value: string;
}

export default function ExclusiveToggleFilter(
  props: ExclusiveToggleFilterProps
) {
  const handleValueChange = (
    _event: React.MouseEvent,
    newValue: string | null
  ) => {
    props.onChange(newValue!);
  };

  return (
    <Box sx={{ paddingLeft: { xs: "3em", md: "0" } }}>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <ToggleButtonGroup value={props.value} onChange={handleValueChange}>
        {props.options.map((o, i) => {
          return (
            <Button
              key={i}
              value={o}
              sx={{
                backgroundColor: "#f9f9f9",
                border: "0.5px solid #cccccc",
                "&:hover": { backgroundColor: "#64b4fa" },
              }}
            >
              {o}
            </Button>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
}
