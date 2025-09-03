import React from "react";
import Image from "next/image";

const TeamManagement = () => {
  const teams = [
    {
      code: "DU-A",
      name: "The Vindicators",
      speakers: ["Fahim Rahman", "Nadia Ahmed", "Rohan Kabir", "Tanjina Islam"],
      institution: "Dhaka University",
      wins: 4,
      loses: 1,
      points: 18,
    },
    {
      code: "NSU-B",
      name: "Rhetoric Rebels",
      speakers: ["Aisha Islam", "Tareq Hassan", "Sadia Zaman", "Mahmud Hasan"],
      institution: "North South University",
      wins: 4,
      loses: 1,
      points: 17,
    },
    {
      code: "BRAC-C",
      name: "Crimson Orators",
      speakers: [
        "Zahid Choudhury",
        "Sonia Parveen",
        "Kazi Faisal",
        "Nusrat Khan",
      ],
      institution: "BRAC University",
      wins: 3,
      loses: 2,
      points: 16,
    },
    {
      code: "CU-D",
      name: "Bengal Tigers",
      speakers: [
        "Nafisa Haque",
        "Kamal Uddin",
        "Arifur Rahman",
        "Shaila Afroz",
      ],
      institution: "Chittagong University",
      wins: 3,
      loses: 2,
      points: 15,
    },
    {
      code: "RU-E",
      name: "Urban Echoes",
      speakers: ["Imran Khan", "Fatema Akter", "Samiul Alam", "Lamia Rahman"],
      institution: "Rajshahi University",
      wins: 2,
      loses: 3,
      points: 14,
    },
    {
      code: "JU-F",
      name: "Jahangirnagar Jolters",
      speakers: [
        "Riad Hossain",
        "Mehnaz Khan",
        "Taufiq Chowdhury",
        "Nabila Haque",
      ],
      institution: "Jahangirnagar University",
      wins: 2,
      loses: 3,
      points: 13,
    },
    {
      code: "BUET-G",
      name: "Tech Titans",
      speakers: [
        "Rafsan Khan",
        "Shirin Sultana",
        "Adnan Siddique",
        "Fariha Hossain",
      ],
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      wins: 2,
      loses: 3,
      points: 12,
    },
    {
      code: "IUT-H",
      name: "IUT Innovators",
      speakers: [
        "Ahmed Sharif",
        "Laila Begum",
        "Junaid Haque",
        "Fahmida Islam",
      ],
      institution: "Islamic University of Technology (IUT)",
      wins: 2,
      loses: 3,
      points: 11,
    },
    {
      code: "AIUB-I",
      name: "AIUB Avengers",
      speakers: ["Shahid Hasan", "Zara Khan", "Moinul Haque", "Sumaiya Akter"],
      institution: "American International University-Bangladesh (AIUB)",
      wins: 1,
      loses: 4,
      points: 10,
    },
    {
      code: "EWU-J",
      name: "East West Eagles",
      speakers: ["Nazmul Islam", "Farah Naz", "Zishan Alam", "Tashfia Kabir"],
      institution: "East West University",
      wins: 1,
      loses: 4,
      points: 9,
    },
    {
      code: "UIU-K",
      name: "United Invincibles",
      speakers: [
        "Arif Chowdhury",
        "Sanjida Rahman",
        "Ashik Iqbal",
        "Nadia Afroz",
      ],
      institution: "United International University (UIU)",
      wins: 1,
      loses: 4,
      points: 8,
    },
    {
      code: "DIU-L",
      name: "Daffodil Dynamos",
      speakers: [
        "Tanjim Bhuiyan",
        "Faria Akhter",
        "Shovon Ahmed",
        "Maliha Hasan",
      ],
      institution: "Daffodil International University (DIU)",
      wins: 1,
      loses: 4,
      points: 7,
    },
    {
      code: "KUET-M",
      name: "Khulna Crusaders",
      speakers: ["Habib Zaman", "Rumana Haque", "Sajid Islam", "Farah Sultana"],
      institution: "Khulna University of Engineering & Technology (KUET)",
      wins: 1,
      loses: 4,
      points: 6,
    },
    {
      code: "SUST-N",
      name: "Sylhet Spikers",
      speakers: [
        "Asif Mahmood",
        "Nusrat Jahan",
        "Imran Sharif",
        "Sadia Rahman",
      ],
      institution: "Shahjalal University of Science and Technology (SUST)",
      wins: 1,
      loses: 4,
      points: 5,
    },
    {
      code: "RUET-O",
      name: "Rajshahi Rockets",
      speakers: ["Mominul Islam", "Priya Das", "Fahim Shahriar", "Israt Jahan"],
      institution: "Rajshahi University of Engineering & Technology (RUET)",
      wins: 0,
      loses: 5,
      points: 4,
    },
    {
      code: "CUET-P",
      name: "Chittagong Champions",
      speakers: [
        "Shovon Saha",
        "Tanzina Tabassum",
        "Akash Chowdhury",
        "Nisha Begum",
      ],
      institution: "Chittagong University of Engineering & Technology (CUET)",
      wins: 0,
      loses: 5,
      points: 3,
    },
    {
      code: "UAP-Q",
      name: "UAP Unity",
      speakers: [
        "Akash Dey",
        "Fahmida Hossain",
        "Rashedul Islam",
        "Tisha Akter",
      ],
      institution: "University of Asia Pacific (UAP)",
      wins: 0,
      loses: 5,
      points: 2,
    },
    {
      code: "GUB-R",
      name: "Green University Gladiators",
      speakers: ["Sajib Ghosh", "Maliha Rahman", "Asif Iqbal", "Nusrat Alam"],
      institution: "Green University of Bangladesh (GUB)",
      wins: 0,
      loses: 5,
      points: 1,
    },
    {
      code: "IUB-S",
      name: "Independent Illuminators",
      speakers: [
        "Rashed Khan",
        "Sanjida Akter",
        "Sajid Hasan",
        "Farhana Akter",
      ],
      institution: "Independent University, Bangladesh (IUB)",
      wins: 0,
      loses: 5,
      points: 0,
    },
    {
      code: "BUP-T",
      name: "BUP Blazers",
      speakers: ["Abrar Fahim", "Sumaiya Kabir", "Zahid Khan", "Sadia Islam"],
      institution: "Bangladesh University of Professionals (BUP)",
      wins: 0,
      loses: 5,
      points: 0,
    },
    {
      code: "IBA-U",
      name: "IBA Mavericks",
      speakers: ["Omar Faruk", "Afia Rahman", "Tarek Aziz", "Farah Khan"],
      institution: "Institute of Business Administration, Dhaka University",
      wins: 0,
      loses: 5,
      points: 0,
    },
    {
      code: "ULAB-V",
      name: "ULAB Lions",
      speakers: [
        "Tamim Iqbal",
        "Nusrat Khan",
        "Mahmudul Hasan",
        "Nafisa Begum",
      ],
      institution: "University of Liberal Arts Bangladesh (ULAB)",
      wins: 0,
      loses: 5,
      points: 0,
    },
    {
      code: "VNS-W",
      name: "VNS Veterans",
      speakers: [
        "Sakib Ahmed",
        "Maria Islam",
        "Imran Hossain",
        "Shaila Parveen",
      ],
      institution: "Viqarunnisa Noon School and College",
      wins: 0,
      loses: 5,
      points: 0,
    },
    {
      code: "ADC-X",
      name: "ADC Achievers",
      speakers: [
        "Rahat Hossain",
        "Farhana Akter",
        "Mizanur Rahman",
        "Sadia Binte Rahman",
      ],
      institution: "Adamjee Cantonment College",
      wins: 0,
      loses: 5,
      points: 0,
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

      {/* team table */}
      <div>
        {/* table head */}
        <div>
          <table>
            <thead>
              <tr className="grid grid-cols-[10%_15%_25%_20%_10%_10%_10%]">
                <td className="p-4 font-bold text-xl">Code</td>
                <td className="p-4 font-bold text-xl">Team Name</td>
                <td className="p-4 font-bold text-xl">Institute</td>
                <td className="p-4 font-bold text-xl">Speakers</td>
                <td className="p-4 font-bold text-xl text-center">Wins</td>
                <td className="p-4 font-bold text-xl text-center">Loses</td>
                <td className="p-4 font-bold text-xl text-center">Points</td>
              </tr>
            </thead>

            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-[10%_15%_25%_20%_10%_10%_10%]"
                >
                  <td className="p-4">{team.code}</td>
                  <td className="p-4">{team.name}</td>
                  <td className="p-4">{team.institution}</td>
                  <td className="p-4">
                    {team.speakers.map((speaker, speakerIndex) => (
                      <span key={speakerIndex} className="block">
                        {speaker + ","}
                      </span>
                    ))}
                  </td>
                  <td className="p-4 text-center font-bold">{team.wins}</td>
                  <td className="p-4 text-center font-bold">{team.loses}</td>
                  <td className="p-4 text-center font-bold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
