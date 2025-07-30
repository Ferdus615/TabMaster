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
          : "bg-persian hover:bg-persian border-zinc-border"
      } px-2 py-1 rounded-full border-2 text-sm font-regular flex justify-center transition hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default SButton;
