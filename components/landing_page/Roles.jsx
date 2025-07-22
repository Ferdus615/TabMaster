import React from "react";
import SButton from "../button/SButton";

const Roles = () => {
  return (
    <div className="flex gap-5 px-5 mb-20 mx-auto max-w-6xl">
      <div className="flex flex-col gap-4">
        <SButton text="Debater" link="#" id="debater" />
        <SButton text="Adjudicator" link="#" id="adjudicator" />
        <SButton text="Organizer" link="#" id="organizer" />
        <SButton text="Guest" link="#" id="guest" />
      </div>

      <div className="border-1 bg-emerald-200 rounded-md w-50"></div>
    </div>
  );
};

export default Roles;
