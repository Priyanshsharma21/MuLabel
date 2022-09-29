/* eslint-disable */
import React from 'react'
import {searchColor} from '../assets/constants'
import {Link} from 'react-router-dom'
const SpotifySearchArtistBanner = ({topArtistBanner,topArtistName}) => {
  const randomColor = searchColor[Math.floor(Math.random() * searchColor.length)]

  return (
    <div className="w-full h-[330px] xs:mt-16 mt-5">
        <div className="relative h-full w-full rounded-full object-contain bg-black">
            <div className="absolute rounded-3xl h-full w-full"
             style={{background: `linear-gradient(to bottom,#282828bd,${randomColor} )`}} 
            >
            </div>
            <Link to={`/video/${topArtistName}`}>
            <img src={topArtistBanner} alt={topArtistName} className="w-full h-full rounded-3xl object-cover" />
            </Link>
            <Link to={`/video/${topArtistName}`}>
            <p className="font-semibold text-3xl text-white absolute top-[80%] left-[20px]">{topArtistName}</p>
            </Link>
           
        </div>
    </div>
  )
}

export default SpotifySearchArtistBanner