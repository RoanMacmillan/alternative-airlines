import React from "react";
import CustomSwiper from "../components/CustomSwiper";
import items from "../data/blog.json";

const Blog = () => {
  const renderSlide = (item) => {
    return (
      <>
        <img
          className="w-full object-cover custom:hidden"
          src={item.image}
          alt={item.heading}
        />

        <img
          className="hidden w-full object-cover custom:block"
          src={item.imageDesktop}
          alt={item.heading}
        />

        <div className="flex flex-col items-start p-6 custom:absolute custom:top-0 custom:h-full custom:w-[473px] custom:p-[56px] lg:w-[560px]">
          <h2 className="text-xs font-normal text-customGray custom:text-sm custom:leading-[22px] custom:text-white">
            {item.heading}
          </h2>
          <p className="mt-2 text-base text-customDarkBlue custom:mt-4 custom:text-xl custom:text-white">
            {item.paragraph}
          </p>
          <button className="ease mt-auto hidden rounded-xl border-[2px] px-6 py-4 text-sm text-white transition duration-300 group-hover:bg-white group-hover:text-customDarkBlue custom:block">
            Read blog article
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="mt-10 px-8 pb-10 md:px-[47px] lg:mt-20 lg:pb-40">
      <h2 className=" text-base font-medium text-customBlue custom:text-center">
        Blog
      </h2>

      <h3 className="mb-6 mt-2 text-xl font-medium leading-[28px] text-customDarkBlue md:mb-10 custom:text-center custom:text-2xl">
        Alternative Adventures
      </h3>

      <CustomSwiper
        items={items}
        spaceBetween={16}
        maxWidth="max-w-[352px] custom:max-w-[740px] lg:max-w-[875px]"
        height="custom:max-h-[400px] lg:max-h-[475px]"
        renderSlide={renderSlide}
        
      />
    </div>
  );
};

export default Blog;
