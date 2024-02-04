import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import { Box, Grid } from "@mui/material";

interface ToggleFilterProps {
  onChange: (selectedOptions: string[]) => void;
  options: string[];
  label: string;
  value: string[];
}

export default function ToggleFilter(props: ToggleFilterProps) {
  const handleValueChange = (_event: React.MouseEvent, newValue: string[]) => {
    props.onChange(newValue);
  };

  return (
    <Box>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <ToggleButtonGroup value={props.value} onChange={handleValueChange}>
        <Grid container>
          {props.options.map((o, i) => {
            return (
              <Grid item xs={4} md={2} key={i}>
                <Button
                  sx={{
                    width: "100%",
                    borderRadius: 0,
                    backgroundColor: "#f9f9f9",
                    border: "0.5px solid #cccccc",
                    "&:hover": { backgroundColor: "#64b4fa" },
                  }}
                  key={i}
                  value={o}
                >
                  {o}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </ToggleButtonGroup>
    </Box>
  );
}
