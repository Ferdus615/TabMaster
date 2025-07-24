import React from "react";

function RButton({ link = "#", id = "", text = "Click Me" }) {
  return (
    <a
      href={link}
      id={id}
      className="bg-rose-700 px-2 py-1 rounded-full hover:bg-violet-700 text-sm font-light flex justify-center"
    >
      {text}
    </a>
  );
}

export default RButton;
