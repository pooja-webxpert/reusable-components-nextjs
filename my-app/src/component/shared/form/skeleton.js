import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function BasicSkeleton({
  variant,
  width,
  height,
  spacing,
  animation,
}) {
  return (
    <Stack spacing={spacing}>
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
      />
    </Stack>
  );
}
