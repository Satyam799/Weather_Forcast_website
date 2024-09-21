import { createContext, useContext, useEffect, useState } from "react";
import { Getcity, Temperatureapi } from "../utils/api";

const create = createContext();

function Providerr({ children }) {
  const [name, setname] = useState();
  const [temp, settemp] = useState();
  const [city, setcity] = useState();

  async function handelgetcity(data) {
   try{
     const res = await Getcity(data);
    if(!res.results) return 
    setcity(res);
  }catch(err){
    console.log(err)
  }

  }
  useEffect(function(){
    async function handelgetTemp() {
        if(city?.results?.length>0){
        const res=await Temperatureapi({lat:city?.results[0]?.latitude,lng:city?.results[0]?.longitude})
        settemp(res)
        }
      }
      handelgetTemp()
  },[city])

  async function handelgetcityentiredetail() {}

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
        handelgetcityentiredetail,
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
