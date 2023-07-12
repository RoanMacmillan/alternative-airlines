import React from "react";
import trustPilot from "../assets/images/trustpilot.png";
import bgImage from "../assets/images/background-image.jpg";
import Form from "../components/Form";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="flex flex-col items-center justify-center bg-cover bg-center px-8 py-10 text-center text-customDarkBlue md:py-20"
    >
      <h1 className="mt-0 text-2xl font-medium md:mt-0 md:text-[32px] md:leading-10">
        Search and book flights to Australia
      </h1>
      <p className="mt-4 md:text-base">Buy your flights now and pay later</p>
      <img
        className="mt-10 w-[106px]"
        src={trustPilot}
        alt="Trust Pilot Rating"
      ></img>

      <div className="mt-2 flex items-center gap-2 text-[14px] font-normal leading-6">
        <p>TrustScore 4.5</p>
        <div className="h-3 w-[1px] bg-gray-300"></div>
        <p>6,500 reviews</p>
      </div>

      <Form />
    </div>
  );
};

export default Hero;
