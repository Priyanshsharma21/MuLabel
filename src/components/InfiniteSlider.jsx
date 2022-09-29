/* eslint-disable */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { EffectCoverflow, Pagination,EffectFade,Navigation } from "swiper";

const InfiniteSlider = ({artistAlbums}) => {
  return (
    <div>
    <div className="w-full flex flex-col mt-16">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Artist Album's</h2>
        </div>

        <Swiper
         spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        >
          {artistAlbums?.map((artist) => (
            <SwiperSlide
              key={artist?.attributes?.id}
              style={{ width: '20%', height: 'auto' }}
            //   className="shadow-lg rounded-full animate-slideright"
            className="swiper_slide flex flex-col swiper-slide"
            >
                <Link to={`/video/${artist?.attributes?.name}`}>
                <img src={artist.id ? artist?.attributes?.artwork?.url.replace('{w}', '500')
                .replace('{h}', '500') : demoImg} alt="Name" className="rounded-full w-full inf_img object-cover" />
                </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default InfiniteSlider