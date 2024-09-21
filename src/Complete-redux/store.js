import {configureStore} from '@reduxjs/toolkit'
import { Temperatur } from './Apislice'


export const store=configureStore({
    reducer:{
        [Temperatur.reducerPath]:Temperatur.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(Temperatur.middleware),
        devTools:true
})