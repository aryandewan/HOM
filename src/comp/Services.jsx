import React from "react";

const Services = ({ id }) => {
  return (
    <section
      id={id}
      className="services min-h-dvh w-full bg-black flex items-center justify-center"
    >
      <div className="min-h-dvh w-full flex flex-col items-center justify-center z-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-2xl px-4 py-2 rounded-full border border-white">
            Features
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text">
              STRONG TOOLS
            </h1>
            <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text text-center">
              ENDLESS OPPORTUNITIES
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center justify-center gap-10 w-4/5">
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <h1 className="xl:text-6xl lg:text-4xl text-3xl font-bold text-white">
                START YOUR OWN ASSET-SHARING PLATFORM
              </h1>
            </div>
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <p className="text-white lg:text-xl text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit quasi qui, ab quidem quo animi optio provident porro
                tempore aperiam soluta saepe modi odio, vero cum? At ipsa
                mollitia provident?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-end items-center justify-center gap-10 w-4/5">
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <h1 className="xl:text-6xl lg:text-4xl text-3xl font-bold text-white">
                MAXIMISE YOUR PRODUCTIVITY WITH INTEGRATED TOOLS
              </h1>
            </div>
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <p className="text-white lg:text-xl text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit quasi qui, ab quidem quo animi optio provident porro
                tempore aperiam soluta saepe modi odio, vero cum? At ipsa
                mollitia provident?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center justify-center gap-10 w-4/5">
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <h1 className="xl:text-6xl lg:text-4xl text-3xl font-bold text-white">
                CUSTOMIZE YOUR PLATFORM TO UNIQUE BRANDING
              </h1>
            </div>
            <div className="flex flex-col w-full items-center justify-center p-10 border border-[rgba(255,255,255,0.2)] rounded-4xl">
              <p className="text-white lg:text-xl text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit quasi qui, ab quidem quo animi optio provident porro
                tempore aperiam soluta saepe modi odio, vero cum? At ipsa
                mollitia provident?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
