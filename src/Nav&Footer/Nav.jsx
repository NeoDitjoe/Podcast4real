import { NavLink, Outlet } from "react-router-dom";
import menubar from "..//assets/menubar.png"
import logo from "..//assets/logo.png"
import { useStateContext } from "../UseContext/UseContext";
import Footer from "./Footer";

export function NavBar(){
    const { collapseMenu, setCollapseMenu, user } = useStateContext()

    function navbar(){
        return(
            <div className="nav">
                <NavLink to='login'>{user ? 'logout' : 'login'}</NavLink>
                <NavLink to='/'>home</NavLink>
                <NavLink to={user ? 'what' : "login"}>what</NavLink>

                
                <NavLink to='more'>more</NavLink>


                { user ? <NavLink to={ user ? 'shows': 'login'}>shows</NavLink> : ''} 
            </div>
        )
    }
    return (
        <>
            <nav>  
                {
                    window.matchMedia("(max-width: 769px)").matches ? 
                    <div className="max-width-nav">
                        <img style={{backgroundColor: "black"}} src={menubar} alt="menu" onClick={() => {setCollapseMenu(!collapseMenu)}}></img> 
                        <img style={{ width: "17%", backgroundColor: "black"}} src={logo} alt="logo"></img>
                        </div>
                        :  
                    <div>{navbar() }</div>
                }  

                {collapseMenu ? navbar() : ''}             
            </nav>

            <div className="nav-outlet">
                <Outlet/>
            </div>
            
            <Footer/>
      </>
    )
}