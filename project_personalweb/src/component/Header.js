import React from 'react'
import Nav from './Nav'
import '../style/Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id="headBox">
      <h1><Link to="/"><span className='blind'>Homelogo</span></Link></h1>
      <Nav />
    </header>
  )
}
