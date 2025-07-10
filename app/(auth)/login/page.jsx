import React from "react";
import Login_form from "@/components/Login";
import Navbar from "@/components/landing_page/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Login_form className="" />
      </div>
    </div>
  );
}

export default Login;
