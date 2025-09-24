"use client";
import { TextFieldCodeFull, TextFieldCodeHalf } from "@/component/globalfile";
import MultiLineInputPage from "@/component/multiLineInput/multiLineInput";
import TextInputField from "@/component/shared/form/textField";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const TextFieldPage = () => {
    // Initialize react-hook-form for managing form state
  const { control } = useForm();
    // State for expanding/collapsing code preview
  const [toggle, setToggle] = useState(false);


  /** Copy code snippet to clipboard */
  const handleCopyContent = () => {
    {
      toggle ? (
        navigator.clipboard.writeText(TextFieldCodeFull)
      ) : (
        navigator.clipboard.writeText(TextFieldCodeHalf)
      )
    }
  }
  /** Toggle expand/collapse for code section */
  const handleToggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Typography variant="h4">TextField</Typography>
      <hr />
      <Typography className="mt-3">
        The TextField wrapper component is a complete form control including a
        label, input, and help text. It comes with three variants: outlined
        (default), filled, and standard.
      </Typography>

      <div className="flex gap-5 !my-5">
        <TextInputField
          control={control}
          name="outlined"
          label="outlined"
          variant="outlined"
        />
        <TextInputField
          control={control}
          name="filled"
          label="filled"
          variant="filled"
        />
        <TextInputField
          control={control}
          name="standard"
          label="standard"
          variant="standard"
        />
      </div>
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
             marginBottom:"5%"
          }}
        >
          {TextFieldCodeFull}
        </SyntaxHighlighter>
      ) : (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          customStyle={{
            background: "#151516",
            color: "white",
            padding: "10px",
             marginBottom:"5%",
            borderRadius: "5px",
          }}
        >
          {TextFieldCodeHalf}
        </SyntaxHighlighter>
      )}
      <MultiLineInputPage />
    </>
  );
};

export default TextFieldPage;
