import React from "react";

function SButton({ id = "", text = "Click Me", onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-sky px-2 py-1 rounded-full border-1 border-sky hover:bg-persian text-sm font-regular flex justify-center"
    >
      {text}
    </button>
  );
}

export default SButton;
