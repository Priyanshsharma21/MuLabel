/* eslint-disable */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://youtube138.p.rapidapi.com'


export const youtubeApi = createApi({
    reducerPath : 'youtubeApi',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrl,
        prepareHeaders : (headers)=>{
            headers.set('X-RapidAPI-Key',
            '4de1fb24e2mshc6df605b6d6cd40p15efb4jsned3294fc7947')
            return headers;
        }
    }),
    
    endpoints : (builder)=>({
        getSongVideo : builder.query({query : ({q})=>`/search/?q=${q}`}),
    })
})

export const {useGetSongVideoQuery} = youtubeApi