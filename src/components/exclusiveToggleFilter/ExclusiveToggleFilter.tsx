import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";

interface ExclusiveToggleFilterProps {
  onChange: (selectedOption: string) => void;
}

export default function ExclusiveToggleFilter(
  props: ExclusiveToggleFilterProps
) {
  const [value, setValue] = React.useState<string>("");
  const options = ["€", "$", "£", "&"];
  const handleValueChange = (_event: React.MouseEvent, newValue: string | null) => {
    setValue(newValue!);
    props.onChange(newValue!);
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
