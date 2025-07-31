"use client";
import Image from "next/image";
import Input from "../formComponents/InputField";
import ButtonForm from "../formComponents/ButtonForm";
import CheckBox from "../formComponents/CheckBox";

const Login = () => {
  return (
    <form action="post" className="grid grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Registration"
        width="150"
        height="150"
      />

      <h1 className="text-2xl/8 font-medium">Log in to your profile</h1>

      <Input label="Email" type="email" id="email" />
      <Input label="Password" type="password" id="password" />

      <div className="flex items-center justify-between">
        <CheckBox label="Remember me" id="remember" />

        <div>
          <a href="/forgot-password" className="form-link-text text-sm">
            Forgot password?
          </a>
        </div>
      </div>

      <ButtonForm text="Login" />

      <p className="mt-4 text-sm text-zinc-text ">
        Don't have an account?{" "}
        <a href="/registration" className="form-link-text">
          Register.
        </a>
      </p>
    </form>
  );
};

export default Login;
