import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Autoplay,
  Zoom,
  Lazy,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/lazy";
import "swiper/css/navigation";
import Intro from "../components/Intro";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import Staff from "../components/Staff";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <>
      <section>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[
            Autoplay,
            Zoom,
            Lazy,
            EffectCoverflow,
            Pagination,
            Navigation,
          ]}
          autoplay
          lazy={true}
        >
          <SwiperSlide>
            <LazyLoadImage
              src="./images/slider1.jpg"
              className="img-fluid w-100"
              alt="slider1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src="./images/slider2.jpg"
              className="img-fluid w-100"
              alt="slider2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src="./images/slider3.jpg"
              className="img-fluid w-100"
              alt="slider3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src="./images/slider1.jpg"
              className="img-fluid w-100"
              alt="slider1"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <Intro />
      <Staff />
      <Courses />
      <Testimonials />

      <Counter />
    </>
  );
};

export default Home;
