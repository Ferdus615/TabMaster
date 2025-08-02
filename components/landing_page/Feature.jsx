import React from "react";

const Feature = () => {
  return (
    <div className="px-6 mx-auto max-w-6xl my-30">
      <h2 className="text-4xl font-semibold sm:text-center mb-5">
        Everything You Need to Run a Tournament – All the Features in One App
      </h2>
      <p className="text-lg font-light sm:text-center mb-15">
        Explore the core features that makes TabMaster so powerfull.
      </p>
      <div className="card-grid">
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
          <div key={index} className="card">
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="font-light text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
