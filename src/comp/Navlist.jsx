import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaXmark } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

const navItems = ["Features", "Pricing", "Testimonials", "Contact"];

const NavList = ({ containerClass, handleNavClose, isNavOpen }) => {
  return (
    <div
      className={`w-full min-h-dvh bg-white text-black flex justify-center items-center ${containerClass}`}
    >
      <div className="fixed top-0 right-0 flex items-end justify-end gap-4 px-3 py-2 m-4">
        <FaXmark
          className="text-3xl cursor-pointer font-bold"
          onClick={handleNavClose}
        />
      </div>
      <div className="flex flex-col gap-10 px-3 py-2 m-4">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <a
              href={`#${item.toLowerCase()}`}
              className="text-3xl font-bold"
              onClick={handleNavClose}
            >
              {item}
            </a>
          </div>
        ))}
        <Button containerClassName="px-8 py-6 text-xl font-bold w-full">
          Login
        </Button>
      </div>
    </div>
  );
};
export default NavList;
