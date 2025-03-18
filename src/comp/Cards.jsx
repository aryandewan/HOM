import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import Button from "./Button";

const Cards = ({ title, price, containerClassName, listItems, ptag }) => {
  return (
    <div className={containerClassName}>
      <h1 className="text-2xl opacity-50">{title}</h1>
      <h1 className="text-4xl font-bold">{price}</h1>
      <p className="text-sm opacity-50">{ptag}</p>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CiCircleCheck className="text-green-500" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button containerClassName="w-full px-4 py-2 text-xl font-bold">
        Get Started
      </Button>
    </div>
  );
};
export default Cards;
