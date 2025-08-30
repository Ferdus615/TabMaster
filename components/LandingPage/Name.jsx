"use client";
import React from "react";

const Name = () => {
  return (
    <div className="h-auto flex flex-col items-center mx-auto max-w-6xl sm:min-h-screen my-20">
      <div>
        <span className="font-extralight text-sm rounded-full border px-5 py-1 bg-gradient">
          The Future of Debate Management
        </span>
      </div>

      <div className="mb-5 mt-5 sm:mb-20 sm:mt-10">
        <span className="text-[min(15vw,200px)]/30 md:text-[min(15vw,250px)]/60 font-normal text-center tracking-tighter font-heading">
          TabMaster
        </span>
      </div>

      <div className="max-w-6xl mx-10">
        <h1 className="fluid-text-3">
          Our vision is to make debate accessible, efficient, and data-driven
          for everyone. We want to create smarter tournaments, empower
          adjudicators, and provide a seamless experience for every debater,
          building a lifelong history of their achievements.
        </h1>
      </div>
    </div>
  );
};

export default Name;
