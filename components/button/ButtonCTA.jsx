import React from "react";

const Button = ({
  link = "#",
  id = "",
  text = "Click Me",
  onClick,
  className,
}) => {
  return (
    <a href={link} id={id} className={`CTAbtn`}>
      {text}
    </a>
  );
};

export default Button;
