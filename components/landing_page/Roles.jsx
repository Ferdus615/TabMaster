import React from "react";

const Roles = () => {
  return (
    <section className="flex gap-5 px-5 mb-20 mx-auto max-w-6xl">
      <ul className="flex flex-col gap-8 justify-start">
        <li>
          <a
            href="#"
            id="maste"
            className="bg-violet-700 px-3 py-2 rounded-full hover:bg-rose-700 text-sm font-medium"
          >
            Master
          </a>
        </li>
        <li>
          <a
            href="#"
            id="adj"
            className="bg-violet-700 px-3 py-2 rounded-full hover:bg-rose-700 text-sm font-medium"
          >
            Adjudicator
          </a>
        </li>
        <li>
          <a
            href="#"
            id="debater"
            className="bg-violet-700 px-3 py-2 rounded-full hover:bg-rose-700 text-sm font-medium"
          >
            Debater
          </a>
        </li>
        <li>
          <a
            href="#"
            id="org"
            className="bg-violet-700 px-3 py-2 rounded-full hover:bg-rose-700 text-sm font-medium"
          >
            Organizer
          </a>
        </li>
      </ul>

      <div className="border-1 bg-emerald-200 rounded-md w-50"></div>
    </section>
  );
};

export default Roles;
