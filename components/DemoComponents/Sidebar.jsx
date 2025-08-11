"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  return (
    <div className="flex flex-col h-screen w-50 bg-gray-900 text-white p-2">
      <div className="flex justify-between">
        <Image src="/logo.png" width="80" height="50" alt="logo" />
        <Image
          src="/menu-burger-white.svg"
          width="30"
          height="30"
          alt="burger menu"
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      {[{ Dashboard }, { Teams }, { Adjudicator }, { Organizers }]}
    </div>
  );
};

export default Navigation;
