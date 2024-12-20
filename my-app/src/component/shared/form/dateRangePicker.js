import React from "react";
import { FormControl, TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

export default function FormDateRangePicker({
  name,
  control,
  errors,
  className,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors?.[name]?.startDate} className={className}>
          <Controller
  name={`${name}.startDate`}
  control={control}
  render={({ field: { onChange, value } }) => (
    <DatePicker
      label="Start Date"
      value={value}
      onChange={(date) => onChange(date)} // Ensure it sets the Day.js date
      renderInput={(params) => (
        <TextField
          {...params}
          error={!!errors?.[name]?.startDate}
          helperText={errors?.[name]?.startDate?.message}
        />
      )}
    />
  )}
/>

          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors?.[name]?.endDate} className={className}>
          <Controller
  name={`${name}.endDate`}
  control={control}
  render={({ field: { onChange, value } }) => (
    <DatePicker
      label="End Date"
      value={value}
      onChange={(date) => onChange(date)}
      renderInput={(params) => (
        <TextField
          {...params}
          error={!!errors?.[name]?.endDate}
          helperText={errors?.[name]?.endDate?.message}
        />
      )}
    />
  )}
/>

          </FormControl>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
