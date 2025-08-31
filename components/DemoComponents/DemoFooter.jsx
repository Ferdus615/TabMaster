import React from "react";
import Image from "next/image";
import RButton from "../Button/RButton";

const DemoFooter = () => {
  return (
    <footer className="rounded-md bg-gray-900 p-5 ml-4 sm:px-10 md:px-10 lg:px-20">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <RButton text="Match" />
          <RButton text="Publish" />
        </div>
        <div className="flex gap-5">
          <RButton text="Modify" />
          <RButton text="Delete" />
        </div>
      </div>
    </footer>
  );
};

export default DemoFooter;
