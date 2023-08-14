import { NavLink } from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            
            <NavLink to='more/about_us'>About us</NavLink>
            <NavLink to='more/contact_us'>Contact us</NavLink>
            <NavLink>Privacy Policy</NavLink>
            <NavLink>Advertising</NavLink>
            <NavLink>Privacy</NavLink>
            <NavLink>Accessibility</NavLink>

            <p>© 2023 Podcast4real. All rights reserved.</p>
        </footer>
    )
}