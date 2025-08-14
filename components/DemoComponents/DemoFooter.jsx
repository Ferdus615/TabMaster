import React from "react";
import Image from "next/image";
import RButton from "../Button/RButton";

const DemoFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-100 w-full border-2 rounded-md bg-persian/40 p-5 sm:px-10 md:px-10 lg:px-20">
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
