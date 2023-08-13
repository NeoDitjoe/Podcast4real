import React, { useEffect, useState } from "react";
import './App.css'
import { NavBar } from "./Header/Nav";
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

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
    
          <Route path='login'  element={<LoginIn />}/>
          <Route index  element={<Home/>}/>
          <Route path='what'  element={<h1>hello again World</h1>}/>

          <Route path='more' element={<More/>}>
            <Route path="help" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam amet iusto eaque repellat, modi doloribus quidem perspiciatis nam. Aliquam?</p>}/>
            <Route path="contact_us" element={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quis.</p>}/>
            <Route path="about_us" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat molestias fugit mollitia architecto? Sit.</p>}/>
    
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
  
  const { playAudio, playAudioTitle } = useStateContext()

 return (
  <>
    <RouterProvider router={router}/>
    {
      playAudio && (
        <Audioplayer
          audio={playAudio}
          audiotitle={playAudioTitle}
        />
      )
    }
  </>
 )
}

export default App;