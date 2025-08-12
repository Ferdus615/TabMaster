import React from "react";
import SButton from "../Button/SButton";

const DemoFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-100 w-full border rounded-md bg-persian p-3 sm:px-10 md:px-10 lg:px-20">
      <div className="flex justify-between">
        <div className="flex gap-8 text-sm">
          <SButton text="Match" />
          <SButton text="Publish" />
        </div>
        <div className="flex gap-8 text-sm">
          <SButton text="Modify" />
          <SButton text="Delete" />
        </div>
      </div>
    </footer>
  );
};

export default DemoFooter;
