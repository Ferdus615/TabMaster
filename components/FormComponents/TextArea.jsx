import React from "react";

const TextArea = ({ id, label, rows, cols }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required
        className="border-1 border-zinc-border rounded-md p-2 bg-persian/40"
      ></textarea>
    </div>
  );
};

export default TextArea;
