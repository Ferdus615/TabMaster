import React from "react";

function VButton(props) {
  return (
    <a
      href={props.link}
      id={props.id}
      className="bg-violet-700 px-2 py-1 rounded-full hover:bg-rose-700 text-sm font-light flex justify-center"
    >
      {props.text}
    </a>
  );
}

export default VButton;
