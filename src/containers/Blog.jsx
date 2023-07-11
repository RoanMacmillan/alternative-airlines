import React from 'react'
import CustomSwiper from '../components/CustomSwiper'
import items from '../data/blog.json'

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
            <h2 className="text-base font-normal text-customDarkBlue">
              {item.heading}
            </h2>
            <p className="text-sm text-customGray">{item.paragraph}</p>
          </div>
        </>
      );
    };
  
    return (
      <div className="mb-10">
        <h2 className="mb-6 mt-6 pl-8 text-xl font-medium leading-[28px] text-customDarkBlue">
          Alternative Adventures
        </h2>
  
        <CustomSwiper
          items={items}
          spaceBetween={16}
          maxWidth="max-w-[740px]"
          height='h-[400px]'
          renderSlide={renderSlide}
        />
      </div>
    );
  };



export default Blog 
