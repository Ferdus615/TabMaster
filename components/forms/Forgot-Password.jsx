import React from "react";
import Image from "next/image";
import Input from "../formComponents/Input";
import ButtonForm from "../formComponents/ButtonForm";

const ForgotPassword = () => {
  return (
    <form action="post" className="form">
      <Image
        src="/logo-wide-w.svg"
        alt="Forgot Password"
        width={150}
        height={150}
      />

      <h1 className="text-2xl/8 font-medium">Reset your password</h1>

      <div className="text-zinc-text">
        <p className="text-sm">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      <Input label="Email" type="email" />
      <ButtonForm text="Send Link" />

      <div className="text-zinc-text">
        <p className="text-sm pt-4">
          Don't have an account?{" "}
          <a href="/registration" className="form-link-text">
            Register.
          </a>
        </p>

        <p className="text-sm pt-4">
          Remembered your password?{" "}
          <a href="/login" className="form-link-text">
            Log in.
          </a>
        </p>
      </div>

      {/* <div className="text-sm text-zinc-text"></div> */}
    </form>
  );
};

export default ForgotPassword;
