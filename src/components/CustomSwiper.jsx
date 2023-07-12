import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";

const CustomSwiper = ({
  items,
  spaceBetween,
  maxWidth,
  height,
  renderSlide,
  breakpoints,
  className,
  slidesPerView,
  offsetBefore,
  offsetBeforeAfter,
  
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={breakpoints} 
      className={className}
      slidesOffsetBefore={offsetBefore}
      slidesOffsetAfter={offsetBeforeAfter}
      
    >
      {items.map((item, index) => (
        <SwiperSlide
          className={`group relative mx-auto cursor-pointer overflow-hidden rounded-xl bg-white ${height} ${maxWidth}`}
          key={index}
        >
          {renderSlide(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
