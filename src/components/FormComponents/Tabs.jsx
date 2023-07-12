import React, { useState } from "react";
import Toggle from "./Toggle";

const FlightOptions = () => {
  const [active, setActive] = useState("Return");

  const handleOnClick = (option) => {
    setActive(option);
  };

  const flightOptions = ["Return", "One way", "Multi-city"];

  return (
    <div className="flex items-center justify-between gap-2 text-[14px] leading-[22px] text-customGray md:justify-start">
      {flightOptions.map((option) => (
        <div
          key={option}
          onClick={() => handleOnClick(option)}
          className={`w-full cursor-pointer rounded-lg border py-[10px] md:w-[unset] md:px-4
                    ${active === option ? "bg-customBlue text-white" : ""}`}
        >
          {option}
        </div>
      ))}

      <div className="ml-auto hidden md:block">Direct flights only</div>

      <Toggle />
    </div>
  );
};

export default FlightOptions;
