"use client";
import {
  SkeletonCodeFull,
  SkeletonCodeHalf,
  SkeletonCodeHalf2,
} from "@/component/globalfile";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BasicSkeleton from "@/component/shared/form/skeleton";

const SkeletonPage = () => {
  const [toggle, setToggle] = useState(false);

  // copy code
  const handleCopyContent = () => {
    {
      toggle
        ? navigator.clipboard.writeText(SkeletonCodeFull)
        : navigator.clipboard.writeText(SkeletonCodeHalf);
    }
  };
  // code copy for 2nd skeleton
  const handleCopyContent2 = () => {
    {
      toggle
        ? navigator.clipboard.writeText(SkeletonCodeFull)
        : navigator.clipboard.writeText(SkeletonCodeHalf2);
    }
  };
  // toggle for show and hide code
  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Typography variant="h4">Skeleton</Typography>
      <hr/>
      <Typography className="!mt-3">
        Display a placeholder preview of your content before the data gets
        loaded to reduce load-time frustration.
      </Typography>
      <div className="flex justify-center !my-10">
        <Stack spacing={1}>
          <BasicSkeleton
            variant="text"
            width="210px"
            sx={{ fontSize: "1rem" }}
            animation="wave"
          />
          <BasicSkeleton variant="circular" width="40px" height="40px" />
          <BasicSkeleton
            variant="rectangular"
            width="210px"
            height="60px"
            animation="wave"
          />
          <BasicSkeleton variant="rounded" width="210px" height="60px" />
        </Stack>
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
          {SkeletonCodeFull}
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
          {SkeletonCodeHalf}
        </SyntaxHighlighter>
      )}
      <div className="flex justify-center !my-10">
        <Card sx={{ height: 400, width: "30%", m: 2 }}>
          <CardHeader
            avatar={
              <BasicSkeleton
                animation="wave"
                variant="circular"
                width="40px"
                height="40px"
              />
            }
            title={
              <BasicSkeleton
                animation="wave"
                height="20px"
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={
              <BasicSkeleton animation="wave" height="20px" width="40%" />
            }
          />
          <BasicSkeleton
            height="250px"
            animation="wave"
            variant="rectangular"
          />
          <CardContent>
            <>
              <BasicSkeleton
                animation="wave"
                height="20px"
                style={{ marginBottom: 6 }}
              />
              <BasicSkeleton animation="wave" height="20px" width="80%" />
            </>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end items-center mt-5">
        <Button onClick={handleToggleButton}>
          {toggle ? "Collapse Code" : "Expand Code"}
        </Button>

        <Tooltip title="Copy">
          <IconButton className="" onClick={handleCopyContent2}>
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
          {SkeletonCodeFull}
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
          {SkeletonCodeHalf2}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default SkeletonPage;
