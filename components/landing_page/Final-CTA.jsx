import React from "react";
import ButtonR from "../button/ButtonR";

const FinalCTA = () => {
  return (
    <div className="div-bg flex flex-col mx-auto max-w-6xl gap-10 justify-center p-5 mb-20 sm:gap-20 sm:flex-row sm:items-center">
      <video
        autoPlay
        loop
        muted
        preload="none"
        width={300}
        height={300}
        className="rounded-lg"
      >
        <source src="/community.mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-start">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
          Ready to Transform Your Next Debate Tournament?
        </h1>

        <p className="text-md text-zinc-text sm:text-lg md:text-xl lg:text-2xl mb-5">
          Join the growing community of organizers embracing the future of
          tournament management.
        </p>

        <div className="flex gap-5 sm:flex-row items-center justify-between w-60 mt-5">
          <ButtonR text="Try Demo" link="#" />
          <ButtonR text="Register" link="#" />
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
