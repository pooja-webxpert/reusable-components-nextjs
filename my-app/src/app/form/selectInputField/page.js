"use client";
import {
  Lists,
  SelectInputCodeFull,
  SelectInputCodeHalf,
} from "@/component/globalfile";
import FormInputSelect from "@/component/shared/form/FormInputSelect";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const SelectInputField = () => {
  // react-hook-form instance
  const { control, handleSubmit } = useForm();
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState();

  // Copy selected code snippet (expanded or collapsed version)
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(SelectInputCodeFull)
        : navigator.clipboard.writeText(SelectInputCodeHalf);
    }
  };

  // Toggle expand/collapse code block
  const handleToggleButton = () => {
    setToggle(!toggle);
  };
  // Handle form submission
  const formSubmit = (data) => {
    setFormData(data);
  };
  return (
    <>
      <Typography variant="h4">Select InputField</Typography>
      <Typography className="!mt-3">
        Select components are used for collecting user provided information from
        a list of options.
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex gap-5 !my-5">
          <FormInputSelect
            control={control}
            options={Lists}
            name="outlined"
            label="outlined"
            variant="outlined"
          />
          <FormInputSelect
            control={control}
            options={Lists}
            name="standard"
            label="standard"
            variant="standard"
          />
          <FormInputSelect
            control={control}
            options={Lists}
            name="filled"
            label="filled"
            variant="filled"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      {formData ? (
        <div className="mt-10">
          <Typography variant="h6">Output:</Typography>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-end items-center mt-5">
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
          {SelectInputCodeFull}
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
          {SelectInputCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default SelectInputField;
