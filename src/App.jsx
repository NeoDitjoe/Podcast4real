import React, { useEffect, useState } from "react";
import { NavBar } from "./Header/Nav";
import LoginIn from "./Auth/LoginIn";
import More from "./More/More";
import Home from "./Homepgae/Home";
import { createBrowserRouter, createRoutesFromElements, NavLink, Route, RouterProvider, Outlet } from "react-router-dom";
import Shows, {Showsloader} from "./shows/Shows";
import ShowsLayout from "./shows/Showslayout";
import './App.css'

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
    
          <Route path='login'  element={<LoginIn />}/>
          <Route path='home'  element={<Home/>}/>
          <Route path='what'  element={<h1>hello again World</h1>}/>

          <Route path='more' element={<More/>}>
            <Route path="help" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam amet iusto eaque repellat, modi doloribus quidem perspiciatis nam. Aliquam?</p>}/>
            <Route path="contact_us" element={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quis.</p>}/>
            <Route path="about_us" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat molestias fugit mollitia architecto? Sit.</p>}/>
    
          </Route>
          <Route path={'*'} element={<><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus doloribus dicta consectetur vel, nobis qui eligendi doloremque quos. Magnam accusantium error eaque, sunt enim sed necessitatibus atque? Aut ducimus quo explicabo recusandae tempore ipsum. Quos ad nemo a architecto sunt fugiat. Odit laudantium dolore quidem facilis inventore temporibus ullam.</p><NavLink to={'home'}>Home</NavLink></>}/>

          <Route path='shows' element={<ShowsLayout/>}  >
            <Route index element={<Shows/>} loader={Showsloader}/>
          </Route>


        </Route>
      )
    )

function App() {
 return (
  <>
    <RouterProvider router={router}/>
  </>
 )
}

export default App;