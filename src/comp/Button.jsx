import React from "react";

const Button = ({ children, containerClassName }) => {
  return (
    <button
      className={`bg-[#67d05e] text-black rounded-full shadow-[0_5px_0_0_rgba(60,135,54,1)] cursor-pointer active:translate-y-[5px] active:shadow-[0_0_0_0_rgba(60,135,54,1)] transition-all duration-300 ${containerClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;
