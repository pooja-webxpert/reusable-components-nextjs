"use client";
import React from "react";
import { Controller } from "react-hook-form";

const CheckBoxGroup = ({ control, name, options, defaultValue, className }) => {
  return (
    <Controller
      name={name} // name for the entire group
      control={control}
      defaultValue={defaultValue || []} // ensure it starts as an empty array
      render={({ field: { value, onChange } }) => (
        <div className={className}>
          {options.map((option) => (
            <label key={option.value} style={{ marginRight: "60px" }}>
              <input
                type="checkbox"
                value={option.value}
                checked={value.includes(option.value)} // Check if it's selected
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const newValue = isChecked
                    ? [...value, option.value] // Add value if checked
                    : value.filter((val) => val !== option.value); // Remove value if unchecked
                  onChange(newValue);
                }}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default CheckBoxGroup;
