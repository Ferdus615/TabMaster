import React from "react";
import Image from "next/image";

const AdjManagement = () => {
  const adjudicators = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      experienceLevel: "Chief Adjudicator",
      assignedRounds: 8,
      totalRounds: 12,
      rating: 4.9,
      specialization: "Asian Parliamentary",
    },
    {
      id: 2,
      name: "Prof. Farida Khan",
      experienceLevel: "Senior Panel",
      assignedRounds: 6,
      totalRounds: 10,
      rating: 4.8,
      specialization: "Asian Parliamentary",
    },
    {
      id: 3,
      name: "Zahid Islam",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 7,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 5,
      name: "Dr. Sajjad Hossain",
      experienceLevel: "Senior Panel",
      assignedRounds: 7,
      totalRounds: 9,
      rating: 4.8,
      specialization: "Asian Parliamentary",
    },
    {
      id: 6,
      name: "Laila Chowdhury",
      experienceLevel: "Panel",
      assignedRounds: 3,
      totalRounds: 6,
      rating: 4.5,
      specialization: "Asian Parliamentary",
    },
    {
      id: 7,
      name: "Mizanur Rahman",
      experienceLevel: "Trainee",
      assignedRounds: 2,
      totalRounds: 4,
      rating: 4.3,
      specialization: "Asian Parliamentary",
    },
    {
      id: 8,
      name: "Priya Das",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 6,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 9,
      name: "Tareq Aziz",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 10,
      name: "Sonia Akter",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 7,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 11,
      name: "Kamrul Hasan",
      experienceLevel: "Senior Panel",
      assignedRounds: 6,
      totalRounds: 10,
      rating: 4.8,
      specialization: "Asian Parliamentary",
    },
    {
      id: 12,
      name: "Nargis Sultana",
      experienceLevel: "Panel",
      assignedRounds: 3,
      totalRounds: 6,
      rating: 4.5,
      specialization: "Asian Parliamentary",
    },
    {
      id: 13,
      name: "Mahmudul Islam",
      experienceLevel: "Trainee",
      assignedRounds: 2,
      totalRounds: 4,
      rating: 4.4,
      specialization: "Asian Parliamentary",
    },
    {
      id: 14,
      name: "Sadia Rahman",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 7,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 15,
      name: "Rashed Bhuiyan",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 16,
      name: "Tasnuva Alam",
      experienceLevel: "Senior Panel",
      assignedRounds: 7,
      totalRounds: 11,
      rating: 4.9,
      specialization: "Asian Parliamentary",
    },
    {
      id: 17,
      name: "Fahim Shahriar",
      experienceLevel: "Trainee",
      assignedRounds: 1,
      totalRounds: 3,
      rating: 4.2,
      specialization: "Asian Parliamentary",
    },
    {
      id: 18,
      name: "Ayesha Siddiqa",
      experienceLevel: "Panel",
      assignedRounds: 6,
      totalRounds: 9,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 19,
      name: "Imran Khan",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 20,
      name: "Nazia Haque",
      experienceLevel: "Senior Panel",
      assignedRounds: 8,
      totalRounds: 12,
      rating: 4.9,
      specialization: "Asian Parliamentary",
    },
    {
      id: 21,
      name: "Shahid Karim",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 7,
      rating: 4.5,
      specialization: "Asian Parliamentary",
    },
    {
      id: 22,
      name: "Sabina Yasmin",
      experienceLevel: "Trainee",
      assignedRounds: 3,
      totalRounds: 5,
      rating: 4.3,
      specialization: "Asian Parliamentary",
    },
    {
      id: 23,
      name: "Raihan Chowdhury",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 24,
      name: "Taslim Ahmed",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 6,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 25,
      name: "Dr. Farhan Mazumder",
      experienceLevel: "Chief Adjudicator",
      assignedRounds: 9,
      totalRounds: 12,
      rating: 5.0,
      specialization: "Asian Parliamentary",
    },
    {
      id: 26,
      name: "Sumaiya Binte Rahman",
      experienceLevel: "Panel",
      assignedRounds: 3,
      totalRounds: 5,
      rating: 4.5,
      specialization: "Asian Parliamentary",
    },
    {
      id: 27,
      name: "Asif Iqbal",
      experienceLevel: "Trainee",
      assignedRounds: 2,
      totalRounds: 4,
      rating: 4.4,
      specialization: "Asian Parliamentary",
    },
    {
      id: 28,
      name: "Tamanna Haque",
      experienceLevel: "Panel",
      assignedRounds: 5,
      totalRounds: 8,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
    {
      id: 29,
      name: "Rasheda Begum",
      experienceLevel: "Senior Panel",
      assignedRounds: 7,
      totalRounds: 10,
      rating: 4.8,
      specialization: "Asian Parliamentary",
    },
    {
      id: 30,
      name: "Zahidul Karim",
      experienceLevel: "Panel",
      assignedRounds: 4,
      totalRounds: 7,
      rating: 4.6,
      specialization: "Asian Parliamentary",
    },
    {
      id: 31,
      name: "Tanzim Hassan",
      experienceLevel: "Trainee",
      assignedRounds: 1,
      totalRounds: 3,
      rating: 4.2,
      specialization: "Asian Parliamentary",
    },
    {
      id: 32,
      name: "Nisha Akter",
      experienceLevel: "Panel",
      assignedRounds: 6,
      totalRounds: 9,
      rating: 4.7,
      specialization: "Asian Parliamentary",
    },
  ];

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
            src="/feature_2-pic/adjudicator.svg"
            height={20}
            width={20}
            alt="trophy"
            className="mr-3"
          />
          <p className="font-bold text-xl font-heading text-rose">
            Adjudicator Management
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
          <span className="bg-yellow-500 rounded-md px-3 py-1 text-colorText flex flex-wrap gap-2 hover:cursor-pointer hover:bg-sky">
            <Image
              src="/feature_2-pic/add.svg"
              height={18}
              width={18}
              alt="icon"
            />
            <p>Add Adjudicator</p>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Exp. Level</td>
              <td>Assigned Rounds</td>
              <td>Round Done</td>
              <td>Rating</td>
            </tr>
          </thead>
          <tbody>
            {adjudicators.map((adj, index) => {
              <tr key={index}>
                <td>ad</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdjManagement;
