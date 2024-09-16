import { useSwiper } from "swiper/react";

   
   import React from 'react'
   
   function SwiperButtons() {
    const swiper = useSwiper();
    return (
      <div className="slider-buttons">
        <button className="button-left" onClick={() => {swiper.slidePrev()}}>Previous</button>
        <button className="button-right" onClick={() => {swiper.slideNext()}}>Next</button>
      </div>
    );
   }
   
   export default SwiperButtons