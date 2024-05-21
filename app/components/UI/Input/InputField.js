import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";

export default function InputField({
  multiline,
  placeholder,
  name,
  type,
  errors,
  // onFocus,
  // onChange,
  disabled,
  value,
  ...props
}) {
  // const [value, setValue] = useState("");

  const params = useMemo(() => {
    return { shrink: true };
  }, []);

  return (
    <div className="w-full">
      <TextField
        defaultValue={value}
        fullWidth
        label={placeholder}
        type={type ? type : "text"}
        id="outlined-basic"
        variant="outlined"
        // onChange={onChange}
        // onFocus={onFocus}
        disabled={disabled}
        error={Boolean(errors[name])}
        InputLabelProps={{ shrink: true }}
        helperText={errors[name] ? errors[name].message : null}
        {...props.register(name, {
          onChange: (e) => {
            if (props.onChange) {
              props.onChange(e);
            }
          },
          onBlur: (e) => {
            if (props.onBlur) {
              props.onBlur(e);
            }
          },
          onFocus: (e) => {
            if (props.onFocus) {
              props.onFocus(e);
            }
          },
        })}
        {...props}
        multiline={multiline}
        rows={multiline ? 3 : undefined}
      />
    </div>
  );
}
