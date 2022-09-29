/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {artistDemoObject} from '../assets/constants'
import { DetailsHeader, Error, Loader, RelatedSongs,Slider,InfiniteSlider } from '../components';
import { useGetArtistDetailsQuery } 
from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistId } = useParams();

    const {activeSong, isPlaying} = useSelector((state) => state.player)

    const {data : artistData, isFetching: isFetchingArtistDetails,error} = useGetArtistDetailsQuery({artistId:artistId})

    const artistAlbums = Object.values(artistData?.albums ? artistData.albums : [])


    if (isFetchingArtistDetails) return <Loader title="Searching Artist details" />;

    if (error) return <Error />;



    // console.log(artistData)


  return (
    <div className="flex flex-col">

    <DetailsHeader artistId={artistId} artistData={artistData} />

    <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />

    <Slider key={`${artistAlbums[0]?.attributes?.name}123`} artistAlbums={artistAlbums}/>
    </div>
  )
}

export default ArtistDetails