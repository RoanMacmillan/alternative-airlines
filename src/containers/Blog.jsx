import React from "react";
import CustomSwiper from "../components/CustomSwiper";
import items from "../data/blog.json";

const Blog = () => {
  const renderSlide = (item) => {
    return (
      <>
        <img
          className="w-full object-cover"
          src={item.image}
          alt={item.heading}
        />
        <div className="p-6">
          <h2 className="text-xs font-normal text-customGray">
            {item.heading}
          </h2>
          <p className="text-base text-customDarkBlue">{item.paragraph}</p>
        </div>
      </>
    );
  };

  return (
    <div className="mt-10 pb-10 lg:mt-20 lg:pb-40">
      <h2 className="pl-8 text-base font-medium text-customBlue md:text-center">Blog</h2>

      <h3 className="mb-6 mt-2 pl-8 text-xl font-medium leading-[28px] text-customDarkBlue md:text-center md:text-2xl">
        Alternative Adventures
      </h3>

      <CustomSwiper
        items={items}
        spaceBetween={16}
        maxWidth="max-w-[740px]"
        height="h-[400px]"
        renderSlide={renderSlide}
      />
    </div>
  );
};

export default Blog;
