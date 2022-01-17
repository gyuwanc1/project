//Profile.js


import React from 'react'
import '../style/Profile.scss'

export default function profile() {
  return (
    
    <section id="profileBox">
      <div className="proArea"><span className='blind'>이미지박스</span></div>
      <ul className="profile_text">
        <li className='PROFILE_01'><span>이름:</span>조규완</li>
        <li className='PROFILE_02'><span>생년월일:</span>1987년 9월 3일</li>
        <li className='PROFILE_03'><span>교육 및 학력:</span>
          <p> 국비지원(frontend)교육 2021.09~2022.01</p>
          <p> 평택대학교    경영학과 2015.08   졸업 </p>
          <p> 강동대학교      건축과 2013.02   졸업 </p>
        </li>
        <li className='PROFILE_04'><span>연락하실 곳</span>
          <p>연락처: 010 4344 2288</p>
          <p>메일주소: gyuwanc@naver.com</p>        
        </li>
      </ul>
    </section>
    
  )
}
