import React from "react";

const ButtonV = (props) => {
  return (
    <a
      href={props.link}
      className={`rounded-full border-1 bg-violet-700 px-4 py-2 text-sm hover:bg-persian hover:border-sky`}
    >
      {props.text}
    </a>
  );
};

export default ButtonV;
