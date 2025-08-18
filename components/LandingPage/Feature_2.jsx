import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Feature_2 = () => {
  const info = [
    {
      title: "Team Management",
      desc: "Effortlessly manage teams, participant and registration in one place.",
      src: "/feature_2-pic/teams.svg",
      height: "50",
      width: "50",
    },
    {
      title: "Smart Scheduling",
      desc: "Smart scheduling algorithm that optimizes rounds and minimizes conflicts.",
      src: "/feature_2-pic/trophy.svg",
      height: "50",
      width: "50",
    },
    {
      title: "Live Results",
      desc: "Real-time scoring and rankings with instant result publication.",
      src: "/feature_2-pic/result.svg",
      height: "50",
      width: "50",
    },
    {
      title: "Debaters Profile",
      desc: "Save and track your every achievement and data in one place.",
      src: "/feature_2-pic/profile.svg",
      height: "50",
      width: "50",
    },
  ];

  return (
    <div className="flex items-center justify-center px-6 mx-auto max-w-6xl mb-15">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        {info.map((info, index) => (
          <div key={index} className="feature-card">
            <Image
              src={info.src}
              height={info.height}
              width={info.width}
              alt="icon"
              className="mb-6"
            />
            <h2 className="font-bold text-lg ">{info.title}</h2>
            <p className="text-sm font-light text-zinc-text">{info.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature_2;
