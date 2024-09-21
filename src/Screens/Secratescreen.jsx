import { Navigate, Outlet } from "react-router-dom"
import { Uppost } from "./Context"

function Secratescreen() {

    const {name}=Uppost()

    return (
        <div>
            {name ? <Outlet/> : <Navigate to={'/screen1'} replace/>}
        </div>
    )
}

export default Secratescreen
