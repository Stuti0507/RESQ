import { useState } from 'react'
import Home from './components/Home'
import SOS from './components/SOS'
import VoDo from './components/Vodo'
import Map from './components/Map'
import Nav from './components/Nav'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router=createBrowserRouter(
[
  {
    path:'/',
    element:
    <div >
     <Nav theme="honav" />
     <Home />
    </div>
  },
  {
    path:'/sos',
    element:
    <div >
      <Nav theme="sonav" />
      <SOS />
    </div>
  },
  {
    path:'/volunteer',
    element:
    <div >
      <Nav theme="volnav" />
      <VoDo />
    </div>
  },
  {
    path:'/navigation',
    element:
    <div >
      <Nav theme="mapnav" />
      <Map />
    </div>
  }
]
);
function App() {
 
  return(
   <RouterProvider router={router} />
  )
}

export default App
