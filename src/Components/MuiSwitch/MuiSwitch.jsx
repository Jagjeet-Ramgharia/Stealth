import React from "react";
import { Switch, styled } from "@mui/material";

const MuiSwitchLight = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "63px",
  height: "32px",
  padding: 0,
  "& .MuiSwitch-track": {
    borderRadius: 22,
    backgroundColor: "#adb5bd",

    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    "&:before, &:after": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontWeight: 700,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "#E6E7ED",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#28A87D",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: "28px",
    height: "28px",
  },
}));
export default MuiSwitchLight;
