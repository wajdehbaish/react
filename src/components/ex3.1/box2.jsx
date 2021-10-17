import React from "react";
import Box3 from "./box3";
const Box2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "90%",
        background: "#66ccff",
        margin: "0 auto",
      }}
    >
      <Box3 />
    </div>
  );
};

export default Box2;