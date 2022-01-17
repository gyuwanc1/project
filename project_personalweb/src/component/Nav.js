import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    
      <nav className='navBox'>
        <ul>
          <li><NavLink to="Profile">profile</NavLink></li>
          <li><NavLink to="#">portpolio</NavLink></li>
          <li><a href="https://github.com/gyuwanc1" target="blank">github</a></li>
        </ul>
      </nav>     
    
  )
}
