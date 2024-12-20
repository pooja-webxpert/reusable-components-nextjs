import React from "react";
import { FormControl, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadFiles({ name, control, onFileChange, errors, className }) {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue={[]} 
        render={({ field: { onChange, onBlur, ref } }) => (
          <>
            <Button
              className={className}
              component="label"
              role="button"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              <VisuallyHiddenInput
                type="file"
                multiple // Allow multiple files
                error={!errors?.[name]}
                helperText={errors?.[name]?.message}
                onChange={(e) => {
                  onFileChange(e); 
                  onChange(Array.from(e.target.files)); 
                }}
                onBlur={onBlur}
                ref={ref}
              />
              Attach Files
            </Button>
          </>
        )}
      />
    </FormControl>
  );
}
