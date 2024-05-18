import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
const About = () => {
  return (
    <div className=" py-14 px-2  " id="about">
      <h2 className="text-3xl text-black font-semibold text-center mb-10 ">
        About
      </h2>
      <div className="flex flex-wrap  gap-4  items-center justify-between">
        <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  ">
          <h3 className="text-4xl px-2">
            Wasl's Tribute to the 1 <br /> Billion Meals Endowment <br />
            Initiative
          </h3>
        </div>
        <div className="flex flex-col text-base w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(45%_-_17px)] pr-4 gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap">
          <p className="break-all">
            Launched by His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice
            President, and Prime Minister of the UAE and Ruler of Dubai. The
            'One B Meals Endowment Tower', the UAE's tallest endowment tower
            located on Sheikh Zayed Road.
          </p>
          <p className="break-all">
            The tower is part of the 1 Billion Meals Endowment initiative's
            projects aimed at growing the endowment assets and achieve the
            highest returns to help provide a food safety net for tens of
            millions of people around the world.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1260: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
          className="ctm_slider"
        >
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-5.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-6.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-7.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-8.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-9.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-10.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-11.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-12.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/gallery/photo-gallery-img-13.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
