import { Navigate, Outlet } from "react-router-dom"
import { Uppost } from "./Context"

function Secratescreen() {

    const {city,temp}=Uppost()

    return (<>
            {city && temp ? <Outlet/> : <Navigate to={'/'} replace/>}
            </>
    )
}

export default Secratescreen
