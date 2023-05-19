import React from "react";
import "./styles.css";

function SingleCheckBox({ checked = [], onclick, options = [], label }) {
  return (
    <div style={{ display: "flex", alignItems:"center", gap:"10px" }}>
          <div style={{display:"flex", alignItems:"center",gap:"6px"}}>
            <label class="container">
              <input id="" type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label style={{ cursor: "pointer" }} htmlFor={label}>
              {label}
            </label>
          </div>
    </div>
  );
}

export default SingleCheckBox;
