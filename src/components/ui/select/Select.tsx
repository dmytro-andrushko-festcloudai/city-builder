import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";
import { useId } from "react";

export type SelectOptionType = {
  label: string;
  value: string;
};

type SelectPros = {
  options: SelectOptionType[];
  value: string;
  label: string;
  onChange: (event: SelectChangeEvent<string>) => void;
};
const Select = ({ options, value, label, onChange }: SelectPros) => {
  const labelId = useId();

  return (
    <FormControl sx={{ m: 1, minWidth: 200, display: "flex" }} size="small">
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        labelId={labelId}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map(({ label, value }) => {
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
