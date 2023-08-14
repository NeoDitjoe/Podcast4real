import { NavLink, Outlet } from "react-router-dom";
import menubar from "..//assets/menubar.png"
import logo from "..//assets/logo.png"
import { useState } from "react";
import { useStateContext } from "../UseContext/UseContext";
import Footer from "./Footer";

export function NavBar(){
    const { collapseMenu, setCollapseMenu } = useStateContext()

    function navbar(){
        return(
            <div className="nav">
                <NavLink to='login'>login</NavLink>
                <NavLink to='/'>home</NavLink>
                <NavLink to='what'>what</NavLink>
                <NavLink to='more'>more</NavLink>
                <NavLink to='shows'>shows</NavLink> 
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