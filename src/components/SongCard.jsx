/* eslint-disable */
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import {playPause,setActiveSong} from '../redux/features/playerSlice';
import {demoImg} from '../assets/constants'

const SongCard = ({song,i,activeSong,data,isPlaying}) => {
  
  const dispatch = useDispatch();

  const handlePauseClick = ()=>{
    dispatch(playPause(false))
  }
  
  const handlePlayClick = ()=>{
    dispatch(setActiveSong({song,data,i}))
    dispatch(playPause(true))
  }

  return(
    <div className=" mt-16 flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">

    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title ===song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
      <PlayPause
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
      isPlaying={isPlaying}
      activeSong={activeSong}
      />
      </div>
      <img src={song?.images?.coverart ? song.images.coverart : demoImg} alt="song_img"  className="w-full h-full rounded-lg" />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${song?.key}`}>
          {song?.title}
        </Link>
      </p>
      <p className="font-semibold text-lg text-gray-300 hover:text-white hover:underline truncate mt-1">
        <Link to={song?.artists? `/artists/${song?.artists[0]?.adamid}` : '/top-artist'}>
          {song?.subtitle}
        </Link>
      </p>
    </div>
  </div>
  )
  };

export default SongCard;



// If we have cake and in cake we can select piece of cake using useSelector then we have useDispatch to make change in the cake like->

// dispatch(add chocolate chips) -> do something so using selector we can select that change made by dispatch