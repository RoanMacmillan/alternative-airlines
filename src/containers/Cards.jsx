import React from "react";
import items from "../data/cards.json";

const Cards = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-[1214px] flex-col gap-4 px-8 text-center md:gap-8 md:px-[47px] lg:mt-20 lg:flex-row">
      {items.map((item) => (
        <div
          className="flex flex-col items-center rounded-2xl bg-white p-8 lg:p-10"
          key={item.id}
        >
          <img src={item.image} alt="Card Icon" />

          <h2 className="mt-6 text-lg font-normal text-customDarkBlue md:text-xl">
            {item.heading}
          </h2>

          <p className="mt-2 text-sm text-customGray md:text-base">
            {item.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
