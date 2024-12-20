import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { Button } from "@mui/material";
const BasicButton = ({
  control,
  label,
  href,
  name,
  type,
  color,
  className,
  startIcon,
  variant,
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
          <Button
            variant={variant}
            href={href}
            {...field}
            color={color}
            startIcon={startIcon}
            className={className}
            type={type}
          >
            {label}
          </Button>
        )}
      />
    </>
  );
};

export default BasicButton;
