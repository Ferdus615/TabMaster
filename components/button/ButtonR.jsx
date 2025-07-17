import React from "react";

const ButtonR = (props) => {
  return (
    <a
      href={props.link}
      className={`rounded-full border-1 bg-rose-700 px-4 py-2 text-sm hover:bg-zinc-900 hover:border-rose-700`}
    >
      {props.text}
    </a>
  );
};

export default ButtonR;
