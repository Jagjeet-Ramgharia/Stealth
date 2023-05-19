import React from "react";
import Heading from "../Heading";
import CheckBox from "../CheckBox/CheckBox";

function Categories({text = "", options = [], handleOnClick, styles}) {
  return (
    <div style={styles}>
      <Heading text={text} fontWeight={"600"} size="1.2rem"/>
      <CheckBox options={options} onclick={handleOnClick} />
    </div>
  );
}

export default Categories;
