import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ytimg.com/vi/SwmFIn6SdBg/maxresdefault.jpg" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/iOS16-Hero-LSW-rgb5.max-1000x1000-1.png" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.idownloadblog.com/wp-content/uploads/2022/10/iOS-16-Depth-Effect-wallpaper-idownloadblog-mockup.jpg" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/ios-16-screens.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ytimg.com/vi/SwmFIn6SdBg/maxresdefault.jpg" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/iOS16-Hero-LSW-rgb5.max-1000x1000-1.png" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.idownloadblog.com/wp-content/uploads/2022/10/iOS-16-Depth-Effect-wallpaper-idownloadblog-mockup.jpg" alt="" className="h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/ios-16-screens.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt="" className="h-full"/>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
