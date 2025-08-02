import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV from "../button/ButtonV";
import ButtonR from "../button/ButtonR";

const Footer = () => {
  return (
    <div className="w-6xl h-80 flex justify-center items-center">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-left items-start py-12">
        <div className="flex flex-row space-x-12 sm:space-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
          <div className="flex flex-col">
            <Link href="#">
              <span className="link-text">Home</span>
            </Link>
            <Link href="#">
              <span className="link-text">Docs</span>
            </Link>
            <Link href="#">
              <span className="link-text">Comps</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="#">
              <span className="link-text">Github</span>
            </Link>
            <Link href="#">
              <span className="link-text">Linkedin</span>
            </Link>
            <Link href="#">
              <span className="link-text">Instagram</span>
            </Link>
          </div>
        </div>
        <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[75px] text-rose font-calendas">
          TabMaster
        </h2>
      </div>
    </div>
  );
};

export default Footer;
