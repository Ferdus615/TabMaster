import React from "react";

function SButton({ id = "", text = "Click Me", onClick, className, selected }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${
        selected
          ? "text-persian bg-sky hover:bg-persian hover:text-colorText"
          : "bg-persian hover:bg-sky hover:text-persian"
      } px-2 py-1 rounded-full border-1 border-sky text-sm font-regular flex justify-center hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}

export default SButton;
