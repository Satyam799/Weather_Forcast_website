import { Temperatur } from "./Apislice";


const Temperatureslice=Temperatur.injectEndpoints({
    endpoints:(builder)=>({
        getTemperature:builder.query({
            query:(data)=>({
                url:`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
            })
        }),
        getCity:builder.query({
            query:(data)=>({
                url:`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${data.lat}&lon=${data.lng}`

            })
        }),
        searchcity:builder.query({
            query:(data)=>({
                url:`https://geocoding-api.open-meteo.com/v1/search?name=${data}&count=1&language=en&format=json`
            })
        })
    })
})

export const { useLazyGetTemperatureQuery,useLazySearchcityQuery,useGetCityQuery}=Temperatureslice