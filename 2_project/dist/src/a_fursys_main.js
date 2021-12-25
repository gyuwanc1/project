//a_fursys_main.js

//modal_menu
  //선택자----------------------------------

const headBox = document.querySelector('#headBox');
const menuWrap = headBox.querySelector('.menu_wrap');
const mobilBtn = menuWrap.querySelector('.mobile_gnb_btn');
const modalmenu =  menuWrap.querySelector('.mobile_menu');

const closeBtn = modalmenu.querySelector('.close_btn');

mobilBtn.addEventListener('click', e =>{
  e.preventDefault();  
  modalmenu.classList.add('on')
});

closeBtn.addEventListener('click', e=> {
  e.preventDefault();
  modalmenu.classList.remove('on');
})
//--------------------------------------------


//-------------------------------------------
//슬라이드 광고

const slideBox = document.querySelector('.slide_box');
const viewBox = slideBox.querySelector('ul');
const viewEtc = viewBox.querySelectorAll('li');
const slideCount = viewEtc.length; //슬라이드 개수
let i = 0; //현재슬라이드

const prev = slideBox.querySelector('.prev');
const next = slideBox.querySelector('.next');

const slidewidth = 100;

//전체 슬라이드 넓이설정



//===================================================







