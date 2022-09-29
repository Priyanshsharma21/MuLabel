/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import {demoImg} from '../assets/constants'
import {useGetSongVideoQuery} from '../redux/services/youtube'


import 'swiper/css';
import 'swiper/css/free-mode';


const SearchSlider = ({data,title}) => {
    // console.log(artistAlbums)
    
  return (
    <div>
    <div className="w-full flex flex-col mt-16">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">{title}</h2>
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
          {data?.map((data) => (
            <>
            <SwiperSlide
              key={data?.data?.uri}
              style={{ width: '20%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
                <Link to={`/video/${data?.data?.name}`}>
                <img src={data?.data?.coverArt?.sources[0].url ? data?.data?.coverArt?.sources[0].url : data?.data?.images?.items[0]?.sources[0]?.url} alt="Name" className="rounded-full w-full object-cover" />
                </Link>
                
            </SwiperSlide>
            <p className="font-semibold text-gray-300">
                {data?.data?.name}
            </p>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SearchSlider
