import React from "react";
import Image from "next/image";
import Input from "../formComponents/InputField";
import ButtonForm from "../formComponents/ButtonForm";

const Registration = () => {
  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image src="/logo-wide-w.svg" alt="Logo" width={150} height={150} />

      <h1 className="text-2xl/8 font-medium">Register here</h1>

      <Input label="Email" type="email" id="email" />
      <Input label="Full Name" type="text" id="text" />
      <Input label="Institution" type="text" id="text" />
      <Input label="Password" type="password" id="password" />

      <div className="flex flex-col gap-3">
        <label htmlFor="role" className="text-sm">
          Select Role
        </label>
        <select
          id="role"
          name="role"
          required
          className="text-sm border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]"
        >
          <option value="student">Debater</option>
          <option value="teacher">Adjudictor</option>
          <option value="admin">Organizer</option>
        </select>
      </div>

      <ButtonForm text="Register" />

      <p className="mt-4 text-sm text-zinc-400">
        Already have an account?{" "}
        <a href="/login" className="text-white underline">
          Login here
        </a>
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        By registering, you agree to our{" "}
        <a href="/terms" className="text-white underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-white underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default Registration;
