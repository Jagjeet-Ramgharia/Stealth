import React from "react";
import { capitalizeFirstLetter } from "../Utils";

function Heading({
  text,
  size = "16px",
  fontWeight,
  color = "black",
  textTransform,
}) {
  return (
    <div
      style={{
        fontWeight: fontWeight,
        fontSize: size,
        textTransform: textTransform,
        color: color,
      }}
    >
      {capitalizeFirstLetter(text)}
    </div>
  );
}

export default Heading;
