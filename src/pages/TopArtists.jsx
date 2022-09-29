/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, ArtistCard,Slider } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

  const {data: topArtistData, isFetching : topArtist, error} = useGetTopChartsQuery()


  if(topArtist) return <Loader title={`Top Artist`}/>

  if(error) return <Error />








  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-10 text-left">
        Discover Top Artist
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {topArtistData?.map((track)=>(
          <ArtistCard 
           key={track.id}
           track={track}
          />
        ))}
      </div>
    </div>
  )
}

export default TopArtists