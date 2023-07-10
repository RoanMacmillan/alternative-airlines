import React from "react";
import items from "../data/cancellation.json";

const CancellationGrid = () => {
  return (
    <div className="px-8">
      <div className="bg-white rounded-2xl px-8 pb-8">
        <div className="flex justify-center">
          <div className="text-sm text-white py-2 px-[18px] bg-customGreen rounded-bl-lg rounded-br-lg">
            Recommended
          </div>
        </div>

        <h2 className="text-center text-customDarkBlue text-xl leading-[28px] font-medium mt-6 mb-6">
          Cancellation<br></br>protection
        </h2>
        <p className="text-center text-customGray">
          During these uncertain times we recommend adding Cancellation
          protection to your booking
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              className="bg-customWhite flex items-center justify-center h-[90px] flex-col text-center rounded-lg"
              key={item.id}
            >
              <img src={item.image} alt="Card Icon"></img>

              <p className="text-customGray text-sm leading-[22px] mt-2">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CancellationGrid;
