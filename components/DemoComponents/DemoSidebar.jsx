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
    <aside className="w-64 bg-persian text-white h-screen p-4 mt-10 rounded-md">
      <h2 className="text-zinc-text">Hello, Admin</h2>
      <ul className="space-y-2 mt-5">
        {links.map((link) => (
          <li
            key={link.key}
            className="text-sm font-extralight block hover:bg-sky cursor-pointer p-2 rounded"
          >
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navigation;
