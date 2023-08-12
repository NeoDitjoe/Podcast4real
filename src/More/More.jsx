import { NavLink, Outlet } from "react-router-dom";

export default function More(){
    return (
        <div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque corporis nam tempore quos voluptates temporibus, non quas mollitia modi ducimus laboriosam a porro reprehenderit! Magni, possimus!</p>
            <NavLink to='help'>help</NavLink> 
            <NavLink to='contact_us'>contact us</NavLink> 
            <NavLink to='about_us'>about us</NavLink> 
            
            <Outlet/> 
        </div> 
    )
}