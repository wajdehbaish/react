import React from "react";
import Box4 from "./box4";
const Box3 = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        background: "pink",
        paddingTop: "8rem",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
};

export default Box3;
