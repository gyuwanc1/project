//main.js

import React from 'react'
import '../style/Main.scss'

export default function Main() {
  return (
    <section id="mainBox">
      <div className="mainArea"><span className='blind'>이미지박스</span></div>
      <ul className='text_area'>
        <li><p>gyuwan`s webpolio</p></li>
        <li><p>우리가 할 수 있기 전에 배워야 하는 일들을, </p></li>
        <li><p>우리는 하면서 배운다.</p></li>
        <li><p>-aristoteles-</p></li>
      </ul>
    </section>
  )
}
