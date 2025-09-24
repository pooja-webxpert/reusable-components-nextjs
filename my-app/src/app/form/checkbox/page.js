"use client";
import {
  CheckBoxCodeFull,
  CheckBoxCodeHalf,
} from "@/component/globalfile";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckBoxGroup from "@/component/shared/form/checkbox";

const CheckBoxPage = () => {
    // Initialize react-hook-form
  const { control, handleSubmit } = useForm({
    defaultValues: {
      option: [],
    },
  });

  const [toggle, setToggle] = useState(false);
  const [formData, SetFormData] = useState();

  // Toggle button handler
  const handleToggleButton = () => {
    setToggle(!toggle);
  };
  // Checkbox options
  const CheckBoxOptions = [
    { label: "CheckBox1", value: "CheckBox1" },
    { label: "CheckBox2", value: "CheckBox2" },
    { label: "CheckBox3", value: "CheckBox3" },
    { label: "CheckBox4", value: "CheckBox4" },
    { label: "CheckBox5", value: "CheckBox5" },
  ];
  // Copy code block (full or half) depending on toggle state
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(CheckBoxCodeFull)
        : navigator.clipboard.writeText(CheckBoxCodeHalf);
    }
  };
  // Form submit handler
  const formSubmit = (data) => {
    SetFormData(data);
  };

  return (
    <>
      <Typography variant="h4">CheckBox</Typography>
      <hr />
      <Typography className="!mt-3">
        Checkboxes allow the user to select one or more items from a set.
        Checkboxes can be used to turn an option on or off.
      </Typography>
      <Typography className="!mt-3">
        If you have multiple options appearing in a list, you can preserve space
        by using checkboxes instead of on/off switches. If you have a single
        option, avoid using a checkbox and use an on/off switch instead.
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)}>
        <CheckBoxGroup
          control={control}
          name="option" 
          options={CheckBoxOptions}
          defaultValue={[]}
        />
        <Button type="submit" variant="contained" className="mt-4">
          Submit
        </Button>
      </form>
      {formData && (
        <div className="mt-4">
          <Typography variant="h6">Selected Options:</Typography>
          <pre>{JSON.stringify(formData.option, null, 2)}</pre>
        </div>
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
          }}
        >
          {CheckBoxCodeFull}
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
          {CheckBoxCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default CheckBoxPage;
