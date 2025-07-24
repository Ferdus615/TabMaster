"use client";
import React from "react";
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

  return (
    <div className="flex flex-col gap-5 px-3 mb-20 mx-auto max-w-6xl">
      <div className="flex gap-3">
        <SButton text="Debater" link="#" id="debater" className="text-sm" />
        <SButton
          text="Adjudicator"
          link="#"
          id="adjudicator"
          className="text-sm"
        />
        <SButton text="Organizer" link="#" id="organizer" className="text-sm" />
        <SButton text="Guest" link="#" id="guest" className="text-sm" />
      </div>

      <div className="border-1 bg-emerald-200 rounded-md w-full"></div>
    </div>
  );
};

export default Roles;
