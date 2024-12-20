"use client";
import FormTextArea from "@/component/shared/form/TextArea";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { TextAreaFieldCodeFull, TextAreaFieldCodeHalf } from "../globalfile";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const MultiLineInputPage = () => {
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);

  // copy code
  const handleCopyContent = () => {
    {
      toggle ? (
        navigator.clipboard.writeText(TextAreaFieldCodeFull)
      ) : (
        navigator.clipboard.writeText(TextAreaFieldCodeHalf)
      )
    } 
  }

 // toggle for show and hide code 
  const handleToggleButton = () => {
    setToggle(!toggle);
  };
  
  return (
    <>
      <Typography className="multiline-text" variant="h4">
     MultiLine TextField
      </Typography>
      <hr />
      <Typography className="mt-3">
      The multiline prop transforms the Text Field into a Base UI Textarea Autosize element. Unless the rows prop is set, the height of the text field dynamically matches its content. You can use the minRows and maxRows props to bound it.
      </Typography>

      <div className="flex gap-5 !my-5">
        <FormTextArea
          control={control}
          name="outlined"
          label="outlined"
          variant="outlined"
        />
        <FormTextArea
          control={control}
          name="filled"
          label="filled"
          variant="filled"
        />
        <FormTextArea
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
            
          }}
        >
          {TextAreaFieldCodeFull}
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
          {TextAreaFieldCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default MultiLineInputPage;
