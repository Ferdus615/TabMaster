import React from "react";

const ButtonR = ({ link = "#", id = "", text = "Click Me", onClick }) => {
  return (
    <a href={link} id={id} className={`CTAbtn`}>
      {text}
    </a>
  );
};

export default ButtonR;
