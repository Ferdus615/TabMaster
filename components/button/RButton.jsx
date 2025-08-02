import React from "react";

const RButton = ({ id = "", text = "Click Me", onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-rose px-2 py-1 rounded-full hover:bg-violet text-sm font-light flex justify-center"
    >
      {text}
    </button>
  );
};

export default RButton;
