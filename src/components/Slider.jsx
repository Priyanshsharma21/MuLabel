/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import {demoImg} from '../assets/constants'

import 'swiper/css';
import 'swiper/css/free-mode';


const Slider = ({artistAlbums}) => {
    // console.log(artistAlbums)
    
  return (
    <div>
    <div className="w-full flex flex-col mt-16">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Artist Album's</h2>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {artistAlbums?.map((artist) => (
            <SwiperSlide
              key={artist?.attributes?.id}
              style={{ width: '20%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
                <Link to={`/video/${artist?.attributes?.name}`}>
                <img src={artist.id ? artist?.attributes?.artwork?.url.replace('{w}', '500')
            .replace('{h}', '500') : demoImg} alt="Name" className="rounded-full w-full object-cover" />
                </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider

