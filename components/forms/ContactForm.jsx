import React from "react";
import Image from "next/image";
import Input from "../formComponents/Input";
import ButtonForm from "../formComponents/ButtonForm";
import TextArea from "../formComponents/TextArea";

const ContactForm = () => {
  return (
    <div className="form-div flex items-center justify-center p-6 md:p-8 lg:p-12">
      <form
        action="https://formsubmit.co/fa3cf87a376a9abdbeb3e34a8c9442fd"
        method="POST"
        className="flex flex-col w-full max-w-sm gap-8 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <input type="text" name="_honey" className="hidden" />

        <input
          type="hidden"
          name="_next"
          value="https://tabmaster.netlify.app/thanks"
        />

        <input type="hidden" name="_captcha" value="false" />

        <div className="grid gap-8">
          <Image
            src="/logo-wide-w.svg"
            alt="Contact Form"
            width={150}
            height={150}
          />

          <h1 className="text-2xl/8 font-medium mb-0">Contact Us</h1>

          <span>
            <p className="text-rose font-semibold text-md">
              We’d Love to Hear from You
            </p>

            <p className="text-zinc-text font-light text-m">
              Got a question or an tournament idea? Tell us what’s on your mind
              and we’ll get back to you shortly.
            </p>
          </span>
        </div>
        <div className="grid grid-cols-1 w-full gap-8 sm:grid-cols-2">
          <Input type="text" id="firstname" label="First Name" />
          <Input type="text" id="lastname" label="Last Name" />
          <Input type="email" id="email" label="Email" />
          <Input type="tel" id="phone" label="Phone" />

          <div className="sm:col-span-2">
            <TextArea id="msg" label="Message" rows="3" />
          </div>
        </div>
        <ButtonForm text="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
