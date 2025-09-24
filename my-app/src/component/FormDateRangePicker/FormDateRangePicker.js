"use client";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  DateRangePickerCodeFull,
  DateRangePickerCodeHalf,
} from "../globalfile";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormDateRangePicker from "../shared/form/dateRangePicker";

/**
 * DateRangePicker Component
 *
 * This component renders a Date Range Picker form using React Hook Form and a custom
 * FormDateRangePicker component. Users can select a start and end date, submit the form,
 * and view the selected date range. Additionally, the component displays example code
 * (either full or half version) that can be expanded/collapsed and copied to the clipboard.
 */
const DateRangePicker = () => {
  // Initialize form control using react-hook-form
  const { control, handleSubmit } = useForm({
    defaultValues: {
      dateRange: {
        startDate: null,
        endDate: null,
      },
    },
  });

  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState();

  // Function to copy the currently displayed code snippet to clipboard
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(DateRangePickerCodeFull)
        : navigator.clipboard.writeText(DateRangePickerCodeHalf);
    }
  };

  // Function to toggle showing full/half code snippet
  const handleToggleButton = () => {
    setToggle(!toggle);
  };
  // Function to handle form submission and store the selected date range
  const formSubmit = (data) => {
    setFormData(data.dateRange);
  };
  return (
    <>
      <Typography className="multiline-text" variant="h4">
        Date Range Picker
      </Typography>
      <hr />
      <Typography className="!mt-3">
        The Date Range Picker lets the user select a range of dates.
      </Typography>

      {/* form */}
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormDateRangePicker
          name="dateRange"
          control={control}
          label="Select Dates"
          className="!my-5"
        />
        <Button type="submit">Submit</Button>
      </form>
      {formData ? (
        <div className="mt-10">
          <Typography variant="h6">Selected Data :</Typography>
          <pre>
            {JSON.stringify(formData.startDate?.format("DD-MM-YYYY"), null, 2)}
          </pre>
          <pre>
            {JSON.stringify(formData.endDate?.format("DD-MM-YYYY"), null, 2)}
          </pre>
        </div>
      ) : (
        ""
      )}

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
          {DateRangePickerCodeFull}
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
          {DateRangePickerCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default DateRangePicker;
