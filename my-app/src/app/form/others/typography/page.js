"use client";
import {
  TypographyCodeFull,
  TypographyCodeHalf,
} from "@/component/globalfile";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const TypographyPage = () => {
  // State for expand/collapse code
  const [toggle, setToggle] = useState(false);

  // Copy code snippet to clipboard (full or half depending on toggle state)
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(TypographyCodeFull)
        : navigator.clipboard.writeText(TypographyCodeHalf);
    }
  };

  // Toggle expand/collapse for code block
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Typography variant="h4">Typography</Typography>
      <hr/>
      <Typography className="!mt-3">
        Use typography to present your design and content as clearly and
        efficiently as possible.
      </Typography>
      <div className="text-center !my-10">
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom sx={{ display: "block" }}>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
          caption text
        </Typography>
        <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
          overline text
        </Typography>
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
          {TypographyCodeFull}
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
          {TypographyCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default TypographyPage;
