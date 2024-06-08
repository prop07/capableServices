"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function DropDown({
  placeholder,
  name,
  options,
  optionLabel,
  value,
  errors,
  onChange,
  onFocus,
  ...props
}) {
  const [fieldValue, setFieldValue] = React.useState("");

  const handleChange = (event) => {
    setFieldValue(event.target.value);
  };



  return (
    <FormControl
      className="w-full"
      sx={{ minWidth: 120 }}
      error={Boolean(errors[name])}
    >
      <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select-standard"
        value={value}
        label={placeholder}
        onChange={(e) => {
          // handleChange(e);
          onChange(e);
        }}
        onFocus={onFocus}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option[optionLabel]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText
        id="component-error-text"
        style={{ color: errors[name] ? "#d32f2f" : "inherit" }}
      >
        {errors[name]?.message ? errors[name].message : null}
      </FormHelperText>
    </FormControl>
  );
}
