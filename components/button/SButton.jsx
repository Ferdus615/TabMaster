import React from "react";

function SButton({ link = "#", id = "", text = "Click Me", onClick }) {
  return (
    <a
      href={link}
      id={id}
      onClick={onClick}
      className="bg-sky px-2 py-1 rounded-full border-1 border-sky hover:bg-persian text-sm font-regular flex justify-center"
    >
      {text}
    </a>
  );
}

export default SButton;
