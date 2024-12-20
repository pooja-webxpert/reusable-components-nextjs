"use client"; 
import React from "react";
import { Controller } from "react-hook-form";

const RadioButtonGroup = ({
  control,
  name,
  options,
  defaultValue,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={className}>
          {options.map((option) => (
            <label key={option.value} style={{ marginRight: "60px" }}>
              <input
                type="radio"
                value={option.value}
                checked={field.value === option.value}
                onChange={field.onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default RadioButtonGroup;
