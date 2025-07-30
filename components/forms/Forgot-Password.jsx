import React from "react";
import Image from "next/image";
import Input from "../formComponents/InputField";
import ButtonForm from "../formComponents/ButtonForm";

const ForgotPassword = () => {
  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Forgot Password"
        width={150}
        height={150}
      />

      <h1 className="text-2xl/8 font-medium">Reset your password</h1>

      <div className="text-sm text-zinc-text">
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      <Input label="Email" type="email" />
      <ButtonForm text="Send Link" />

      <div className="mt-4 text-sm text-zinc-text flex flex-col gap-6">
        <p>
          Don't have an account?{" "}
          <a href="/registration" className="form-link-text">
            Register
          </a>
        </p>

        <p>
          Remembered your password?{" "}
          <a href="/login" className="form-link-text">
            Log in
          </a>
        </p>
      </div>

      {/* <div className="text-sm text-zinc-text"></div> */}
    </form>
  );
}

export default ForgotPassword;
