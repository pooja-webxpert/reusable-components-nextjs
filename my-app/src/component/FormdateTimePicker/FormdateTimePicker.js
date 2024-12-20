"use client";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import FormDateTimePicker from "../shared/form/dateTimePicker";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DateTimePickerCodeFull, DateTimePickerCodeHalf } from "../globalfile";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const DateTimePicker = () => {
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);

  // copy code
  const handleCopyContent = () => {
    {
      toggle ? (
        navigator.clipboard.writeText(DateTimePickerCodeFull)
      ) : (
        navigator.clipboard.writeText(DateTimePickerCodeHalf)
      )
    }
  }

// toggle for show and hide code 
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Typography className="multiline-text" variant="h4">Date Time Picker</Typography>
      <hr />
      <Typography className="!mt-3">
        The Date Time Picker component lets users select a date and time.
      </Typography>
      <FormDateTimePicker
        className="!my-5"
        control={control}
        name="outlined"
        label="Select Date & Time"
        variant="outlined"
      />
         <div className="flex justify-end items-center">
        <Button onClick={handleToggleButton}>
          {toggle ? "Collapse Code" : "Expand Code"}
        </Button>

        <Tooltip title="Copy">
          <IconButton className="" onClick={handleCopyContent}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </div>
      {toggle ? (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          customStyle={{
            background: "#151516",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {DateTimePickerCodeFull}
        </SyntaxHighlighter>
      ) : (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          customStyle={{
            background: "#151516",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {DateTimePickerCodeHalf}
        </SyntaxHighlighter>
      )}

    </>
  );
};

export default DateTimePicker;
