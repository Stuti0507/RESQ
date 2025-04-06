import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (prop) => {
  return (
    <div id='Nav' className={prop.theme} >
      <div id="logo"><h1>RES</h1><h1 id='redd'>Q</h1></div>
      <NavLink to='/' id='navcon' className={({isActive})=>isActive?"bnav":""}>Home</NavLink>
      <NavLink to='/sos' id='navcon' className={({isActive})=>isActive?"bnav":""}>SOS</NavLink>
      <NavLink to='/navigation' id='navcon' className={({isActive})=>isActive?"bnav":""}>Navigate</NavLink>
      <NavLink to='/volunteer' id='navcon' className={({isActive})=>isActive?"bnav":""}>Help us</NavLink>
      <NavLink to='/BOT' id='navcon' className={({isActive})=>isActive?"bnav":""}>Qlink</NavLink>
      <NavLink to='/about' id='navcon' className={({isActive})=>isActive?"bnav":""}>About us </NavLink>
    </div>
  )
}

export default Nav
