import React from "react";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="fluid-h">Secure, Scalable, and Reliable</h1>

        <div className="flex flex-col gap-10 justify-center items-center sm:flex-row flex-wrap">
          <div className="p-5 border-1 rounded-2xl h-80 w-60 bg-persian flex flex-col justify-center">
            <Image
              src="/cloud.svg"
              width={85}
              height={50}
              alt="image"
              className="mb-10"
            />
            <h3 className="font-bold mb-3">Cloud-Based</h3>
            <p className="font-light text-sm">
              Access from anywhere, on any device with an internet connection.
            </p>
          </div>
          <div className="p-5 border-1 rounded-2xl h-80 w-60 bg-persian flex flex-col justify-center">
            <Image
              src="/lock.svg"
              width={50}
              height={50}
              alt="image"
              className="mb-10"
            />
            <h3 className="font-bold mb-3">Data Security</h3>
            <p className="font-light text-sm">
              Encryption and regular backups to keep your tournament data safe
            </p>
          </div>
          <div className="p-5 border-1 rounded-2xl h-80 w-60 bg-persian flex flex-col justify-center">
            <Image
              src="/rocket.svg"
              width={65}
              height={50}
              alt="image"
              className="mb-10"
            />
            <h3 className="font-bold mb-3">Highly Scalable</h3>
            <p className="font-light text-sm">
              Built to handle tournaments of any size, from local to
              international.
            </p>
          </div>
          <div className="p-5 border-1 rounded-2xl h-80 w-60 bg-persian flex flex-col justify-center">
            <Image
              src="/mobile.svg"
              width={38}
              height={50}
              alt="image"
              className="mb-10"
            />
            <h3 className="font-bold mb-3">Responsive Design</h3>
            <p className="font-light text-sm">
              A great experience whether you're on a phone, tablet, or desktop.
            </p>
          </div>
          <div className="p-5 border-1 rounded-2xl h-80 w-60 bg-persian flex flex-col justify-center">
            <Image
              src="/mobile.svg"
              width={38}
              height={50}
              alt="image"
              className="mb-10"
            />
            <h3 className="font-bold mb-3">Responsive Design</h3>
            <p className="font-light text-sm">
              A great experience whether you're on a phone, tablet, or desktop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
