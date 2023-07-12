import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import items from '../data/blog.json';

const SlickBlog = () => {
 
  return (
    <div className='mt-10 md:mt-20'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='px-8 md:px-[47px]'
        
        breakpoints={{
          // when window width is >= 640px
          640: {
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            spaceBetween: 20,
          },
          // when window width is >= 1200px
          1200: {
            spaceBetween: 40,
            centeredSlides: true,
            initialSlide: 1.5,
            
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide className='rounded-xl overflow-hidden max-w-[352px] custom:max-w-[740px] lg:max-w-[875px] relative' key={index}>
            <img className='object-cover custom:hidden' src={item.image} alt={item.heading} />
            <img className='object-cover hidden custom:block' src={item.imageDesktop}></img>

            <div className='max-w-[352px] bg-red-400 custom:absolute custom:top-0 custom:max-w-[740px] lg:max-w-[875px]'>

            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlickBlog;





