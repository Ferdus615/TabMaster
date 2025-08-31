import React from "react";
import Image from "next/image";

const Leaderboard = () => {
  const stats = [
    {
      title: "Total Teams",
      value: "24",
      icon: "feature_2-pic/teams.svg",
      change: "+2 from last round",
    },
    {
      title: "Rounds Completed",
      value: "3/6",
      icon: "feature_2-pic/trophy.svg",
      change: "Round 4 in progress",
    },
    {
      title: "Next Round",
      value: "Tomorrow",
      icon: "feature_2-pic/round.svg",
      change: "2:00 PM EST",
    },
    {
      title: "Adjudicators",
      value: "12",
      icon: "feature_2-pic/adjudicator.svg",
      change: "All assigned",
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      team: "Oxford Union A",
      points: 18,
      wins: 6,
      speaker: "Sarah Chen",
    },
    {
      rank: 2,
      team: "Cambridge Debate",
      points: 17,
      wins: 5,
      speaker: "James Wilson",
    },
    {
      rank: 3,
      team: "Harvard Crimson",
      points: 16,
      wins: 5,
      speaker: "Maria Rodriguez",
    },
    {
      rank: 4,
      team: "Yale Bulldogs",
      points: 15,
      wins: 4,
      speaker: "Alex Thompson",
    },
    {
      rank: 5,
      team: "Princeton Tigers",
      points: 14,
      wins: 4,
      speaker: "Emma Davis",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
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

      {/* Stats card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-6 p-4 rounded-xl bg-gray-800 text-zinc-400"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">{stat.title}</span>
              <Image src={stat.icon} height={18} width={18} alt="icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-colorText lg:text-xl xl:text-2xl font-bold">
                {stat.value}
              </span>
              <span className="text-sm font-extralight">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action btn tab */}
      <div className="flex flex-col gap-4 p-3 rounded-xl bg-gray-800">
        <div className="mb-3">
          <h2 className="m-0 text-2xl font-bold">Quick Action</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <span className="bg-yellow-500 rounded-md px-3 py-1 text-colorText">
            Create Round
          </span>
          <span className="bg-yellow-500 rounded-md px-3 py-1 text-colorText">
            Manage Teams
          </span>
          <span className="bg-yellow-500 rounded-md px-3 py-1 text-colorText">
            View Results
          </span>
          <span className="bg-yellow-500 rounded-md px-3 py-1 text-colorText">
            Tournament Settings
          </span>
        </div>
      </div>

      <div className="">Leaderboard</div>
      <div className="">Leaderboard</div>
    </div>
  );
};

export default Leaderboard;
