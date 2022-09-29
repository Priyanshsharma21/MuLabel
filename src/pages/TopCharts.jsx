/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const TopCharts = () => {
  const {activeSong, isPlaying} = useSelector((state)=>state.player)

  
  const {data: topChartData, isFetching : topChart, error} = useGetTopChartsQuery()


  if(topChart) return <Loader title={`Top Chart`}/>

  if(error && country) return <Error />


  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-10 text-left">
        Discover Top Chart
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {topChartData?.map((song,i)=>(
          <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={topChartData}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts