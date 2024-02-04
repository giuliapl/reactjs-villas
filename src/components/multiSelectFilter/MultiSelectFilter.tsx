import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MultiSelectFilterProps {
  label: string;
  tags: string[];
  onChange: (values: string[]) => void;
  value: string[];
}
export default function MultiSelectFilter(props: MultiSelectFilterProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    props.onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box>
      <label style={{ fontSize: "small" }}>{props.label}</label>
      <FormControl sx={{ width: "100%", backgroundColor: "#f9f9f9" }}>
        <Select
          multiple
          value={props.value}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.tags.map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
              style={getStyles(tag, props.value, theme)}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
