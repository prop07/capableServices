"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function DropDownString({
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

  const params = React.useMemo(() => {
    return { shrink: true };
  }, []);

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
        value={value ? value : ""}
        label={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        InputLabelProps={{ shrink: true }}
        onFocus={onFocus}
        {...props.register(name)}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {optionLabel ? option[optionLabel] : option}
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
