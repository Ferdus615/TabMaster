import React from "react";
import Registration_form from "@/components/Registration";
import Navbar from "@/components/landing_page/Navbar";
import Image from "next/image";

function Registration() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Registration_form />
      </div>
    </div>
  );
}

export default Registration;
