import React from "react";

function Heading({ text, size = "16px", fontWeight }) {
  return (
    <div
      style={{
        fontWeight: fontWeight,
        fontSize: size,
      }}
    >
      {text}
    </div>
  );
}

export default Heading;
