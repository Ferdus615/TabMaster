import React from "react";
import Image from "next/image";

function ForgotPassword() {
  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Forgot Password"
        width={150}
        height={150}
      />

      <h1 className="text-2xl/8 font-medium">Reset your password</h1>

      <div className="text-sm text-zinc-500">
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

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

      <button
        type="submit"
        className="mt-4 bg-[#10172a] text-white p-2 rounded-lg hover:bg-zinc-900 transition-colors duration-200"
      >
        Send Reset Link
      </button>

      <div className="mt-4 text-sm text-zinc-400 flex flex-col gap-6">
        <p>
          Don't have an account?{" "}
          <a href="/registration" className="text-white underline">
            Register
          </a>
        </p>

        <p>
          Remembered your password?{" "}
          <a href="/login" className="text-white underline">
            Log in
          </a>
        </p>
      </div>

      {/* <div className="text-sm text-zinc-400"></div> */}
    </form>
  );
}

export default ForgotPassword;
