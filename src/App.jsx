import React, { useEffect, useState } from "react";
import Navbar from "./comp/Navbar";
import Hero from "./comp/Hero";
import Services from "./comp/Services";
import Pricing from "./comp/Pricing";
import UserList from "./comp/Userlist";
import Contact from "./comp/Contact";
import NavList from "./comp/Navlist";
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const handleNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleNavClose = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-dvh w-full bg-black">
      <Navbar isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      <>
        {!isXL && (
          <NavList
            containerClass={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
              isNavOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            handleNavClose={handleNavClose}
            isNavOpen={isNavOpen}
          />
        )}
        <Hero id="hero" />
        <Services id="features" />
        <Pricing id="pricing" />
        <UserList id="testimonials" />
        <Contact id="contact" />
      </>
    </main>
  );
};

export default App;
