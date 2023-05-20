import React from "react";
import "./styles.css";

function CheckBox({ checked = false, onchange, options = [] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map((el) => {
        return (
          <div
            key={el?.id}
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <label className="container">
              <input
                checked={el?.checked}
                onChange={(e) => onchange(e, el)}
                id={el?.Name}
                type="checkbox"
              />
              <div className="checkmark"></div>
            </label>
            <label
              style={{ cursor: "pointer", fontSize: "17px" }}
              htmlFor={el?.Name}
            >
              {el?.Name}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckBox;
