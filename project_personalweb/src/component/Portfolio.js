import React from 'react'
import '../style/Portfolio.scss'

export default function Portfolio() {
  return (
    <section id="portarea">
      <ul className='port_box'>
        <li className='card'>
          <div className='img_box01'></div>
          <dl>
            <dt>navienhouse</dt>
            <dd>ui/ux design</dd>
            <dd>use lang: html scss</dd>
          </dl>
          <div className='link_addr'>
            <a href="https://bit.ly/gyuwanc02" target='blank'>detail site</a>
          </div>
        </li>
        <li className='card'>
          <div className='img_box02'></div>
          <dl>
            <dt>fursys</dt>
            <dd>clone coding</dd>
            <dd>use lang: html scss js</dd>
          </dl>
          <div className='link_addr'>
            <a href="https://bit.ly/gyuwanc1" target='blank'>detail site</a>
          </div>
        </li>

      </ul>
    </section>
  )
}
