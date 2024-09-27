import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Getcity, Getcitydetails, Temperatureapi } from "../utils/api";
import { WEATHER_INTERPRATIONS } from "./weatherdata";

const create = createContext();

function Providerr({ children }) {
  const [isLoading, setisLoading] = useState(true);
  const [name, setname] = useState();
  const [temp, settemp] = useState();
  const [city, setcity] = useState(firstgo);
  const [coord, setcoord] = useState({ lat: "", lng: "" });
 
  
  function weathercode(value){
    const weathersituation = WEATHER_INTERPRATIONS.find((el) =>
      el.codes.find((el) => el === value)
    );

    return weathersituation
  }
 
  function firstgo() {

    navigator.permissions.query({name:'geolocation'}).then(function(result){
      if(result.state === 'granted'){
        navigator.geolocation.getCurrentPosition(async (position) => {
          console.log(position)
          const lat = position?.coords?.latitude;
          const lng = position?.coords?.longitude;
          const data = { lat: lat, lng: lng };
          try {
            const res = await Getcitydetails(data);
            if (res?.address?.city) {
             return  await handelgetcity(res?.address?.city);
            }
          } catch {
            setisLoading(false);
          }
        });
      }else{
        setisLoading(false)
      }
    })
   

   
  }

    async function handelgetcity(data) {
      !isLoading && setisLoading(true);
  
      try {
        const res = await Getcity(data);
        if (!res.results) return;
        setcity(res);
        setcoord({
          lat: res?.results[0]?.latitude,
          lng: res?.results[0]?.longitude,
        });
      } catch (err) {
        setisLoading(false);
        console.log(err);
      }
    }
  

  
  
  useEffect(
    function () {
      async function handelgetTemp() {
        if (coord?.lat && coord?.lng) {
          try {
            const res = await Temperatureapi(coord);
            settemp(res);
            setname('')
            setisLoading(false);

          } catch (err) {
            setisLoading(false);
          }
        }
      }

      handelgetTemp();
    },
    [coord]
  );

  return (
    <create.Provider
      value={{
        name,
        setname,
        temp,
        settemp,
        city,
        setcity,
        handelgetcity,
        isLoading,
        weathercode
      }}
    >
      {children}
    </create.Provider>
  );
}

function Uppost() {
  const context = useContext(create);
  return context;
}

export { Providerr, Uppost };
