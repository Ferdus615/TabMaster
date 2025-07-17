import React from "react";

const ButtonV = (props) => {
  return (
    <a
      href={props.link}
      className={`rounded-full border-1 bg-violet-700 px-4 py-2 text-sm hover:bg-zinc-900 hover:border-violet-700`}
    >
      {props.text}
    </a>
  );
};

export default ButtonV;
