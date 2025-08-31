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
      value: "3/5",
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
      team: "The Vindicators",
      institute: "Dhaka University",
      points: 18,
      wins: 4,
      loses: 1,
    },
    {
      rank: 2,
      team: "Rhetoric Rebels",
      institute: "North South University",
      points: 17,
      wins: 4,
      loses: 1,
    },
    {
      rank: 3,
      team: "Crimson Orators",
      institute: "BRAC University",
      points: 16,
      wins: 3,
      loses: 2,
    },
    {
      rank: 4,
      team: "Bengal Tigers",
      institute: "Chittagong University",
      points: 15,
      wins: 3,
      loses: 2,
    },
    {
      rank: 5,
      team: "Urban Echoes",
      institute: "Rajshahi University",
      points: 14,
      wins: 2,
      loses: 3,
    },
  ];

  const speakerLeaderboard = [
    {
      rank: 1,
      name: "Fahim Rahman",
      team: "The Vindicators",
      institute: "Dhaka University",
      points: 9,
    },
    {
      rank: 2,
      name: "Aisha Islam",
      team: "Rhetoric Rebels",
      institute: "North South University",
      points: 8.5,
    },
    {
      rank: 3,
      name: "Zahid Choudhury",
      team: "Crimson Orators",
      institute: "BRAC University",
      points: 8,
    },
    {
      rank: 4,
      name: "Nafisa Haque",
      team: "Bengal Tigers",
      institute: "Chittagong University",
      points: 7.5,
    },
    {
      rank: 5,
      name: "Imran Khan",
      team: "Urban Echoes",
      institute: "Rajshahi University",
      points: 7,
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
            className="flex flex-col justify-between gap-10 p-4 rounded-xl bg-gray-800 text-zinc-400"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">{stat.title}</span>
              <Image src={stat.icon} height={18} width={18} alt="icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-colorText md:text-xl lg:text-2xl xl:text-3xl font-bold">
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

      {/* Leaderboard tab */}
      <div className="flex flex-row gap-4">
        <div className="bg-gray-800 rounded-xl p-3 w-1/2">
          <span className="font-heading font-bold text-colorText text-xl flex gap-3 items-center">
            <Image
              src="/feature_2-pic/team.svg"
              height={18}
              width={18}
              alt="icon"
            />
            Team Leaderboard
          </span>
          <div className="rounded-xl overflow-hidden mt-7">
            <table>
              <thead>
                <tr className="bg-slate-900">
                  <td className="font-bold">Rank</td>
                  <td className="font-bold">Team Name</td>
                  <td className="font-bold">Wins</td>
                  <td className="font-bold">Loses</td>
                  <td className="font-bold">Points</td>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((info, index) => (
                  <tr key={index}>
                    <td>
                      <span className="bg-rose font-bold flex justify-center items-center rounded-full h-10 w-10">
                        {info.rank}
                      </span>
                    </td>
                    <td className="flex flex-col">
                      <span>{info.team}</span>
                      <span className="font-extralight text-sm">
                        {info.institute}
                      </span>
                    </td>
                    <td>{info.wins}</td>
                    <td>{info.loses}</td>
                    <td className="font-bold">{info.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 w-1/2">
          <span className="font-heading font-bold text-colorText text-xl flex gap-3 items-center">
            <Image
              src="/feature_2-pic/debater.svg"
              height={18}
              width={18}
              alt="icon"
            />
            Speaker Leaderboard
          </span>
          <div className="rounded-xl overflow-hidden mt-7">
            <table>
              <thead>
                <tr className="bg-slate-900">
                  <td className="font-bold">Rank</td>
                  <td className="font-bold">Speaker</td>
                  <td className="font-bold">Team</td>
                  <td className="font-bold">Points</td>
                </tr>
              </thead>
              <tbody>
                {speakerLeaderboard.map((info, index) => (
                  <tr key={index}>
                    <td>
                      <span className="bg-sky font-bold flex justify-center items-center rounded-full h-10 w-10">
                        {info.rank}
                      </span>
                    </td>
                    <td className="flex flex-col">
                      <span>{info.name}</span>
                      <span className="font-extralight text-sm">
                        {info.institute}
                      </span>
                    </td>
                    <td>{info.team}</td>
                    <td className="font-bold">{info.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
