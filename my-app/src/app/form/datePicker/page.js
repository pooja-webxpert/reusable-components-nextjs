"use client";
import DateTimePicker from "@/component/FormdateTimePicker/FormdateTimePicker";
import { DatePickerCodeFull, DatePickerCodeHalf } from "@/component/globalfile";
import FormDatePicker from "@/component/shared/form/datePicker";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DateRangePicker from "@/component/FormDateRangePicker/FormDateRangePicker";

const DatePicker = () => {
  // Initialize react-hook-form (only control is needed here)
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);

  // Toggle button handler for showing/hiding code
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  // Copies code (full or half) depending on toggle state
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(DatePickerCodeFull)
        : navigator.clipboard.writeText(DatePickerCodeHalf);
    }
  };
  return (
    <>
      <Typography variant="h4">Date Picker</Typography>
      <hr />
      <Typography className="!mt-3">
        The Date Picker component lets users select a date.
      </Typography>
      <FormDatePicker
        className="!my-5"
        control={control}
        name="outlined"
        label="Select Date"
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
            marginBottom: "5%",
          }}
        >
          {DatePickerCodeFull}
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
            marginBottom: "5%",
          }}
        >
          {DatePickerCodeHalf}
        </SyntaxHighlighter>
      )}
      {/* This is date range picker   */}
      <DateRangePicker />
      {/* This is date time picker   */}
      <DateTimePicker />
    </>
  );
};

export default DatePicker;
