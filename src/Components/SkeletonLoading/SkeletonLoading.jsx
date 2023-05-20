import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonLoading = ({
  variant,
  className,
  borderRadius = "20px",
  style,
}) => {
  return (
    <Skeleton
      variant={variant}
      className={`${className}`}
      style={style}
      sx={{
        bgcolor: "rgba(173, 175, 177, 0.88)",
        borderRadius: borderRadius,
      }}
    />
  );
};

export default SkeletonLoading;
