import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";


const CustomWidthTooltip = styled(
  ({
    className,
    title,
    children,
    width,
    disableHoverListener,
    arrow,
    // placement,
    ...props
  }) => (
    <Tooltip title={title} {...props} placement="top" arrow classes={{ popper: className }}>
      {children}
    </Tooltip>
  )
)({
  "& .MuiTooltip-tooltipArrow": {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "11px",
    letterSpacing: "0.2px",
    color: "#E6E7ED",
    background:
      "#ffffff",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#E6E7ED",
    fontSize: "20px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "11px",
    fontFamily: "Manrope",
    fontWeight: 500,
    letterSpacing: "0.2px",
    color: "#E6E7ED",
    maxWidth: "300px",
  },
});

export default CustomWidthTooltip;
