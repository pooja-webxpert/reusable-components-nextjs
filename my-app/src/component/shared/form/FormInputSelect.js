import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSelect = ({
  name,
  control,
  label,
  options,
  errors,
  defaultValue,
  className,
  variant,
}) => {
  return (
    <>
      <FormControl
        fullWidth
        variant={variant}
        className={className}
        error={!!errors?.[name]}
      >
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          render={({ field }) => (
            <Select label={label} id={name} {...field}>
              {options?.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  error={!!errors?.[name]}
                  helperText={errors?.[name]?.message}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </>
  );
};

export default FormInputSelect;
