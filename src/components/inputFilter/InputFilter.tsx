import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
interface InputFilterProps {
  onChange: (value: string) => void;
  label: string;
  value: number;
}

type Operation = "add" | "rm";
export default function InputFilter(props: InputFilterProps) {
  const handleChange = (type: Operation) => () => {
    props.onChange(type.toString());
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
        value={props.value}
        InputProps={{ endAdornment: <Btns /> }}
      />
    </Box>
  );
}
