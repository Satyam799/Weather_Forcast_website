import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseQuery=fetchBaseQuery({baseUrl:''})

export const Temperatur=createApi({
    baseQuery,
    tagTypes:['Temperatur','City'],
    endpoints:(builder)=>({})
})