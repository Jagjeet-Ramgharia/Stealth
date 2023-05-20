import React from "react";
import "./styles.css";

function SingleCheckBox({ checked, onchange, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <label className="container">
          <input onChange={onchange} checked={checked} type="checkbox" />
          <div className="checkmark"></div>
        </label>
        <label style={{ cursor: "pointer" }} htmlFor={label}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default SingleCheckBox;
