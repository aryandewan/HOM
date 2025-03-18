import React, { useEffect, useState } from "react";
import Button from "./Button";
import { BsFillBoxFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const navItems = ["Features", "Pricing", "Testimonials", "Contact"];

const Navbar = ({ isNavOpen, handleNavOpen }) => {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black text-white w-full md:w-1/2 xl:w-1/2 rounded-full flex items-center py-4 px-8 border-3 border-[#3c8736]">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg md:text-2xl font-bold cursor-pointer flex items-center gap-2 justify-center">
          <BsFillBoxFill />
          GreatBox
        </h1>
        {isXL ? (
          <ul className="flex gap-4 font-semibold items-center">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <Button containerClassName="px-4 py-2 text-black">Login</Button>
          </ul>
        ) : (
          <div className="flex items-center gap-4 px-3 py-2">
            <BsThreeDots
              className="text-2xl cursor-pointer font-bold"
              onClick={handleNavOpen}
            />
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
