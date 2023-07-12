import React, {useEffect, useState} from "react";
import CustomSwiper from "../components/CustomSwiper";
import items from "../data/destinations.json";
import arrow from '../assets/icons/arrow-right.svg'

const Destinations = () => {

  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const calculateOffset = () => {
  //     const viewportWidth = window.innerWidth;
  //     const contentWidth = 1214;  

  //     if (viewportWidth >= 1204) {  
  //       const newOffset = (viewportWidth - contentWidth) / 2;
  //       setOffset(newOffset);
  //     } else {
  //       setOffset(0);  
  //     }
  //   };

  //   calculateOffset();

  //   window.addEventListener('resize', calculateOffset);

  //   return () => window.removeEventListener('resize', calculateOffset);
  // }, []);

  const renderSlide = (item) => {
    return (
      <>
      <div className="overflow-hidden">
        <img
          className=" w-full object-cover ease transition duration-700 group-hover:scale-105 group-hover:brightness-110"
          src={item.image}
          alt={item.heading}
        />
        </div>
        <div className="p-6 md:p-8 flex justify-between items-center">
          <div>
          <h2 className="text-base font-normal text-customDarkBlue md:text-xl"> 
            {item.heading}
          </h2>
          <h3 className="text-sm text-customGray md:text-base">{item.subheading}</h3>
          </div>

          <div className=" p-2 flex items-center justify-center bg-customBlue rounded-full opacity-0 ease transition duration-700 group-hover:opacity-100 ">
        <img className="arrow w-8" src={arrow}/>
        </div>

        </div>
      </>
    );
  };

  return (
    <div className=" px-8 mt-10 lg:mt-20  md:px-[47px]">
      <div className="max-w-[1120px] mx-auto">
      <h2 className="mb-6 text-xl font-medium leading-[28px] text-customDarkBlue md:mb-10">
        Exploring Australia
      </h2>
      </div>

      <CustomSwiper
        items={items}
        spaceBetween={16}
        maxWidth="max-w-[352px]"
        height="h-auto"
        renderSlide={renderSlide}
        // slidesOffsetBefore={offset}
      />
    </div>
  );
};

export default Destinations;
