import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../images/img1.jpg'

import fu1 from '../images/fu1.jpg'
import fu3 from '../images/fu3.jpg'
import fu4 from '../images/fu4.jpg'
import fu5 from '../images/fu5.jpg'
import pro1 from '../images/pro1.jpg'
import pro2 from '../images/pro2.jpg'
import pro4 from '../images/pro4.jpg'







// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../files/Demo.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='main'>
      <h1 className='xo2'>Category</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='xo1' src={fu1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu3} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu4} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu5} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu3} alt=""/></SwiperSlide>
         <SwiperSlide><img className='xo1' src={fu4} alt=""/></SwiperSlide>
        <SwiperSlide><img className='xo1' src={fu5} alt=""/></SwiperSlide>
        {/* <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img1} alt=""/></SwiperSlide> */}
      </Swiper>
      <br>
      </br><br></br>

      <h1 className='do21'>Newly Arrived Brands</h1>
      <div className='over'>
   

   <div>
    <div className='demo'>
      <div >
        <img className='do1' src={pro1} alt =""/>
      </div>
      <div>
        <p>Amber Jar</p>
        <h6>Honey best nesctor you <br></br>Wish to get</h6>
      </div>
    </div>
   </div>
   <div className='demo1'>
      <div >
        <img className='do2' src={pro2} alt =""/>
      </div>
      <div>
        <p>Amber Jar</p>
        <h6>Honey best nesctor you <br></br>Wish to get</h6>
      </div>
    </div>
    <div className='demo3'>
      <div >
        <img className='do3' src={pro4} alt =""/>
      </div>
      <div>
        <p>Amber Jar</p>
        <h6>Honey best nesctor you <br></br>Wish to get</h6>
      </div>
    </div>
        
      </div>
      </div>
    </>
  );
}
