/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { Error, Loader, SongCard,SpotifySearchArtistBanner,SearchSlider } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import {useGetFullAudioDetailQuery} from '../redux/services/spotify'
import { v4 as uuidv4 } from 'uuid';


const Search = () => {
  const {activeSong, isPlaying} = useSelector((state)=>state.player)
  const {searchTerm} = useParams()

  
  const {data: searchData, isFetching : searchDataFetched, error} = useGetSongsBySearchQuery({searchTerm:searchTerm})
  const {data : spotifyData, isFetching : spotifyDataFetched} = useGetFullAudioDetailQuery({q:searchTerm})

  const topArtistBanner = spotifyData?.artists?.items[0]?.data?.visuals?.avatarImage?.sources[0]?.url
  const topArtistName = spotifyData?.artists?.items[0]?.data?.profile?.name
  const searchedArtistAlbums = spotifyData?.albums?.items
  const searchedArtistPodcast = spotifyData?.playlists?.items
  const searchedArtistPlaylists = spotifyData?.podcasts?.items

  const songs = searchData?.tracks?.hits?.map((song)=>song?.track)

  if(searchDataFetched && spotifyDataFetched) return <Loader title={`Searching Songs`}/>

  if(error) return <Error />


  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-10 text-left">
        Top Results - {searchTerm}
      </h2>

      <div className="flex flex-col flex-wrap sm:justify-start justify-center gap-8">
          <SpotifySearchArtistBanner topArtistBanner={topArtistBanner} topArtistName={topArtistName}/>
      </div>

      <SearchSlider key={`${uuidv4()}`} data={searchedArtistAlbums} title={"Top Artist Albums"}/>
      {/* <SearchSlider key={`${uuidv4()}`} data={searchedArtistPodcast} title={"Top Artist Podcast"}/> */}
      <SearchSlider key={`${uuidv4()}`} data={searchedArtistPlaylists} title={"Top Artist Playlist"}/>


      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song,i)=>(
          <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={searchData}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Search