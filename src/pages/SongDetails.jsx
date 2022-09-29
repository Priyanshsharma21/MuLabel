/* eslint-disable */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';
import {useGetSongVideoQuery} from '../redux/services/youtube'
import { useEffect } from 'react';


const SongDetails = () => {
    const dispatch = useDispatch()
    const [musicVideos, setMusicVideos] = useState([])
    const { songid:songid, id: artistId } = useParams();

    const {activeSong, isPlaying} = useSelector((state) => state.player)

    const {data : songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({songid:songid})
    const [songName] = useState(songData?.title ? songData.title : "hello")
    const [videoDetails,setVideoDetails] = useState([])
    const {data:musicVideo, isFetching:videoFetched} = useGetSongVideoQuery({q:songName})
    const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    // console.log(musicVideo)
    


    if (isFetchingSongDetails && isFetchinRelatedSongs && videoFetched) return <Loader title="Searching song details" />;


    // useEffect(()=>{
    //   const songVideo = musicVideo?.contents?.slice(0,10)?.filter((vid)=>vid.type==='video')[0]?.video
    //   setVideoDetails(songVideo)
    // },[songName,videoDetails?.videoId])
    

    if (error) return <Error />;
    
    

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

  return (
    <div className="flex flex-col">

    <DetailsHeader artistId={artistId} artistData={data} songData={songData}/>


    <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        
        <div className="mt-5">
        {songData?.sections[1]?.type === 'LYRICS' ?  songData?.sections[1]?.text?.map((line,i)=>(
            <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
        )):(
            <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
        )}

        </div>
    </div>
    {/* <div className="flex flex-col flex-wrap sm:justify-start justify-center gap-8">
        <div className="w-full h-[380px] sm:mt-20 mt-5">
            <div className="w-full h-[280px] relative object-cover rounded-xl">
            <iframe className="rounded-xl" width="100%" height="100%" src={`https://www.youtube.com/embed/${videoDetails?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
        </div>
    </div> */}

    <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  )
}

export default SongDetails