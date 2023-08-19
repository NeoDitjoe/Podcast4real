import { NavLink, Outlet } from "react-router-dom";
import menubar from "..//assets/menubar.png"
import logo from "..//assets/logo.png"
import { useStateContext } from "../UseContext/UseContext";
import Footer from "./Footer";

export function NavBar(){
    const { collapseMenu, setCollapseMenu, user } = useStateContext()

    function navbar(){
        return(
            <>
                {collapseMenu ? <img style={{ width: "50%", backgroundColor: "transparent"}} src={logo} alt="logo"></img> : ""}
                <div className="nav">
                    <NavLink to='login'>{user ? 'logout' : 'login'}</NavLink>
                    <NavLink to='/'>Home</NavLink>
                    { user ? <NavLink to={ user ? 'shows': 'login'}>Shows</NavLink> : ''} 
                    <NavLink to={user ? 'history' : "login"}>History</NavLink>
                    <NavLink to='more'>More</NavLink>
                </div>
            
            </>
        )
    }
    return (
        <>
            <nav>  
                {
                    window.matchMedia("(max-width: 770px)").matches ? 
                    <div className="max-width-nav">
                        <img style={{backgroundColor: "transparent", maxWidth:'10%', height:'7vh'}} src={menubar} alt="menu" onClick={() => {setCollapseMenu(!collapseMenu)}}></img> 
                        
                        
                        {collapseMenu ? '' : <img style={{ width: "17%", backgroundColor: "transparent"}} src={logo} alt="logo"></img>}
                        </div>
                        :  
                    <div className="desktop-nav"> 
                        <img style={{ width: "100%", backgroundColor: "black"}} src={logo} alt="logo"></img>
                        {navbar()}
                    </div>
                }  

                {collapseMenu ? navbar() : ''}             
            </nav>

            <div className="nav-outlet">
                { collapseMenu ? ' ' : <Outlet/>}
            </div>
            
            { collapseMenu ? ' ' : <Footer/>}
      </>
    )
}