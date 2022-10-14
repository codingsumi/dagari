import React from 'react';
import { Autoplay, Zoom, Lazy, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/lazy";
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <>
    <section className="ftco-section testimony-section">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-7 heading-section  text-center">
        <h3 className="subheading">Testimony</h3>
        <h2 className="mb-1">What People Say About Us</h2>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-12">
        <div className="carousel-testimony">
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={100}
        slidesPerView={3}
        loop={true}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Zoom, Lazy, Pagination, Navigation]}
          autoplay
          lazy
        >
        <SwiperSlide>
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="text">
                <div className="line pl-5">
                  <p className="mb-4 pb-1">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="user-img" style={{backgroundImage: 'url(images/testimonials/1.png)'}} />
                  <div className="ml-4">
                    <p className="name">Gabby Smith</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="text">
                <div className="line pl-5">
                  <p className="mb-4 pb-1">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="user-img" style={{backgroundImage: 'url(images/testimonials/1.png)'}} />
                  <div className="ml-4">
                    <p className="name">Floyd Weather</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="text">
                <div className="line pl-5">
                  <p className="mb-4 pb-1">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="user-img" style={{backgroundImage: 'url(images/testimonials/1.png)'}} />
                  <div className="ml-4">
                    <p className="name">James Dee</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="text">
                <div className="line pl-5">
                  <p className="mb-4 pb-1">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="user-img" style={{backgroundImage: 'url(images/testimonials/1.png)'}} />
                  <div className="ml-4">
                    <p className="name">Lance Roger</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="text">
                <div className="line pl-5">
                  <p className="mb-4 pb-1">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="user-img" style={{backgroundImage: 'url(images/testimonials/1.png)'}} />
                  <div className="ml-4">
                    <p className="name">Kenny Bufer</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Testimonials