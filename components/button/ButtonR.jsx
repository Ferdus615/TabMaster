import React from "react";

const ButtonR = ({ link = "#", id = "", text = "Click Me", onClick }) => {
  return (
    <a
      href={link}
      id={id}
      className={`rounded-full border-1 bg-rose-700 px-4 py-2 text-sm hover:bg-persian hover:border-sky`}
    >
      {text}
    </a>
  );
};

export default ButtonR;
