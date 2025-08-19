"use client";
import { React, useState } from "react";

const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const logIsChecked = (event) => {
    const myCheckeBox = event.target;
    setIsChecked(myCheckeBox.checked);

    if (myCheckeBox.checked) {
      console.log(`The box is checked!`);
    } else {
      console.log(`The box is not checked!`);
    }
  };

  return (
    <div>
      <label
        htmlFor={props.id}
        className="inline-flex cursor-pointer gap-4 items-center text-center hover:cursor-pointer"
      >
        <input
          type="checkbox"
          id={props.id}
          name={props.id}
          checked={isChecked}
          onChange={logIsChecked}
          className="appearance-none sr-only peer p-[5px] border-2 rounded-sm"
        />
        <div className="p-[5px] border-2 rounded-sm peer-checked:bg-sky peer-checked:border-sky ease-in-out"></div>
        <span className="text-sm">{props.label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
