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
      } className="flex-1 flex items-center justify-center text-sm p-2 border-1 border-white rounded-md gap-2 hover:bg-transparent hover:border-1"
      hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default SButton;
