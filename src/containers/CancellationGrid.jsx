import React from "react";
import items from "../data/cancellation.json";

const CancellationGrid = () => {
  return (
    <div className="px-8">
      <div className="rounded-2xl bg-white px-8 pb-8">
        <div className="flex justify-center">
          <div className="rounded-bl-lg rounded-br-lg bg-customGreen px-[18px] py-2 text-sm text-white">
            Recommended
          </div>
        </div>

        <h2 className="mb-6 mt-6 text-center text-xl font-medium leading-[28px] text-customDarkBlue">
          Cancellation<br></br>protection
        </h2>
        <p className="text-center text-customGray">
          During these uncertain times we recommend adding Cancellation
          protection to your booking
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              className="flex h-[90px] flex-col items-center justify-center rounded-lg bg-customWhite text-center"
              key={item.id}
            >
              <img src={item.image} alt="Card Icon"></img>

              <p className="mt-2 text-sm leading-[22px] text-customGray">
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
