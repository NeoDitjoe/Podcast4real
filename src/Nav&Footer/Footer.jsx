import { NavLink } from "react-router-dom";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

export default function Footer(){
    return (
        <footer>
            
            <NavLink to='more/about_us'>About us</NavLink>
            <NavLink to='more/contact_us'>Contact us</NavLink>
            <NavLink>Privacy Policy</NavLink>
            <NavLink>Advertising</NavLink>
            <NavLink>Privacy</NavLink>
            <NavLink>Accessibility</NavLink>

            <a href='https://github.com/NeoDitjoe'><img src={github} alt='githubicon'></img></a>
            <a href='https://www.linkedin.com/in/neo-ditjoe-26019b26a/'><img src={linkedin} alt='linkedInicon'></img></a>
            <a href='mailto:ditjoeneo@gmail.com'><img src={gmail} alt='gmail'></img></a>

            <h6 style={{color: "gray", marginTop: "5%"}}>Email:</h6>
            <p style={{color: "gray", marginTop: "-3%"}}> ditjoeneo@gmail.com</p>

            <h6 style={{color: "gray", marginTop: "5%"}}>Phone & WhatApp:</h6>
            <p style={{color: "gray", marginTop: "-3%"}}>066 026 8606</p>

            <p>© 2023 Podcast4real. All rights reserved.</p>
        </footer>
    )
}