import React from "react";
import Heading from "../Heading";
import { LayoutColors } from "../../Constants";

function NameContainer({ src, name }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
        src={src}
        alt={src}
      />
      <Heading
        color={LayoutColors.themeTableText}
        text={name || "N/A"}
        fontWeight={"600"}
      />
    </div>
  );
}

export default NameContainer;
