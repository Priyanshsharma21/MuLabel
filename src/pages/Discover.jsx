/* eslint-disable */
import React, { useState } from 'react'
import {Error, Loader, SongCard} from '../components'
import {genres} from '../assets/constants'
import {useDispatch, useSelector} from 'react-redux'
import { selectGenreListId } from '../redux/features/playerSlice'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'

const Discover = () => {
    const dispatch = useDispatch()
    const { genreListId } = useSelector((state) => state.player);
    const { activeSong, isPlaying } = useSelector((state)=>state.player)
    const { data, isFetching, error } = useGetSongsByGenreQuery({genre:genreListId || 'POP'});

    if(isFetching) return <Loader title="Loading songs..."/>
    if(error) return <Error />

    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col text-3xl text-white text-left">

        <h2 className="font-bold mt-5 text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select
         onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
         className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
        {genres.map((genre)=>(
            <option key={genre.value} value={genre.value}>
                {genre?.title}
            </option>
        ))}
        </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((song,i)=>(
                <SongCard 
                    key={song.key} 
                    song={song} 
                    i={i}
                    activeSong={activeSong}
                    data={data}
                    isPlaying={isPlaying}
                />
            ))}
        </div>
    </div>
  )
}

export default Discover





//redux is like a big cake object which have different slices and using useSelector we can select that slice like 

// const { }  = useSelector((cake)=>cake.vanilla)