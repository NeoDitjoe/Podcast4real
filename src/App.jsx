import React, { useEffect, useState } from "react";
import './App.css'
import { NavBar } from "./Nav&Footer/Nav";
import LoginIn from "./Auth/LoginIn";
import More from "./More/More";
import Home from "./Homepgae/Home";
import { createBrowserRouter, createRoutesFromElements, NavLink, Route, RouterProvider, Outlet, Router } from "react-router-dom";
import Shows, {Showsloader} from "./shows/Shows";
import ShowsLayout from "./shows/Showslayout";
import Seasons, { ShowsDetailsLoader } from "./shows/Seasons";
import  Episodes from "./shows/Episodes";
import { useStateContext } from "./UseContext/UseContext";
import Audioplayer from "./AudioPlayer/AudioPlayer";
import AboutUs from "./More/About_us";
import ContactUs from "./More/Contact_us";
import Help from "./More/help";

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
    
          <Route path='login'  element={<LoginIn />}/>
          <Route index  element={<Home/>}/>
          <Route path='what'  element={<h1>hello again World</h1>}/>

          <Route path='more' element={<More/>}>
            <Route path="help" element={<Help/>}/>
            <Route path="contact_us" element={<ContactUs/>}/>
            <Route path="about_us" element={<AboutUs/>}/>
    
          </Route>
          <Route path={'*'} element={<><p>page not found. redirect to home page</p><NavLink to={'/'}>Home</NavLink></>}/>

          <Route path='shows' element={<ShowsLayout/>}  >
            <Route index element={<Shows/>} loader={Showsloader}/>
            <Route path=':id' element={<Seasons/>} loader={ShowsDetailsLoader}/>
            <Route path={'*'} element={<><p>page not found. redirect to home page</p><NavLink to={'/shows'}>back</NavLink></>}/>
            <Route path='episode' element={<Episodes/>}/>
          </Route>

        </Route>
      )
    )

function App() {
  
  const { playAudio, playAudioTitle, setCollapseMenu, collapseMenu } = useStateContext()

 return (
  <div className="app-body" onClick={() => collapseMenu ? setCollapseMenu(false) : ""}>
    <RouterProvider router={router}/>
    {
      playAudio && (
        <Audioplayer
          audio={playAudio}
          audiotitle={playAudioTitle}
        />
      )
    }
  </div>
 )
}

export default App;