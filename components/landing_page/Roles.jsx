"use client";
import React, { useState } from "react";
import SButton from "../button/SButton";

const Roles = () => {
  const roleAct = {
    Admin: {
      "Full Control": "Manage tournament setup, draws, results, and users.",
      "Manual Overrides":
        "Adjust any automated assignment with conflict warnings.",
    },
    Debater: {
      "Live Schedule": "View your team's schedule, rooms, and opponents.",
      "Track Performance":
        "See your team's results and individual speaker scores after they are released.",
    },
    Adjudicator: {
      "View Assignments":
        "Easily see your assigned debates and panels for each round.",
      "Direct Score Entry":
        "Submit scores directly from your device (if enabled).",
    },
    Organizer: {
      "Hosts the venue":
        "Organizers hosts the team & adjudicators to their respective team by confirming them.",
    },
    Guest: {
      "Track the tournament":
        "Observe the tournaments progression from teams, draws, topics, result etc.",
    },
  };

  const [selectedRole, setSelectedRole] = useState("Admin");

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col flex-warp gap-10 px-3 mb-20 mx-auto max-w-6xl items-center">
      <div className="flex flex-col items-center">
        <h1>A Tailored Experience for Everyone</h1>
        <p>Select a role to see the features designed specifically for you.</p>
      </div>

      <div id="btns" className="flex gap-3">
        {Object.keys(roleAct).map((role) => {
          return (
            <SButton
              key={role}
              text={role}
              id={role}
              onClick={() => handleRoleClick(role)}
            />
          );
        })}
      </div>

      {selectedRole ? (
        <div
          id="activity"
          className="w-6xl flex flex-wrap gap-5 justify-center items-center"
        >
          {Object.entries(roleAct[selectedRole]).map(([key, value]) => {
            return (
              <div key={key} className="card w-90">
                <h2 className="font-bold">{key}</h2>
                <p className="font-light">{value}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Please select a role!</p>
      )}
    </div>
  );
};

export default Roles;
