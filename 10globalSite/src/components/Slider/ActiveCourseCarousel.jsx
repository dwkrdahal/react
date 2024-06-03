import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ActiveCourseCarousel = () => {
  return (
    <OwlCarousel
      className="active_course"
      loop
      margin={20}
      items={3}
      nav
      autoplay
      smartSpeed={1500}
      dots={false}
      responsive={{
        0: {
          items: 1,
          margin: 0
        },
        991: {
          items: 2,
          margin: 30
        },
        1200: {
          items: 3,
          margin: 30
        }
      }}
      navText={[
        "<img src='https://colorlib.com/preview/theme/edustage/img/prev.png'>",
        "<img src='https://colorlib.com/preview/theme/edustage/img/next.png'>"
      ]}
    >
      {/* Add your carousel items here */}
      <div className="item"><h4>1</h4></div>
      <div className="item"><h4>2</h4></div>
      <div className="item"><h4>3</h4></div>
      {/* ... */}
    </OwlCarousel>
  );
};

export default ActiveCourseCarousel;
