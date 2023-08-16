import { NavLink } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"

export default function Home(){

    const { user } = useStateContext()

    return(
        <>     
            { user ? '' : <NavLink to={"/login"}>Log in for better experience</NavLink>}
            <div>
                <h1>Welcome to Podcast4real</h1>
            </div>
        </>
    )
}