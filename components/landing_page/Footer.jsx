import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full p-5 ">
      <div className="grid grid-cols-4 grid-rows-3 mx-auto max-w-6xl">
        <div className="row-1 col-span-5 flex flex-col items-start justify-between gap-10 mb-10 sm:flex-row sm:items-center">
          <div>
            <Image src="/logo-wide-w.svg" width={150} height={150} alt="Logo" />
          </div>

          <div className="flex gap-15 justify-end items-center">
            <a
              href="/registration"
              className="rounded-full border-2 border-zinc-400  bg-violet-700 px-4 py-1 text-sm hover:bg-zinc-900"
            >
              Sign Up
            </a>

            <a
              href="#"
              className="rounded-full border-2 border-zinc-400 bg-rose-700 px-4 py-1 text-sm hover:cursor-pointer hover:bg-zinc-900"
            >
              Try TabMaster
            </a>
          </div>
        </div>

        <div className="row-2 col-span-5 flex text-sm sm:justify-end sm:text-extralight">
          <div className="flex gap-10">
            <div className="flex flex-col gap-3 font-extralight">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">FAQ's</a>
            </div>
            <div className="flex flex-col gap-3 font-extralight">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
            <div className="flex flex-col gap-3 font-extralight">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>

        <div className="row-3 col-span-5 flex flex-col mt-5 text-sm font-light border-t-1 pt-5 gap-2 items-start sm:p-0 sm:gap-0 sm:items-center sm:justify-between md:flex-row">
          <p>© {new Date().getFullYear()} TabMaster. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">
              <Image
                src="/socials/mail.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a href="#">
              <Image
                src="/socials/github.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a href="#">
              <Image
                src="/socials/linkedin.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a href="#">
              <Image
                src="/socials/facebook.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
