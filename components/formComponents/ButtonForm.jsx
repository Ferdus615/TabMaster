import React from "react";

const ButtonForm = (props) => {
  return (
    <button
      type="submit"
      className="mt-4 bg-[#10172a] text-white p-2 rounded-lg hover:bg-rose-900 transition-colors duration-200"
    >
      {props.text}
    </button>
  );
};

export default ButtonForm;