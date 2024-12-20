"use client";
import {
  RadioButtonCodeFull,
  RadioButtonCodeHalf,
} from "@/component/globalfile";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RadioButton from "@/component/shared/form/radioButton";
import RadioButtonGroup from "@/component/shared/form/radioButton";

const RadioButtonPage = () => {
  const { control } = useForm({
    defaultValues: {
      radioGroup: "One", // Initial value for the radio group
    },
  });
  const radioOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];

  const [toggle, setToggle] = useState(false);

  // toggle for show and hide code
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  // copy code
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(RadioButtonCodeFull)
        : navigator.clipboard.writeText(RadioButtonCodeHalf);
    }
  };
  return (
    <>
      <Typography variant="h4">Radio Button</Typography>
      <hr />
      <Typography className="!mt-3">
        The Radio Group allows the user to select one option from a set.
      </Typography>
      <div className="flex gap-10 !my-8">
        <RadioButtonGroup
          control={control}
          name="option"
          options={radioOptions}
          defaultValue=""
        />
      </div>
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
            width: "100%",
            background: "#151516",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {RadioButtonCodeFull}
        </SyntaxHighlighter>
      ) : (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          customStyle={{
            width: "100%",
            background: "#151516",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {RadioButtonCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default RadioButtonPage;
