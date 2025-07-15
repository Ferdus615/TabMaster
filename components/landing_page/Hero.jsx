import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl lg:min-h-screen">
      <h1 className="text-4xl font-bold p-5 mt-20 text-violet-300 sm:text-center lg:text-5xl xl:text-6xl">
        Elevate Your Debate Tournaments: Smart Tabulation, Lifetime Debater
        Growth.
      </h1>
      <p className="p-5 text-lg text-zinc-600 sm:text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        The future of debate tournament management is here. SmartTab combines
        intuitive design with powerful features, centralizing everything from
        draws to results, and giving every debater a lifelong record of their
        journey.
      </p>
      
      <div className="flex flex-col gap-10 sm:flex-row items-center justify-between w-80 mt-5 sm:mt-10">
        <a
          href="#"
          className="rounded-full border-2 border-violet-700 bg-rose-700 px-4 py-2 text-sm hover:bg-zinc-900"
        >
          Experience Demo
        </a>

        <a
          href="#"
          className="rounded-full border-2 border-violet-700 bg-rose-700 px-4 py-2 text-sm hover:bg-zinc-900"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
