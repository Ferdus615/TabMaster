import React from "react";
import Image from "next/image";

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
      width: "40",
    },
    {
      title: "Live Results",
      desc: "Real-time scoring and rankings with instant result publication.",
      src: "/feature_2-pic/result.svg",
      height: "50",
      width: "40",
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
    <div className="card-div">
      {info.map((info, index) => (
        <div key={index} className="feature-card">
          <Image
            src={info.src}
            height={info.height}
            width={info.width}
            alt="icon"
            className="sm:mb-5 md:mb-10"
          />
          <div>
            <h2 className="font-bold mb-3">{info.title}</h2>
            <p className="font-extralight text-sm mb-0">{info.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature_2;
