import React from "react";
import items from "../data/cards.json";

const Cards = () => {
  return (
    <div className="flex flex-col gap-4 px-8 pb-10 pt-10 text-center">
      {items.map((item) => (
        <div
          className="flex flex-col items-center rounded-2xl bg-white p-8"
          key={item.id}
        >
          <img src={item.image} alt="Card Icon" />

          <h2 className="mt-6 text-lg font-normal text-customDarkBlue">
            {item.heading}
          </h2>

          <p className="mt-2 text-sm text-customGray">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
