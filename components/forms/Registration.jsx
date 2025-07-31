import React from "react";
import Image from "next/image";
import Input from "../formComponents/InputField";
import ButtonForm from "../formComponents/ButtonForm";
import DropDownMenu from "../formComponents/DropDownMenu";
import CheckBox from "../formComponents/CheckBox";

const Registration = () => {
  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image src="/logo-wide-w.svg" alt="Logo" width={150} height={150} />
      <h1 className="text-2xl/8 font-medium">Register here</h1>
      <Input label="Email" type="email" id="email" />
      <Input label="Full Name" type="text" id="text" />
      <Input label="Institution" type="text" id="text" />
      <Input label="Password" type="password" id="password" />
      <DropDownMenu
        label="Roles"
        text="Select Role"
        items={["Debater", "Adjudicator", "Organizer", "Guest"]}
      />
      <CheckBox id="agree" label="I agree to the terms & condition." />
      <ButtonForm text="Register" />

      <p className="mt-4 text-sm text-zinc-text">
        Already have an account?{" "}
        <a href="/login" className="form-link-text">
          Login here
        </a>
      </p>

      <p className="mt-2 text-sm text-zinc-text">
        By registering, you agree to our{" "}
        <a href="/terms" className="form-link-text">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="form-link-text">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default Registration;
