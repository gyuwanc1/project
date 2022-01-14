import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    
      <nav className='navBox'>
        <ul>
          <li><NavLink to="#">profile</NavLink></li>
          <li><NavLink to="#">portfplio</NavLink></li>
          <li><NavLink to="#">github</NavLink></li>
        </ul>
      </nav>     
    
  )
}
