import React from "react";
import Button from "./Button";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="hero min-h-dvh w-full relative flex items-center justify-center bg-black"
    >
      <div className="absolute top-0 left-0 min-h-dvh w-full flex flex-col items-center justify-center z-10 gap-10 bg-[url('/images/bg.jpg')] bg-cover bg-center mask-image"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10">
        <div className=" flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center h-full gap">
            <div className="flex flex-col md:flex-row items-center justify-center h-full xl:gap-10 bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text">
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold ">
                YOUR
              </h1>
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold ">
                FILES,
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center h-full xl:gap-10 bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text">
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold ">
                YOUR
              </h1>
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold ">
                AUTHORITY
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center text-white">
          <p className="text-xl md:text-2xl text-center">
            Coordinate and access your files from anywhere, anytime.
          </p>
        </div>
        <Button containerClassName="lg:px-8 lg:py-6 px-6 py-4 lg:text-xl text-base font-bold">
          Start 7 day free trial
        </Button>
      </div>
    </section>
  );
};
export default Hero;
