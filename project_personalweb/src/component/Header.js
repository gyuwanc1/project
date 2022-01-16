import React from 'react'
import Nav from './Nav'
import '../style/Header.scss'
import { Route, Routes } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header id="headBox">
      <h1><Link to="/">gyuwanHomelogo</Link></h1>
      <Nav />
    </header>
  )
}
