import React from 'react';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';

// Import required modules
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainSlider.css'; // Create a CSS file for custom styles if needed

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination]
});


const MainSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="main-slider"
    >
      <SwiperSlide className="slider-bg-position" style={{ backgroundImage: "url('img/image-1.jpg')" }} data-hash="slide1">
        <h2>Villa</h2>
      </SwiperSlide>
      <SwiperSlide className="slider-bg-position" style={{ backgroundImage: "url('img/image-2.jpg')" }} data-hash="slide2">
        <h2>Bungalow</h2>
      </SwiperSlide>
      <SwiperSlide className="slider-bg-position" style={{ backgroundImage: "url('img/image-3.jpg')" }} data-hash="slide3">
        <h2>Hotel</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
