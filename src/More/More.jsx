import { NavLink, Outlet } from "react-router-dom";

export default function More(){
    return (
        <div className="more">

            <NavLink to='help'>help</NavLink> 
            <NavLink to='contact_us'>contact us</NavLink> 
            <NavLink to='about_us'>about us</NavLink> 
            
            <Outlet/> 
        </div> 
    )
}