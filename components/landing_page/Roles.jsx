import React from "react";
import VButton from "../button/SButton";

const Roles = () => {
  return (
    <div className="flex gap-5 px-5 mb-20 mx-auto max-w-6xl">
      <div className="flex flex-col gap-4">
        <VButton text="Debater" link="#" id="debater" />
        <VButton text="Adjudicator" link="#" id="adjudicator" />
        <VButton text="Organizer" link="#" id="organizer" />
        <VButton text="Guest" link="#" id="guest" />
      </div>

      <div className="border-1 bg-emerald-200 rounded-md w-50"></div>
    </div>
  );
};

export default Roles;
