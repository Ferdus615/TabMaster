"use client";
import React, { useState } from "react";

function DropDownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedText, setSelectedText] = useState(props.text);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateText = (item) => {
    setSelectedText(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id} className="text-sm">
        {props.label}
      </label>

      <div
        id="btn"
        onClick={toggleMenu}
        className="inline-flex justify-between border-1 border-zinc-700 rounded-md p-3 bg-[#10172a]/40 hover:cursor-pointer"
      >
        <span id="btnText" className="text-sm">
          {selectedText}
        </span>
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.656a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </div>

      {isOpen && (
        <div id="list" className="bg-[#10172a]/70 p-3 rounded-md">
          {props.items.map((item, index) => {
            return (
              <p
                id={index}
                onClick={() => updateText(item)}
                className="listItem p-1 text-sm font-regular hover:bg-rose-700 rounded-md hover:cursor-pointer"
              >
                {item}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
