import React from "react";

function SButton(props) {
  return (
    <a
      href={props.link}
      id={props.id}
      className="bg-sky px-2 py-1 rounded-full border-1 border-sky hover:bg-persian text-sm font-regular flex justify-center"
    >
      {props.text}
    </a>
  );
}

export default SButton;
