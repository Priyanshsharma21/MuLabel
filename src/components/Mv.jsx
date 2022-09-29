/* eslint-disable */
import React from 'react'
import millify from 'millify';

const Mv = ({video}) => {
    // console.log(video)
  return (
    <div>
        <div className="w-full h-[380px] sm:mt-20 mt-5">
            <div className="w-full h-[280px] relative object-cover rounded-xl">
            <iframe className="rounded-xl" width="100%" height="100%" src={`https://www.youtube.com/embed/${video?.video?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>

            <div className="flex flex-col justify-start">
                <p className="font-bold font-xl text-gray-100 mt-2 flex flex-col justify-start">
                    {video?.video?.title}
                </p>
                <p className="font-xl text-gray-300 mt-2 flex  justify-start">
                    {millify(video?.video?.stats?.views)} views
                </p>
                <p className="font-xl text-gray-300 mt-2 flex  justify-start">
                    Channel - {video?.video?.author?.title}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mv