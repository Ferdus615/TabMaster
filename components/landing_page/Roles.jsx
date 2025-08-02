"use client";
import React, { useState } from "react";
import SButton from "../button/SButton";

const Roles = () => {
  const roleAct = {
    Admin: {
      "Tournament Creation":
        "Admin can create, edit, manage & end the tournament.",
      "Full Control": "From tournament setup, draws, results, and users.",
      "Manual Overrides":
        "Adjust any automated assignment with conflict warnings.",
    },
    Debater: {
      "Live Schedule": "View your team's schedule, rooms, and opponents.",
      "Track Performance":
        "See your team's results and individual speaker scores after they are released.",
      "Adjudicator Evaluation":
        "Evaluate the adjudictor of your room with full discretion.",
    },
    Adjudicator: {
      "View Assignments":
        "Easily see your assigned debates and panels for each round.",
      "Direct Score Entry":
        "Submit scores directly from your device (if enabled).",
    },
    Organizer: {
      "Hosts the venue":
        "Organizers hosts the team & adjudicators to their respective team by confirming them from the tournament profile.",
    },
    Guest: {
      "Observe the tournament":
        "Observe the tournaments progression from teams, draws, topics, result etc.",
    },
  };

  const [selectedRole, setSelectedRole] = useState("Admin");

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col flex-warp gap-5 mb-20 px-5 mx-auto max-w-6xl items-center">
      <div className="flex flex-col justify-center items-center mb-3">
        <h2 className="fluid-p font-bold text-center text-violet mb-0">
          A Tailored Experience for Everyone
        </h2>
        <p className="text-lg font-light sm:text-center mb-5">
          Select a role to see the features designed specifically for you.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div
          id="btns"
          className="flex flex-wrap gap-3 p-3 bg-persian rounded-3xl sm:rounded-full"
        >
          {Object.keys(roleAct).map((role) => {
            return (
              <SButton
                key={role}
                text={role}
                id={role}
                onClick={() => handleRoleClick(role)}
                selected={selectedRole === role}
              />
            );
          })}
        </div>

        {selectedRole ? (
          <div id="activity" className="card-grid gap-10">
            {Object.entries(roleAct[selectedRole]).map(([key, value]) => {
              return (
                <div key={key} className="card bg-persian">
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
    </div>
  );
};

export default Roles;
