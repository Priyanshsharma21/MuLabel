/* eslint-disable */
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useGetArtistDetailsQuery} from '../redux/services/shazamCore'

const ArtistCard = ({track}) => {
  const navigate = useNavigate()
  const artistId = track?.artists[0]?.adamid
  const {data : artistData, isFetching, error} = useGetArtistDetailsQuery({artistId:artistId})
  const imgPresent = artistData?.artists[artistId].attributes?.artwork?.url
  .replace('{w}', '500')
  .replace('{h}', '500')


  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    onClick={()=>navigate(`/artists/${track?.artists[0]?.adamid}`)}
    >
    <img alt="song_img" src={imgPresent ? artistData?.artists[artistId].attributes?.artwork?.url
    .replace('{w}', '500')
    .replace('{h}', '500') : track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  )
}

export default ArtistCard