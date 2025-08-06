import React from "react";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="max-w-6xl mx-auto mb-30">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="fluid-h">Secure, Scalable, and Reliable</h1>

        <div className="flex flex-col gap-10 justify-center items-center sm:flex-row flex-wrap">
          {[
            {
              key: "001",
              pic: "/cloud.svg",
              title: "Cloud Based",
              desc: "Access from anywhere, on any device with an internet connection.",
            },
            {
              key: "002",
              pic: "/lock.svg",
              title: "Data Security",
              desc: "Encryption and regular backups to keep your tournament data safe",
            },
            {
              key: "003",
              pic: "/rocket.svg",
              title: "Highly Scalable",
              desc: "Built to handle tournaments of any size, from local to international.",
            },
            {
              key: "004",
              pic: "/mobile.svg",
              title: "Responsive Design",
              desc: "A great experience whether you're on a phone, tablet, or desktop",
            },
          ].map((info) => (
            <div key={info.key} className="card-v">
              <Image
                src={info.pic}
                width={85}
                height={85}
                alt="image"
                className="sm:mb-5"
              />
              <div>
                <h3 className="font-bold mb-3">{info.title}</h3>
                <p className="font-extralight text-sm mb-0">{info.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
