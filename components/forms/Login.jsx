"use client";
import Image from "next/image";
import { React, useState } from "react";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const logIsChecked = (event) => {
    const myCheckeBox = event.target;
    setIsChecked(myCheckeBox.checked);

    if (myCheckeBox.checked) {
      console.log(`The box is checked!`);
    } else {
      console.log(`The box is not checked!`);
    }
  };

  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Registration"
        width="150"
        height="150"
      />

      <h1 className="text-2xl/8 font-medium">Log in to your profile</h1>

      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <label
            htmlFor="remember"
            className="inline-flex cursor-pointer gap-4 items-center text-center hover:cursor-pointer"
          >
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={isChecked}
              onChange={logIsChecked}
              className="appearance-none sr-only peer p-[5px] border-2 rounded-sm"
            />
            <div className="p-[5px] border-2 rounded-sm peer-checked:bg-rose-500 peer-checked:border-rose-500 ease-in-out"></div>
            <span className="text-sm">Remember me</span>
          </label>
        </div>

        <div>
          <a href="/forgot-password" className="text-sm underline">
            Forgot password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-[#10172a] text-white p-2 rounded-lg hover:cursor-pointer hover:bg-zinc-900 transition-colors duration-200"
      >
        Login
      </button>

      <p className="mt-4 text-sm text-zinc-400 ">
        Don't have an account?{" "}
        <a href="/registration" className="text-white underline">
          Register
        </a>
      </p>
    </form>
  );
};

export default Login;
