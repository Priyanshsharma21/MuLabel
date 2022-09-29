import React from 'react';
import { FaPauseCircle, FaPlay, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying,activeSong,song,handlePlay,handlePause}) => {
  return(
    <>
      {isPlaying && activeSong.title == song.title ? (
        <FaPauseCircle 
          size={35}
          className="text-gray-300"
          onClick={handlePause}
        />
      ):(
        <FaPlayCircle 
          size={35}
          className="text-gray-300"
          onClick={handlePlay}
        />
      )}
    </>
  )
};

export default PlayPause;
