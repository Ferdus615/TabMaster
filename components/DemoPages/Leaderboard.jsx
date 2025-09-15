import React from "react";
import Image from "next/image";

const Leaderboard = () => {
  return (
    <div>
      {/* Header tab */}
      <header className="bg-gray-900 rounded-lg p-3 flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
        <div className="flex ">
          <Image
            src="/feature_2-pic/trophy.svg"
            height={20}
            width={20}
            alt="trophy"
            className="mr-3"
          />
          <p className="font-bold text-xl font-heading text-rose">
            TabMaster Debate Tournament
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
