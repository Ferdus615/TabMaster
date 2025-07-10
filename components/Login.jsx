import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-between items-center gap-20 bg-indigo-600/20 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-xl font-medium text-indigo-600">Login Here</h2>
        <Image
          src="/logo-w.png"
          width="150"
          height="150"
          alt="logo"
          className="-mb-4"
        />
      </div>
      <div className="flex flex-col items-center ">
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="border-1 border-indigo-500 p-2 rounded-md hover:bg-indigo-600 transition-colors mt-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
