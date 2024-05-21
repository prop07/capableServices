"use client";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

export default function PasswordField({
  placeholder,
  name,
  type,
  errors,
  onChange,
  onFocus,
  ...props
}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <FormControl variant="outlined" className="w-full">
      <InputLabel
        sx={{ background: "#FFFFFF", paddingRight: "7px" }}
        htmlFor="outlined-adornment-password"
        error={Boolean(errors[name])}
      >
        {placeholder}
      </InputLabel>
      <OutlinedInput
        error={Boolean(errors[name])}
        id="outlined-adornment-password"
        type={visiblePassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setVisiblePassword(!visiblePassword)}
              edge="end"
            >
              {visiblePassword ? (
                <i
                  onClick={() => setVisiblePassword(!visiblePassword)}
                  className="bi bi-eye-slash-fill cursor-pointer"
                ></i>
              ) : (
                <i
                  onClick={() => setVisiblePassword(!visiblePassword)}
                  className="bi bi-eye cursor-pointer"
                ></i>
              )}
            </IconButton>
          </InputAdornment>
        }
        label={name}
        onChange={onChange}
        onFocus={onFocus}
      />
      <FormHelperText
        id="component-error-text"
        style={{ color: errors[name] ? "#d32f2f" : "inherit" }}
      >
        {errors[name]?.message ? errors[name].message : null}
      </FormHelperText>
    </FormControl>
  );
}
