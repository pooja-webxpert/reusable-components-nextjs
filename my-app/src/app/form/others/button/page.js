"use client";
import { ButtonCodeFull, ButtonCodeHalf } from "@/component/globalfile";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BasicButton from "@/component/shared/form/button";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonPage = () => {
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);

 // Copy code snippet depending on toggle state (full or half)
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(ButtonCodeFull)
        : navigator.clipboard.writeText(ButtonCodeHalf);
    }
  };

  // Toggle expand/collapse for code section
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Typography variant="h4">Button</Typography>
      <hr />
      <Typography className="!mt-3">
        Buttons allow users to take actions, and make choices, with a single
        tap.
      </Typography>
      <Typography className="!mt-3">
        The Button comes with three variants: text (default), contained, and
        outlined.
      </Typography>

      <div className="flex gap-4 !mt-10">
        <BasicButton control={control} name="button2" label="Link" href="#" />
        <BasicButton
          control={control}
          name="button6"
          label="Secondary"
          color="secondary"
        />
        <BasicButton
          control={control}
          name="button3"
          label="Dark"
          color="dark"
          variant="contained"
        />
        <BasicButton
          control={control}
          name="button4"
          label="Error"
          variant="outlined"
          color="error"
        />
        {/* <BasicButton className="!w-28" control={control} name="button5"  label="Success" variant="contained" color="success"/> */}
        <BasicButton
          control={control}
          name="button7"
          label="Delete"
          variant="outlined"
          color="primary"
          startIcon={<DeleteIcon />}
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
            background: "#151516",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {ButtonCodeFull}
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
          {ButtonCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default ButtonPage;
