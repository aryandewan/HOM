import React, { useState } from "react";
import Button from "./Button";

const Contact = ({ id }) => {
  const handleChange = (formData) => {
    const info = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(info, email, message);
  };

  return (
    <section
      id={id}
      className="contact w-full bg-black flex items-center justify-center p-5 md:p-10"
    >
      <div className="w-full flex flex-col xl:flex-row items-center justify-center p-5 md:p-10 rounded-4xl border border-[rgba(255,255,255,0.3)] gap-10">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-9xl font-bold bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text">
            Contact Us
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <form
            className="w-full flex flex-col items-start justify-center gap-5"
            action={handleChange}
          >
            <div className="w-full flex flex-col md:flex-row items-start gap-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="p-5 rounded-full border border-white w-full text-white"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-5 rounded-full border border-white w-full text-white"
              />
            </div>
            <input
              type="text"
              placeholder="Message"
              name="message"
              className="p-5 rounded-full border border-white w-full text-white"
            />
            <Button containerClassName="px-8 py-6 text-xl font-bold w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
