import React, { useEffect, useState } from "react";
import './App.css'
import { NavBar } from "./Nav&Footer/Nav";
import LoginIn from "./Auth/LoginIn";
import More from "./More/More";
import Home from "./Homepage/Home";
import { createBrowserRouter, createRoutesFromElements, NavLink, Route, RouterProvider, Outlet, Router } from "react-router-dom";
import Shows, {Showsloader} from "./shows/Shows";
import ShowsLayout from "./shows/Showslayout";
import Seasons, { ShowsDetailsLoader } from "./shows/Seasons";
import Episodes from "./shows/Episodes";
import { useStateContext } from "./UseContext/UseContext";
import AboutUs from "./More/About_us";
import ContactUs from "./More/Contact_us";
import Help from "./More/help";
import { MusicPlayer } from "./AudioPlayer/AudioPlayer";
import History from "./shows/History";
import supabase from "./Auth/supabase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar/>}>

      <Route path='login'  element={<LoginIn />}/>
      <Route index  element={<Home/>} loader={Showsloader}/>
      <Route path='history'  element={<History/>}/>

      <Route path='more' element={<More/>} >
        <Route path="help" element={<Help/>}/>
        <Route path="contact_us" element={<ContactUs/>}/>
        <Route path="about_us" element={<AboutUs/>}/>

      </Route>
      <Route path={'*'} element={<><p>page not found. redirect to home page</p><NavLink to={'/'}>Home</NavLink></>}/>

      <Route path='shows' element={<ShowsLayout/>}  >
        <Route index element={<Shows/>} loader={Showsloader}/>
        <Route path=':id' element={<Seasons/>} loader={ShowsDetailsLoader}/>
        <Route path=':id/episodes' element={<Episodes/>}/>
        <Route path={'*'} element={<><p>page not found. redirect to home page</p><NavLink to={'/shows'}>back</NavLink></>}/>
      </Route>

    </Route>
  )
)

function App() {
  
  const { setUser, setUserId, audioLayout, setAudioLayout, audioShow, playAudioImage, playAudio, playAudioTitle, setCollapseMenu, collapseMenu } = useStateContext()
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session)
      setUserId(session.user.id)
    }, [])

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session)
      setUserId(session.user.id)
    })

    return () => subscription.unsubscribe()
  }, [])



 return (
  <div className="app-body" onClick={() => collapseMenu ? setCollapseMenu(false) : ""}>
    
    { audioLayout ? '' : <RouterProvider router={router}/>  }

    {
      playAudioTitle && <MusicPlayer
        audio={playAudio}
        title={playAudioTitle}
        image={playAudioImage}
        show={audioShow}
      />
    }  

  </div>
 )
}

export default App;