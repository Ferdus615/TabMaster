import React from "react";

const TeamPage = () => {
  return (
    <div className="flex justify-center items-center mx-auto max-w-6xl px-6 my-20">
      <table className="min-w-full border border-gray-300 text-center">
        <thead className="bg-theader">
          <tr>
            <th className="border p-3">Team</th>
            <th className="border p-3">Speakers</th>
            <th className="border p-3">Round 1</th>
            <th className="border p-3">Round 2</th>
            <th className="border p-3">Round 3</th>
            <th className="border p-3">Round 4</th>
            <th className="border p-3">Round 5</th>
            <th className="border p-3">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["OIS A", "Aryan, Saima, Tanvir", 3, 2, 3, 1, 3, 12],
            ["Maple B", "Farzana, Jahid, Tazrian", 2, 3, 0, 2, 1, 8],
            ["Sunnydale X", "Zarin, Nehal, Rakib", 1, 1, 2, 3, 2, 9],
            ["Scholars Gold", "Mahin, Rida, Ayaan", 0, 2, 3, 2, 0, 7],
            ["South Breeze Prime", "Mehzabin, Arif, Nusaiba", 3, 0, 1, 0, 3, 7],
            [
              "British Council Alpha",
              "Laila, Rayhan, Nishat",
              2,
              3,
              2,
              3,
              2,
              12,
            ],
          ].map(([team, speakers, r1, r2, r3, r4, r5, total], index) => (
            <tr key={index} className="even:bg-even odd:bg-odd hover:bg-sky">
              <td className="border p-2">{team}</td>
              <td className="border p-2">{speakers}</td>
              <td className="border p-2">{rankText(r1)}</td>
              <td className="border p-2">{rankText(r2)}</td>
              <td className="border p-2">{rankText(r3)}</td>
              <td className="border p-2">{rankText(r4)}</td>
              <td className="border p-2">{rankText(r5)}</td>
              <td className="border p-2 font-semibold">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Converts rank number to text + points format
const rankText = (rank) => {
  const suffix = ["1st", "2nd", "3rd", "4th"];
  return `${suffix[3 - rank]} (${rank})`;
};

export default TeamPage;
