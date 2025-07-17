import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id} className="text-sm">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        required
        className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
      />
    </div>
  );
};

export default Input;
