import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";



const CustomSwiper = ({


  items,
  spaceBetween,
  maxWidth,
  height,
  renderSlide,
  slidesOffsetBefore,
}) => {

  

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className=""
      // initialSlide={1}
      // centeredSlides={true}
      
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
