/* eslint-disable */
import React from 'react'
import SongBar from './SongBar';


const RelatedSongs = ({data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">
        Related Songs:
      </h1>

      <div className="mt-6 w-full flex flex-col">
        {data?.map((song,i)=>(
          <SongBar 
            song={song}
            key={`${artistId}-${song.key}-${i}`}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs