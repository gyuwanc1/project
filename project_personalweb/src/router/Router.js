//Router

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from '../component/Profile'
import Main from '../component/Main'

export default function Router() {
  return (
<Routes>  
  <Route path="" element={<Main />}></Route>  
  <Route path="/" element={<Main />}></Route>  
  <Route path="/main" element={<Main />}></Route>  
  <Route path="/profile" element={<Profile />}></Route>  
</Routes>
  )
}
