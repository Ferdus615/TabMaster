import React from "react";
import Image from "next/image";

const TeamManagement = () => {
  return (
    <div className="flex flex-col gap-4">
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
            src="/feature_2-pic/team.svg"
            height={20}
            width={20}
            alt="trophy"
            className="mr-3"
          />
          <p className="font-bold text-xl font-heading text-rose">
            Team Management
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-lg italic bg-purple rounded-full px-5">Admin</p>
          <div className="ml-3 rounded-full bg-rose h-8 w-8"></div>
        </div>
      </header>

      {/* btn and search */}
      <div className="flex justify-between p-3 rounded-lg">
        <div className="">
          <span
            className="bg-yellow-500 rounded-md px-3 py-1 text-colorText flex flex-wrap gap-2 hover:cursor-pointer 
                    hover:bg-sky"
          >
            <Image
              src="/feature_2-pic/add.svg"
              height={18}
              width={18}
              alt="icon"
            />
            <p>Add Team</p>
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50/20">
          <Image
            src="/feature_2-pic/search.svg"
            height={18}
            width={18}
            alt="icon"
          />
          <span>
            <input
              placeholder="Search teams..."
              className="bg-transparent border-transparent outline-none"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
