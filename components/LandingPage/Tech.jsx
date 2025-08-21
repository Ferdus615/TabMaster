import React from "react";
import Image from "next/image";

const Tech = () => {
  const infos = [
    {
      key: "001",
      pic: "/tech-pic/cloud.svg",
      title: "Cloud Based",
      desc: "Access from anywhere, on any device with an internet connection.",
      height: 85,
      width: 85,
    },
    {
      key: "002",
      pic: "/tech-pic/lock.svg",
      title: "Data Security",
      desc: "Encryption and prepetually saves and backups to keep your tournament data safe",
      height: 50,
      width: 50,
    },
    {
      key: "003",
      pic: "/tech-pic/rocket.svg",
      title: "Highly Scalable",
      desc: "Built to handle tournaments of any size, from local to international.",
      height: 65,
      width: 65,
    },
    {
      key: "004",
      pic: "/tech-pic/mobile.svg",
      title: "Responsive Design",
      desc: "A great experience whether you're on a phone, tablet, or desktop",
      height: 38,
      width: 38,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-20">
      <h1 className="fluid-h gradient-ipp-text mt-15">
        Secure - Scalable - and Reliable
      </h1>

      <div className="card-div">
        {infos.map((info) => (
          <div key={info.key} className="feature-card">
            <Image
              src={info.pic}
              width={info.width}
              height={info.height}
              alt="icon"
              className="sm:mb-5 md:mb-10"
            />
            <div>
              <h3 className="font-bold mb-3">{info.title}</h3>
              <p className="font-extralight text-sm mb-0">{info.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
