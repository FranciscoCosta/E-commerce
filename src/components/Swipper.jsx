import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation  } from 'swiper';
import './Slider.css';



import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";


export default class Swipper extends Component {
  render() {
    return (
      <div className='container-slider'>
        <Swiper modules={[Navigation ]}
        navigation
        speed={800}
        slidesPerView={2}
        loop
        className='myswipper'
        >
            <SwiperSlide className='swipper-slider'>
                <img src={card1} alt="" />
            </SwiperSlide>

            <SwiperSlide className='swipper-slider'>
                <img src={card2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='swipper-slider'>
                <img src={card3} alt="" />
            </SwiperSlide>

        </Swiper>
        
        </div>
    );
  }
}
