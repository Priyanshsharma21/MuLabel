import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import {shazamCoreApi} from './services/shazamCore'
import {youtubeApi} from './services/youtube'
import {spotifyApi} from './services/spotify'

export const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath] : youtubeApi.reducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [spotifyApi.reducerPath] : spotifyApi.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
