import React from "react";
import Registration_Form from "@/components/forms/Registration";
import Navbar from "@/components/landing_page/Navbar";
import Image from "next/image";

const Registration = () => {
  return (
    <div className="flex grow items-center justify-center p-6 md:p-8 lg:p-12">
      <Registration_Form />
    </div>
  );
};

export default Registration;
