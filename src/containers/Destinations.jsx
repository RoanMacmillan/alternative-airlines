import React, { useEffect, useState } from "react";
import CustomSwiper from "../components/CustomSwiper";
import items from "../data/destinations.json";
import arrow from "../assets/icons/arrow-right.svg";

const Destinations = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      const viewportWidth = window.innerWidth;
      const contentWidth = 1230;

      if (viewportWidth >= contentWidth) {
        const newOffset = (viewportWidth - contentWidth) / 2;
        setOffset(newOffset);
      } else {
        setOffset(0);
      }
    };

    calculateOffset();

    window.addEventListener("resize", calculateOffset);

    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  const renderSlide = (item) => {
    return (
      <>
        <div className="overflow-hidden">
          <img
            className=" ease w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
            src={item.image}
            alt={item.heading}
          />
        </div>
        <div className="flex items-center justify-between p-6 md:p-8">
          <div>
            <h2 className="text-base font-normal text-customDarkBlue md:text-xl">
              {item.heading}
            </h2>
            <h3 className="text-sm text-customGray md:text-base">
              {item.subheading}
            </h3>
          </div>

          <div className=" ease flex items-center justify-center rounded-full bg-customBlue p-2 opacity-0 transition duration-700 group-hover:opacity-100 ">
            <img className="arrow w-8" src={arrow} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className=" mt-10 px-0 md:px-[0px] lg:mt-20">
      <div className="mx-auto max-w-[1214px] pl-8 md:pl-[47px]">
        <h2 className="mb-6 text-xl font-medium leading-[28px] text-customDarkBlue md:mb-10">
          Exploring Australia
        </h2>
      </div>

      <CustomSwiper
        className="max-w-1150px px-8 md:px-[47px]"
        items={items}
        spaceBetween={16}
        maxWidth="max-w-[352px]"
        renderSlide={renderSlide}
        slidesPerView={"auto"}
        offsetBefore={offset}
        offsetBeforeAfter={offset}
        breakpoints={{
          800: {
            spaceBetween: 32,
          },
        }}
      />
    </div>
  );
};

export default Destinations;
