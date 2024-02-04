import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
interface InputFilterProps {
  label: string;
  onChange: (value: number | null) => void;
  min: number | null;
  max: number | null;
}

type Operation = "add" | "rm";
export default function InputFilter(props: InputFilterProps) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (type: Operation) => () => {
    if (type === "add") {
      setValue((prevValue) => {
        if (props.max !== null ? prevValue < props.max : true)
          prevValue = prevValue + 1;
        props.onChange(prevValue);
        return prevValue;
      });
    } else if (type === "rm") {
      setValue((prevValue) => {
        if (props.min !== null ? prevValue > props?.min : true)
          prevValue = prevValue - 1;
        props.onChange(prevValue);
        return prevValue;
      });
    }
  };

  const Btns = () => (
    <>
      <IconButton onClick={handleChange("rm")}>
        <RemoveIcon sx={{ width: "2.5vh" }} />
      </IconButton>
      <IconButton onClick={handleChange("add")}>
        <AddIcon sx={{ width: "2.5vh" }} />
      </IconButton>
    </>
  );

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <TextField
        sx={{ width: "100%", backgroundColor: "#f9f9f9" }}
        id="standard-name"
        value={value}
        InputProps={{ endAdornment: <Btns /> }}
      />
    </Box>
  );
}
