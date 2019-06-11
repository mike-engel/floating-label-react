import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  component?: "input" | "textarea";
}

const FloatingLabel = ({ component = "input", placeholder, className = "", ...rest }: Props) => (
  <label
    className={`floating-label ${className} ${!!rest.value ? "floating" : ""}`}
    htmlFor={rest.id}
  >
    {React.createElement(component, rest)}
    <span>{placeholder}</span>
  </label>
);

export default FloatingLabel;
