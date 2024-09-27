import { Navigate, Outlet } from "react-router-dom"
import { Uppost } from "./Context"

function Secratescreen() {

    const {city,temp}=Uppost()

    return (
        <div>
            {city && temp ? <Outlet/> : <Navigate to={'/'} replace/>}
        </div>
    )
}

export default Secratescreen
