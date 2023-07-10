import React from "react";
import trustPilot from "../assets/images/trustpilot.png";
import bgImage from "../assets/images/background-image.jpg";
import Form from "../components/Form";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="text-customDarkBlue text-center px-8 py-10 flex justify-center flex-col items-center bg-cover bg-center"
    >
      <h1 className="text-2xl font-medium">
        Search and book flights to Australia
      </h1>
      <p className="mt-4">Buy your flights now and pay later</p>
      <img
        className="w-[106px] mt-10"
        src={trustPilot}
        alt="Trust Pilot Rating"
      ></img>

      <div className="flex items-center text-[14px] gap-2 leading-6 font-normal mt-2">
        <p>TrustScore 4.5</p>
        <div className="w-[1px] h-3 bg-gray-300"></div>
        <p>6,500 reviews</p>
      </div>

      <Form />
    </div>
  );
};

export default Hero;
