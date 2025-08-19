import React from "react";

const Input = ({ type, id, label }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        className="border-1 border-zinc-border rounded-md p-2 bg-persian/40"
      />
    </div>
  );
};

export default Input;
