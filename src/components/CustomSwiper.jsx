import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomSwiper = ({ items, spaceBetween, maxWidth, height, renderSlide }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={'auto'}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="px-8"
    >
      {items.map((item, index) => (
        <SwiperSlide className={`overflow-hidden rounded-xl bg-white ${height} ${maxWidth}`} key={index}>
            {renderSlide(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;

