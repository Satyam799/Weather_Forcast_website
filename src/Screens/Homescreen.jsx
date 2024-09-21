import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Uppost } from "./Context"
import Screen from "./Screen-1"

function Homescreen() {
    const {name,setname}=Uppost()


    const navigate=useNavigate()
    const {search}=useLocation()
    const sp=new URLSearchParams(search)




    return (
        <div style={{display:"flex",flex:1,justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>
            <button onClick={()=>(navigate('/screen1'))}>Screen 1</button>
            <div style={{height:'20vh'}}/>
            <button onClick={()=>(navigate('/screen2'))}>Screen 2 </button>

        </div>
    )
}

export default Homescreen
