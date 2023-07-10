import React from "react";
import items from "../data/cards.json";

const Cards = () => {
  return (
    <div className="px-8 pt-10 pb-10 text-center flex flex-col gap-4">
      {items.map((item) => (
        <div
          className="bg-white rounded-2xl flex flex-col items-center p-8"
          key={item.id}
        >
          <img src={item.image} alt="Card Icon"></img>

          <h2 className="mt-6 text-customDarkBlue text-lg font-normal">
            {item.heading}
          </h2>

          <p className="text-customGray text-sm mt-2">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
