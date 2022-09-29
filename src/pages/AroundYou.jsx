/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import {getName} from 'country-list'
const GEO_API_KEY = 'at_7Xlh5JZAgjGExp1ojjuMx0J5FJBpn'


const AroundYou = () => {
  const [country,setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const {activeSong, isPlaying} = useSelector((state)=>state.player)

  useEffect(()=>{
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_7Xlh5JZAgjGExp1ojjuMx0J5FJBpn`)
    .then((res)=>setCountry(res?.data?.location?.country))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  },[country])

  const {data: countrySong, isFetching : countrySongFetching, error} = useGetSongsByCountryQuery({countryCode:country})

  const countryName = getName(country)


  if(countrySongFetching && loading) return <Loader title={`Top songs from ${countryName}`}/>

  if(error && country) return <Error />






  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-10 text-left">
        Top songs in {countryName}
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {countrySong?.map((song,i)=>(
          <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={countrySong}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou