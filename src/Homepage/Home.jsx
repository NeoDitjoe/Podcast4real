import { NavLink } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import ScrollToTop from "../scrollToTop/ScrollToTop"

export default function Home(){

    const { user } = useStateContext()

    return(
        <>     <ScrollToTop/>
            { user ? '' : <p style={{marginLeft: '2%'}}> please <NavLink to={"/login"} >Log in</NavLink> for better experience</p>}

            <div className="home">
                <h1 style={{color:'white'}}>Welcome to Podcast4real</h1>
                { user ? <NavLink to={'shows'}>shows</NavLink> : ''}
            </div>
        </>
    )
}