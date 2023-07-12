import React from "react";
import swap from "../../assets/icons/Swap.png";

const FlightInput = () => {
  return (
    <div className="mt-4 flex flex-col gap-2 customLg:flex-row customLg:justify-between">
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 customLg:w-[472px]">
        <div className="relative w-full cursor-pointer rounded-lg border p-4 text-left md:rounded-r-none">
          <div className="absolute right-[-17px] top-[20px] hidden rounded-full border bg-white p-[6px] md:block">
            <img src={swap} alt="Swap Button" />
          </div>
          <div className="text-[10px] leading-[18px] text-customGray">
            Where from?
          </div>
          <div className="text-sm leading-[22px] text-customDarkBlue">
            London (LON)
          </div>
        </div>

        <div className="w-full cursor-pointer rounded-lg border p-4 text-left md:rounded-l-none md:border-l-0">
          <div className="text-[10px] leading-[18px] text-customGray md:ml-[22px]">
            Where to?
          </div>
          <div className="text-sm leading-[22px] text-customDarkBlue md:ml-[22px]">
            Sydney (SYD)
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-row customLg:w-[420px]">
        <div className="w-full cursor-pointer rounded-lg border p-4 text-left">
          <div className="flex justify-between">
            <div className="text-[10px] leading-[18px] text-customGray">
              Dates
            </div>
            <div className="text-[10px] leading-[18px] text-customGray">
              14 Nights
            </div>
          </div>
          <div className="text-sm leading-[22px] text-customDarkBlue">
            Sat 11 Jun - Sat 25 Jun
          </div>
        </div>

        <div className="w-full cursor-pointer rounded-lg border p-4 text-left">
          <div className="text-[10px] leading-[18px] text-customGray">
            Passengers
          </div>
          <div className="text-sm leading-[22px] text-customDarkBlue">
            2 Adults, Any class
          </div>
        </div>
      </div>

      <button className="mt-2 w-full rounded-lg bg-customBlue py-4 text-[14px] font-medium leading-[22px] text-white customLg:mt-0 customLg:w-[169px]">
        Search flights
      </button>
    </div>
  );
};

export default FlightInput;
