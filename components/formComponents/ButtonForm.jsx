import React from "react";

const ButtonForm = ([props]) => {
  return (
    <button
      type="submit"
      className="mt-4 bg-sky p-2 rounded-lg hover:bg-sky-hover transition-colors duration-200"
    >
      {props.text}
    </button>
  );
};

export default ButtonForm;
