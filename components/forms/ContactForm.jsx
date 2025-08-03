import React from "react";
import Input from "../formComponents/Input";

const ContactForm = () => {
  return (
    <div className="form-div">
      <form action="" method="" className="form">
        <Input type="text" id="firstname" label="First Name" />
        <Input type="text" id="lastname" label="Last Name" />
        <Input type="email" id="email" label="Email" />
        <Input type="tel" id="phone" label="Phone" />
        <Input type="textarea" id="message" label="Message" />
      </form>
    </div>
  );
};

export default ContactForm;
