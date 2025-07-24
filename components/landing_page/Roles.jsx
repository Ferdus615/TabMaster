import React from "react";
import SButton from "../button/SButton";

const Roles = () => {
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
