import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const shazamCoreAPi =createApi({
    reducerPath:'shazamCoreAPi',
    baseQuery:fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers)=> {
                headers.set('X-RapidAPI-Key','b44d396f7dmsha3d08e2eb621984p16b2adjsn87b60233702e');
                return headers;
            }
          }),
          endpoints:(builder) =>({
            getTopCharts:builder.query({query:()=> '/charts/world'}),
          }),
          //getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id/${songid}`}),
});
export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
}=shazamCoreAPi;