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
    <div className="flex flex-col gap-5 px-3 mb-20 mx-auto max-w-6xl">
      <div id="btns" className="flex gap-3">
        {Object.keys(roleAct).map((role) => {
          return (
            <SButton
              key={role}
              text={role}
              id={role}
              onClick={handleRoleClick(role)}
            />
          );
        })}
      </div>

      {selectedRole ? (
        <div
          id="activity"
          className="border-1 bg-emerald-200 rounded-md w-full"
        >
          {Object.entries(roleAct[selectedRole]).map(([key, value]) => {
            return (
              <div className="border-2">
                <h2>{key}</h2>
                <p>{value}</p>
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
