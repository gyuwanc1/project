//Router

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from '../component/Profile'
import Main from '../component/Main'
import Portfolio from '../component/Portfolio'

export default function Router() {
  return (
<Routes>  
  <Route path="" element={<Main />}></Route>  
  <Route path="/" element={<Main />}></Route>  
  <Route path="/main" element={<Main />}></Route>  
  <Route path="/profile" element={<Profile />}></Route>  
  <Route path="/portpolio" element={<Portfolio />}></Route>  
</Routes>
  )
}
