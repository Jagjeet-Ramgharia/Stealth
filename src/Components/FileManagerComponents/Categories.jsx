import React from "react";
import Heading from "../Heading";
import CheckBox from "../CheckBox/CheckBox";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";

function Categories({
  text = "",
  options = [],
  handleOnClick,
  styles,
  checked = false,
  isLoading,
}) {
  return (
    <div style={styles}>
      {isLoading ? (
        <SkeletonLoading
          borderRadius="10px"
          style={{
            padding: "10px",
            height: "50px",
            marginBottom: "1rem",
            width: "90%",
          }}
          variant="rectangular"
        />
      ) : (
        <Heading text={text} fontWeight={"600"} size="1.2rem" />
      )}
      {isLoading ? (
        <SkeletonLoading
          borderRadius="10px"
          style={{
            padding: "10px",
            height: "140px",
            marginBottom: "1rem",
            width: "60%",
          }}
          variant="rectangular"
        />
      ) : (
        <CheckBox
          options={options}
          checked={checked}
          onchange={(e, el) => handleOnClick(e, el)}
        />
      )}
    </div>
  );
}

export default Categories;
