"use client";
import Link from "next/link";
import React from "react";
import slide1 from "@/public/images/food-slide-1.jpg";
import slide2 from "@/public/images/food-slide-2.jpg";
import slide3 from "@/public/images/food-slide-3.jpg";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const slides = [
    { imageUrl: slide1, href: "#" },
    { imageUrl: slide2, href: "#" },
    { imageUrl: slide3, href: "#" },
    { imageUrl: slide2, href: "#" },
  ];

  return (
    <section className="bglight py-11">
      <div className="wrapper flex items-center">
        <div className="lg:w-4/12 w-full">
          <h3 className="font-bold lg:text-[40px] text-3xl mb-2">
            50+ Mouthwatering Meals
          </h3>
          <p className="font-medium text-base text-[#616161] mb-8">
            Our chefs have crafted a variety of delicious dishes that will
            inspire your next order.
          </p>
          <Link
            href="/shop"
            className="bg-primary   border border-primary text-white text-center py-3 px-10 text-base font-semibold hover:bg-black transition-all"
          >
            Explore More
          </Link>
        </div>
        <div className="lg:w-8/12 lg:block hidden">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            navigation={true}
            centeredSlides={true}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide) => {
              return (
                <SwiperSlide key={slide.href}>
                  <Link href={slide.href}>
                    <Image
                      src={slide.imageUrl}
                      alt="Slide"
                      width="372"
                      height="486"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
