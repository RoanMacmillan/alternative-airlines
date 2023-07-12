import React from "react";
import items from "../data/cancellation.json";
import phoneImage from '../assets/images/cp-mobile.png'

const CancellationGrid = () => {
  return (
    <div className="mx-auto max-w-[1214px] mt-10 px-8 md:px-[47px] relative overflow-hidden lg:mt-20">
      <div className="rounded-2xl bg-white px-8 pb-8 lg:flex lg:justify-between lg:p-0 group">
        <div className="flex justify-center items-start lg:ml-[146px] customLg:ml-[196px]">
          <div className="rounded-bl-lg rounded-br-lg bg-customGreen px-[18px] py-2 text-sm text-white">
            Recommended
          </div>

          <img className="absolute top-[103px] hidden lg:block w-[294px] ease transition duration-700 group-hover:scale-105" src={phoneImage} alt='Mobile Phone'/>

        </div>

        <div className="lg:w-[560px] lg:p-14">
          <h2 className="mb-6 mt-6 text-center text-xl font-medium leading-[28px] text-customDarkBlue lg:mt-0 lg:text-left">
            Cancellation<br className="lg:hidden"></br> protection
          </h2>
          <p className="text-center text-customGray lg:text-left">
            During these uncertain times we recommend adding Cancellation
            protection to your booking
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div
                className="flex h-[90px] px-2 flex-col items-center justify-center rounded-lg bg-customWhite text-center"
                key={item.id}
              >
                <img src={item.image} alt="Card Icon"></img>

                <p className="mt-2 text-sm leading-[18px] text-customGray">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationGrid;
