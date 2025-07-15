import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full p-10 bg-[#10172a]/20">
      <div className="mx-auto max-w-6xl grid grid-cols-5 gap-5 mb-10">
        <div className="col-span-3 ">
          <Image src="/logo-wide-w.svg" width={150} height={150} alt="Logo" />
        </div>

        <div className="col-span-2 flex flex-col gap-10">
          <div className="flex gap-15 justify-end items-center">
            <a
              href="#"
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

          <div className="flex gap-10 justify-end">
            <div className="flex flex-col gap-3 font-light">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">FAQ's</a>
            </div>
            <div className="flex flex-col gap-3 font-light">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
            <div className="flex flex-col gap-3 font-light">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col md:flex-row justify-between items-center mt-5 text-sm font-light">
        <p>© {new Date().getFullYear()} TabMaster. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Gmail</a>
          <a href="#">GitHub</a>
          <a href="#">Linkedin</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
