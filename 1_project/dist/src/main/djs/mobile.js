//mobile.js
{
const headBox = document.querySelector('#headBox');
const menuWrap = headBox.querySelector('.menu_wrap');
const mobilBtn = menuWrap.querySelector('.mobile_gnb_btn');
const modalmenu =  menuWrap.querySelector('.mobile_menu');
// const elUl = modalmenu.querySelector('.elUl')
// const btn = elUl.querySelector('.cam_story')
// const rBtn = btn.querySelector('a')

const closeBtn = modalmenu.querySelector('.close_btn');

mobilBtn.addEventListener('click', e =>{
  e.preventDefault();  
  modalmenu.classList.add('on')
});

closeBtn.addEventListener('click', e=> {
  e.preventDefault();
  modalmenu.classList.remove('on');
})


// rBtn.addEventListener('click',(e) => {
//   e.preventDefault;
//   const intro = document.querySelector('#intro').offsetTop;    
//   window.scrollTo({top:intro, behavior:'smooth'});
// })
}