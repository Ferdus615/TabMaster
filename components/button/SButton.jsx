import React from "react";

function SButton({ id = "", text = "Click Me", onClick, className, selected }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${
        selected
          ? "bg-sky text-persian"
          : "bg-persian hover:bg-persian hover:text-white"
      } px-2 py-1 rounded-full border-1 text-sm font-regular flex justify-center transition hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}

export default SButton;
