/* eslint-disable */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://shazam-core.p.rapidapi.com/v1'


export const shazamCoreApi = createApi({
    reducerPath : 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrl,
        prepareHeaders : (headers)=>{
            headers.set('X-RapidAPI-Key',
            '01ac09b534msh0355f1979056738p1f0d3fjsnf719f1567440')
            return headers;
        }
    }),
    
    endpoints : (builder)=>({
        getTopCharts : builder.query({query : ()=>`/charts/world`}),

        getSongDetails : builder.query({query : ({songid})=>`/tracks/details?track_id=${songid}`}),

        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),

        getArtistDetails: builder.query({ query: ({artistId}) => `/artists/details?artist_id=${artistId}` }),

        getSongsByCountry: builder.query({ query: ({countryCode}) => `/charts/country?country_code=${countryCode}` }),

        getSongsByGenre: builder.query({ query: ({genre}) => `/charts/genre-world?genre_code=${genre}` }),

        getSongsBySearch: builder.query({ query: ({searchTerm}) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    })
})

export const {useGetTopChartsQuery,useGetSongDetailsQuery, useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetSongsByCountryQuery,useGetSongsByGenreQuery,useGetSongsBySearchQuery} = shazamCoreApi