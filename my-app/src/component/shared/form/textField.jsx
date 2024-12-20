import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
const TextInputField = ({
  control,
  label,
  name,
  type,
  errors,
  className,
  value,
  placeholder,
  variant
}) => {
  return (
    <>
      <label htmlFor={name} className="block"></label>
      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: "Name Must Be Fill",
        }}
        name={name}
        render={({ field }) => (
          <TextField 
          variant={variant}
            type={type}
            value={value}
            className={className}
            label={label}
            name={name}
            placeholder={placeholder}
            {...field}
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
          />
        )}
      />
    </>
  );
};

export default TextInputField;
