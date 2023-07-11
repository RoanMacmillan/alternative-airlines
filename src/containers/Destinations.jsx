import React from "react";
import CustomSwiper from "../components/CustomSwiper";
import items from "../data/destinations.json";
const Destinations = () => {
  const renderSlide = (item) => {
    return (
      <>
        <img
          className="w-full object-cover"
          src={item.image}
          alt={item.heading}
        />
        <div className="p-6">
          <h2 className="text-base font-normal text-customDarkBlue">
            {item.heading}
          </h2>
          <h3 className="text-sm text-customGray">{item.subheading}</h3>
        </div>
      </>
    );
  };

  return (
    <div className="mb-10">
      <h2 className="mb-6 mt-6 pl-8 text-xl font-medium leading-[28px] text-customDarkBlue">
        Exploring Australia
      </h2>

      <CustomSwiper
        items={items}
        spaceBetween={16}
        maxWidth="max-w-[352px]"
        height='h-auto'
        renderSlide={renderSlide}
      />
    </div>
  );
};

export default Destinations;
