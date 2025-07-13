import React from "react";
import Registration_form from "@/components/Registration";
import Navbar from "@/components/landing_page/Navbar";
import Image from "next/image";

function Registration() {
  return (
    <div className="flex grow items-center justify-center p-6 md:p-8 lg:p-12">
      <Registration_form />
    </div>
  );
}

export default Registration;
