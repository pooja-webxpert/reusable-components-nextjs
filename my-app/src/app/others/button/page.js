"use client";
import {
  ButtonCodeFull,
  ButtonCodeHalf,
  Lists,
  ModalCodeFull,
  ModalCodeHalf,
  SelectInputCodeFull,
  SelectInputCodeHalf,
} from "@/component/globalfile";
import FormInputSelect from "@/component/shared/form/FormInputSelect";
import UploadFiles from "@/component/shared/form/uploadFiles";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { solarizedDark } from "react-code-blocks";
import { useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BasicButton from "@/component/shared/form/button";
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonGroup } from "@mui/joy";

const ButtonPage = () => {
  const { control } = useForm();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // copy code
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(ButtonCodeFull)
        : navigator.clipboard.writeText(ButtonCodeHalf);
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
      <Typography variant="h4">Button</Typography>
      <hr/>
       <Typography className="!mt-3">
        Buttons allow users to take actions, and make choices, with a single
        tap.
      </Typography>
      <Typography className="!mt-3">
        The Button comes with three variants: text (default), contained, and
        outlined.
      </Typography>

      <div className="flex gap-9 !mt-10">
        <BasicButton control={control} name="button1"  label="Contained"  />
        <BasicButton control={control} name="button2"  label="Link" href="#"/>  
        <BasicButton control={control} name="button6"  label="Secondary" color="secondary"/>
        <BasicButton control={control} name="button3"  label="Dark" color="dark" variant="contained"/>
        <BasicButton control={control} name="button4"  label="Error" variant="outlined" color="error" />
        <BasicButton control={control} name="button5"  label="Success" variant="contained" color="success"/>
        <BasicButton control={control} name="button7"  label="Delete" variant="outlined" color="primary" startIcon={<DeleteIcon />}/>

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
