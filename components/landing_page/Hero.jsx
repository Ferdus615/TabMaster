import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-130 mt-40 text-white">
      <div className="mx-auto max-w-4xl sm:max-w-5xl sm:text-center">
        <h1 className="font-semibold text-indigo-200 mx-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to TabMaster. The Ultimate Debte Tournament Solution by NDF
          BD.
        </h1>
        <p className="font-light text-amber-300 mx-5 mt-4 text-sm sm:text-xl lg:text-2xl">
          Seamlessly manage your parliamentary debate tournaments from
          registration to final results with a powerful, intuitive, and
          real-time tabulation system.
        </p>
      </div>
    </div>
  );
};

export default Hero;
