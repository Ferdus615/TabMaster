import React from "react";

const Feature = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Everything You Need to Run a Tournament – All in One App
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "⚙️ Smart Tournament Setup",
            desc: "Easily configure formats like British or Asian Parliamentary, tie-break rules, speaker scoring ranges, and more.",
          },
          {
            title: "👥 Role-Based User Access",
            desc: "Admins, DCAs, Tab Staff, Judges, Debaters – everyone gets personalized access and tools.",
          },
          {
            title: "🧠 Automated Draw Generator",
            desc: "Intelligent power pairing, room assignment, and adjudicator allocation. Manual override included!",
          },
          {
            title: "📝 Real-Time Results Tabulation",
            desc: "Enter scores, verify data, track standings – all live and secure.",
          },
          {
            title: "🏆 Break & Finals Management",
            desc: "Auto-calculate breaks, seed elimination rounds, and record final results seamlessly.",
          },
          {
            title: "📈 Rich Analytics & Reporting",
            desc: "Speaker averages, adjudicator performance, round-by-round breakdowns – exportable too!",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-indigo-600 text-black shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl text-black font-bold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
