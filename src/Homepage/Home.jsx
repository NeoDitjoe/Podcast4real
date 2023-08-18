import { NavLink } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import ScrollToTop from "../scrollToTop/ScrollToTop"

export default function Home(){

    const { user } = useStateContext()

    return(
        <>     <ScrollToTop/>
            { user ? '' : <NavLink to={"/login"}>Log in for better experience</NavLink>}
            <div>
                <h1>Welcome to Podcast4real</h1>
                { user ? <NavLink to={'shows'}>shows</NavLink> : ''}
            </div>
        </>
    )
}