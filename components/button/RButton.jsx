import React from "react";

function RButton({ id = "", text = "Click Me", onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-rose-700 px-2 py-1 rounded-full hover:bg-violet-700 text-sm font-light flex justify-center"
    >
      {text}
    </button>
  );
}

export default RButton;
