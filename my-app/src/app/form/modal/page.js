"use client";
import {
  ModalCodeFull,
  ModalCodeHalf,
} from "@/component/globalfile";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BasicModal from "@/component/shared/form/modal";

const ModalPage = () => {
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // copy code
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(ModalCodeFull)
        : navigator.clipboard.writeText(ModalCodeHalf);
    }
  };

  // toggle for show and hide code
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Typography variant="h4">Modal</Typography>
      <hr/>
      <Typography className="!mt-3">
        The modal component provides a solid foundation for creating dialogs,
        popovers, lightboxes, or whatever else.
      </Typography>
      <div className="text-center !my-10">
        <BasicModal
          Heading1="Text in a modal"
          Heading2="Duis mollis, est non commodo luctus, nisi erat porttitor ligula"
          name="Open Modal"
          style={style}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
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
          {ModalCodeFull}
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
          {ModalCodeHalf}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default ModalPage;
