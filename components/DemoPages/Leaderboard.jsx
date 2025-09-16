import React from "react";
import Image from "next/image";

const Leaderboard = () => {
  return (
    <div>
      {/* Header tab */}
      {/* Header tab */}
      <header className="bg-gray-900 rounded-lg p-3 flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
        <div className="">
          <span
            className="border rounded-md px-3 py-1 text-colorText flex flex-wrap items-center gap-2 hover:cursor-pointer 
                              hover:bg-gray-800"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12L5 12M10 6L5 12L10 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Back</p>
          </span>
        </div>
        <div className="flex">
          <Image
            src="/feature_2-pic/adjudicator.svg"
            height={20}
            width={20}
            alt="trophy"
            className="mr-3"
          />
          <p className="font-bold text-xl font-heading text-rose">
            Leaderboard
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-lg italic bg-purple rounded-full px-5">Admin</p>
          <div className="ml-3 rounded-full bg-rose h-8 w-8"></div>
        </div>
      </header>
    </div>
  );
};

export default Leaderboard;
