//Profile.js


import React from 'react'
import '../style/Profile.scss'

export default function profile() {
  return (
    
    <section id="profileBox">
      <ul className="proArea"><span className='blind'>이미지박스</span></ul>
      <ul className="profile_text">
        <li className='PROFILE_01'><span>이름:</span>  조 규 완 <span>&#40;gyuwan cho	&#41;</span></li>

        <li className='PROFILE_02'><span>생년월일:</span>  1987년 9월 3일</li>

        <li className='PROFILE_03'><span>사용가능 언어:</span> <p>html, css, scss, javascript</p></li>

        <li className='PROFILE_04'><span>사용가능 툴:</span> <p>vscode, figma, github</p> </li>

        <li className='PROFILE_05'><span>교육 및 학력:</span>
          <p> 국비지원(frontend)교육 2021.09~2022.01</p>
          <p> 평택대학교    경영학과 2015.08   졸업 </p>          
        </li>

        <li className='PROFILE_06'><span>연락처 <br /></span>
          <span>전화번호:</span> 010 4344 2288 <br />
          <span>메일주소:</span> gyuwanc@naver.com        
        </li>
      </ul>
    </section>
    
  )
}
