import React from "react";
import "./styles.css";

function CheckBox({ checked = [], onclick, options = [] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map((el) => {
        return (
          <div style={{display:"flex", alignItems:"center",gap:"6px"}}>
            <label class="container">
              <input id={el?.label}  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label style={{ cursor: "pointer" }} htmlFor={el?.label}>
              {el?.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckBox;
