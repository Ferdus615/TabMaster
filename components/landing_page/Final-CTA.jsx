import React from "react";

function FinalCTA() {
  return (
    <div className="flex flex-col mx-auto max-w-6xl gap-20 justify-center p-5 mb-20 sm:flex-row sm:items-center">
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
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
          Ready to Transform Your Next Debate Tournament?
        </h1>

        <p className="text-md text-zinc-400 sm:text-lg md:text-xl lg:text-2xl mb-10">
          Join the growing community of organizers embracing the future of
          tournament management.
        </p>

        <div className="flex gap-5 sm:flex-row items-center justify-between w-60 mt-5">
          <a
            href="#"
            className="rounded-full border-2 border-zinc-400  bg-rose-700 px-4 py-1 text-sm hover:bg-zinc-900"
          >
            Try Demo
          </a>

          <a
            href="/registration"
            className="rounded-full border-2 border-zinc-400  bg-rose-700 px-4 py-1 text-sm hover:bg-zinc-900"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default FinalCTA;
