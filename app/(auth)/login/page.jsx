import React from "react";
import Login_form from "@/components/forms/Login";
import Navbar from "@/components/landing_page/Navbar";

const Login = () => {
  return (
    <div className="flex grow items-center justify-center p-6 md:p-8 lg:p-12">
      <Login_form />
    </div>
  );
};

export default Login;
