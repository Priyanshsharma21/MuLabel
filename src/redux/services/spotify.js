/* eslint-disable */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://spotify23.p.rapidapi.com'


export const spotifyApi = createApi({
    reducerPath : 'spotifyApi',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrl,
        prepareHeaders : (headers)=>{
            headers.set('X-RapidAPI-Key',
            '01ac09b534msh0355f1979056738p1f0d3fjsnf719f1567440')
            return headers;
        }
    }),
    
    endpoints : (builder)=>({
        getFullAudioDetail : builder.query({query : ({q})=>`/search/?q=${q}&type=multi&limit=10`}),
    })
})

export const {useGetFullAudioDetailQuery} = spotifyApi