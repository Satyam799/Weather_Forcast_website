export async function Temperatureapi(data){
try{
    const dataa=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`)
    const res=await dataa.json()
    return res

}catch(err){
    console.log(err)
    return err

}
}

export async function Getcitydetails(data){
try{
    const dataa=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${data.lat}&lon=${data.lng}`)
    const res=await dataa.json()
    return res

}catch(err){
    console.log(err)
    return err

}
}


export async function Getcity(data){
  try{
    const dataa=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${data}&count=1&language=en&format=json`)
    const res=await dataa.json()
    return res
  }catch(err){
    console.log(err)
    return err

}

}



/*export  function Getcreerntlocation(){
    try{
    navigator.geolocation.getCurrentPosition(async(position)=>{
        
        const lat=position.coords.latitude
        const lng=position.coords.longitude
        const data={lat:lat,lng:lng}
        const result=await Getcitydetails(data)
        console.log('hi')
        return result.address.city
    })
}catch(err){
    console.log('current location access is not given ')
}
}*/