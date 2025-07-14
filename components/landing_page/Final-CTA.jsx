import React from "react";

function FinalCTA() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center p-5 mb-20 sm:flex-row">
      <div className="w-180 h-70">
        <video
          autoPlay
          loop
          muted
          preload="none"
          width={800}
          height={800}
          className="rounded-lg w-full h-full object-cover"
        >
          <source src="/community.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
          Ready to Transform Your Next Debate Tournament?
        </h1>

        <p className="text-md text-zinc-400 sm:text-lg md:text-xl lg:text-2xl mb-10">
          Join the growing community of organizers embracing the future of
          tournament management.
        </p>

        <div className="flex gap-5 sm:flex-row items-center justify-between w-50 mt-5">
          <a
            href="#"
            className="p-2 text-sm border-2 border-violet-700 bg-[#10172a] rounded-lg font-medium text-zinc-400 hover:cursor-pointer hover:bg-transparent transition-colors"
          >
            Try Demo
          </a>

          <a
            href="#"
            className="p-2 text-sm border-2 border-violet-700 bg-[#10172a] rounded-lg font-medium text-zinc-400 hover:cursor-pointer hover:bg-transparent transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default FinalCTA;
