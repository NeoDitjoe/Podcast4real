import { NavLink, Outlet } from "react-router-dom";

export function NavBar(){
    return (
        <>
            <nav>
                <NavLink to='login'>login</NavLink>
                <NavLink to='home'>home</NavLink>
                <NavLink to='what'>what</NavLink>
                <NavLink to='more'>more</NavLink>
                <NavLink to='shows'>shows</NavLink>         
            </nav>

        <Outlet/>
      </>
    )
}