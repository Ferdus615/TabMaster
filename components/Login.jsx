import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <form action="post" className="grid  grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Registration"
        width={150}
        height={150}
      />

      <h1 className="text-2xl/8 font-medium">Log in to your profile</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base">
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

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-base">
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
        <div className="flex gap-4 items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40 hover:cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        <div>
          <a
            href="/forgot-password"
            className="text-sm underline hover:text-zinc-400 "
          >
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

      <p className="mt-4 text-sm text-zinc-400">
        Don't have an account?{" "}
        <a href="/registration" className="text-white underline">
          Register
        </a>
      </p>
    </form>
  );
};

export default Login;
