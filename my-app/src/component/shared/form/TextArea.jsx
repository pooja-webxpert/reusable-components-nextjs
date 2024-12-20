import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function FormTextArea({
  name,
  errors,
  control,
  label,
  inputType,
  className,
  defaultValue,
  placeholder,
  value,
  variant,
}) {
  return (
    <FormControl fullWidth variant={variant}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => {
          return (
            <TextField
              InputLabelProps={{ shrink: true }}
              {...field}
              variant={variant}
              className={className}
              fullWidth
              value={value ? value : field.value}
              label={label}
              placeholder={placeholder}
              type={inputType}
              error={!!errors?.[name]}
              helperText={errors?.[name]?.message}
              multiline
              maxRows={4}
            />
          );
        }}
      />
    </FormControl>
  );
}