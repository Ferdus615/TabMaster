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

  const links = [
    { text: "Dashboard", link: "#", key: "Dashboard" },
    { text: "Leaderboard", link: "#", key: "Leaderboard" },
    { text: "Team Managment", link: "#", key: "Teams" },
    { text: "Adjudicator Managment", link: "#", key: "Adjudicator" },
    { text: "Organizers Managment", link: "#", key: "Organizers" },
    { text: "Round & Pairing", link: "#", key: "Round" },
    { text: "Ballot Entry", link: "#", key: "Ballot" },
    { text: "Profile", link: "#", key: "Profile" },
  ];

  return (
    <aside className="flex flex-col items-start w-54 bg-gray-900 text-white h-screen px-4 py-10 rounded-md">
      <div className="mb-10">
        <Image src="/logo-wide-w.svg" width={180} height={50} alt="logo" />
      </div>
      <h2 className="text-zinc-text mb-5">Hello, Admin</h2>
      {links.map((link) => (
        <div
          key={link.key}
          className="text-sm font-extralight hover:bg-sky cursor-pointer p-2 rounded w-full"
        >
          <Link href={link.link}>{link.text}</Link>
        </div>
      ))}
    </aside>
  );
};

export default Navigation;
