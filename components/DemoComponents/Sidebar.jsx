"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  return (
    <div className="flex flex-col h-full w-50 bg-gray-900 text-white p-2 mt-10">
      <nav className="flex flex-col gap-2 mt-5">
        <a href="#" className="hover:bg-blue-700 rounded-md p-2">
          Dashboard
        </a>
        <a href="#" className="hover:bg-blue-700 rounded-md p-2">
          Settings
        </a>
        <a href="#" className="hover:bg-blue-700 rounded-md p-2">
          Profile
        </a>
        <a href="#" className="hover:bg-blue-700 rounded-md p-2">
          Logout
        </a>
        <a href="#" className="hover:bg-blue-700 rounded-md p-2">
          Record
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
