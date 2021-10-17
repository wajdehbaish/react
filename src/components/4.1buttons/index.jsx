import React from "react";

const Button = ({ text }) => {
  let isImportant=text==="Important"
  return <input type="button" value={text} style={{ fontWeight:isImportant?"900":"500" }} />;
};

export default Button;