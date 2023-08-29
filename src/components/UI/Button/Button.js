import React from "react";
import "./Button.css";

const Button = ({ children, ...attributes }) => {
  console.log({ attributes });
  return (
    <div className="button">
      <button type="button" {...attributes}>
        {children}{" "}
      </button>
    </div>
  );
};

export default Button;
