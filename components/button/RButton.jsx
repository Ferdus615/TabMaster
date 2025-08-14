import React from "react";

const SButton = ({
  id = "",
  text = "Click Me",
  onClick,
  className,
  selected,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${
        selected
          ? "bg-sky text-persian hover:border-persian"
          : "bg-transparent hover:bg-slate-700 border-white"
      } px-3 py-1 rounded-md border-1 text-sm font-regular flex justify-center transition 
      hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default SButton;
