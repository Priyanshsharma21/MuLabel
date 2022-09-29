/* eslint-disable */
import React from 'react'
import {useParams} from 'react-router-dom'
import { Error, Loader,Mv,SearchSlider } from '../components'
import {useGetSongVideoQuery} from '../redux/services/youtube'
import {useGetFullAudioDetailQuery} from '../redux/services/spotify'
import { v4 as uuidv4 } from 'uuid';


const MusicVideo = () => {
    const {songName} = useParams()
    const {data:musicVideos, isFetching:isMusicVideoFetching, error} = useGetSongVideoQuery({q:songName})
    const {data : spotifyData, isFetching : spotifyDataFetched} = useGetFullAudioDetailQuery({q:songName})

    const searchedArtistAlbums = spotifyData?.albums?.items
    const searchedArtistPodcast = spotifyData?.podcasts?.items
    const searchedArtistPlaylists = spotifyData?.playlists?.items
    const searchedArtistArtist = spotifyData?.artists?.items
    const searchedArtistEpisode = spotifyData?.episodes?.items
    const searchedArtistGenres = spotifyData?.genres?.items
    const searchedArtistTopt = spotifyData?.topResults?.items
    const searchedArtistTracks = spotifyData?.tracks?.items

    const topVideoResult = musicVideos?.contents?.slice(0,3)

    if(isMusicVideoFetching && spotifyDataFetched) return <Loader title={`Fetching Music Video For - ${songName}`}/>

    if(error) return <Error />

  return (
    <div className="flex flex-col">
        <h2 className="font-bold text-white text-2xl mt-4 mb-10 text-left">
            Top Result's - "{songName}"
         </h2>

         <div className="flex flex-col flex-wrap sm:justify-start justify-center gap-8">
            {topVideoResult?.map((mv,i)=>(
                <Mv 
                    video={mv}
                    i={i}
                />
            ))}
        </div>

        <SearchSlider key={`${uuidv4()}`} data={searchedArtistAlbums} title={"Top Artist Albums"}/>
        <SearchSlider key={`${uuidv4()}`} data={searchedArtistPodcast} title={"Top Artist Podcast"}/>
        <SearchSlider key={`${uuidv4()}`} data={searchedArtistPlaylists} title={"Top Artist Playlist"}/>
        {/* <SearchSlider key={`${uuidv4()}`} data={searchedArtistArtist} title={"Top Artist"}/> */}
        <SearchSlider key={`${uuidv4()}`} data={searchedArtistEpisode} title={"Top Artist Episode"}/>
        {/* <SearchSlider key={`${uuidv4()}`} data={searchedArtistGenres} title={"Top Artist Genre"}/> */}
        {/* <SearchSlider key={`${uuidv4()}`} data={searchedArtistTopt} title={"Top Artist With Name"}/> */}
         {/* <SearchSlider key={`${uuidv4()}`} data={searchedArtistTracks} title={"Top Artist Tracks"}/> */}

    </div>
  )
}

export default MusicVideo