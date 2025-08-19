import React from "react";

const Button = ({
  link = "#",
  id = "",
  text = "Click Me",
  onClick,
  className,
  children,
}) => {
  return (
    <a href={link} id={id} className={`CTAbtn ${className}`}>
      {children || "Click Me"}
    </a>
  );
};

export default Button;
