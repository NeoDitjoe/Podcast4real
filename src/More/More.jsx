import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../scrollToTop/ScrollToTop";

export default function More(){
    return (
        <div className="more">
            <ScrollToTop/>

            <NavLink to='help'>help</NavLink> 
            <NavLink to='contact_us'>contact us</NavLink> 
            <NavLink to='about_us'>about us</NavLink> 
            
            <Outlet/> 
        </div> 
    )
}