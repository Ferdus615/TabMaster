import React from "react";

const Feature = () => {
  return (
    <div className="px-6 mx-auto max-w-6xl my-20">
      <h2 className="text-4xl font-bold text-center mb-20">
        Everything You Need to Run a Tournament – All in One App
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Smart & Customizable Setup",
            desc: "Auto-draws with flexible scoring, tie-breaks, and judging configs.",
          },
          {
            title: "Role-Based User Access",
            desc: "Admins, DCAs, Tab Staff, Judges, Debaters – everyone gets personalized access and tools.",
          },
          {
            title: "Effortless User Experience",
            desc: "Clean interface for setup, draw generation, and result entry. No learning curve.",
          },
          {
            title: "Cloud-Powered Efficiency",
            desc: "Real-time data access and collaboration from anywhere.",
          },
          {
            title: "Debater Profiles - A Lifelong Journey",
            desc: "Track personal progress, stats, and tournament history in one unified profile.",
          },
          {
            title: "Affordable Excellence",
            desc: "Premium features at a fraction of the cost of outdated solutions.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-4 border-2 border-rose-700 rounded-lg bg-[#10172a]"
          >
            <h3 className="font-bold mb-4">{feature.title}</h3>
            <p className="font-light">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
