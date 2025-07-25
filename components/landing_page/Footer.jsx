import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV from "../button/ButtonV";
import ButtonR from "../button/ButtonR";

function Footer() {
  return (
    <footer className="w-full p-5">
      <div className="grid grid-cols-4 grid-rows-3 mx-auto max-w-6xl">
        <div className="row-1 col-span-5 flex flex-col items-start justify-between gap-10 mb-10 sm:flex-row sm:items-center">
          <div>
            <Image src="/logo-wide-w.svg" width={150} height={150} alt="Logo" />
          </div>

          <div className="flex gap-15 justify-end items-center">
            <ButtonR text="Sign Up" link="/registration" />
            <ButtonV text="Try TabMaster" link="" />
          </div>
        </div>

        <div className="row-2 col-span-5 flex text-sm sm:justify-end sm:text-extralight">
          <div className="flex gap-10">
            <div className="flex flex-col gap-3 font-extralight">
              <Link href="#" className="link-text">
                About Us
              </Link>
              <Link href="#" className="link-text">
                Contact
              </Link>
              <Link href="#" className="link-text">
                FAQ's
              </Link>
            </div>
            <div className="flex flex-col gap-3 font-extralight">
              <Link href="#" className="link-text">
                Features
              </Link>
              <Link href="#" className="link-text">
                Pricing
              </Link>
            </div>
            <div className="flex flex-col gap-3 font-extralight">
              <Link href="#" className="link-text">
                Privacy Policy
              </Link>
              <Link href="/terms" className="link-text">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>

        <div className="row-3 col-span-5 flex flex-col mt-5 text-sm font-light border-t-1 pt-5 gap-2 items-start sm:p-0 sm:gap-0 sm:items-center sm:justify-between md:flex-row">
          <p>© {new Date().getFullYear()} TabMaster. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://mail.google.com/mail/?view=cm&to=feriqra007@gmail.com&su=Hello%20Ferdus&body=I%20want%20to%20ask%20you...%20"
              target="_blank"
            >
              <Image
                src="/socials/mail.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a href="https://www.github.com/ferdus615" target="_blank">
              <Image
                src="/socials/github.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a href="https://www.linkedin.com/in/ferdus615" target="_blank">
              <Image
                src="/socials/linkedin.svg"
                width="15"
                height="15"
                alt="gmail"
              />
            </a>
            <a
              href="https://www.facebook.com/NationalDebatefederationbd"
              target="_blank"
            >
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
