import React from "react";

function RButton() {
  return (
    <a
      href={props.link}
      id={props.id}
      className="bg-rose-700 px-2 py-1 rounded-full hover:bg-violet-700 text-sm font-light flex justify-center"
    >
      {props.text}
    </a>
  );
}

export default RButton;
