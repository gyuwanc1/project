//mobile.js
{
const headBox = document.querySelector('#headBox');
const menuWrap = headBox.querySelector('.menu_wrap');
const mobilBtn = menuWrap.querySelector('.mobile_gnb_btn');
const modalmenu =  menuWrap.querySelector('.mobile_menu');
const elUl = modalmenu.querySelector('.elUl')
const btn01 = elUl.querySelector('.cam_story')
const btn02 = elUl.querySelector('.pro_story')
const btn03 = elUl.querySelector('.admin_advice')




const closeBtn = modalmenu.querySelector('.close_btn');

mobilBtn.addEventListener('click', e =>{
  e.preventDefault();  
  modalmenu.classList.add('on')
});

closeBtn.addEventListener('click', e=> {
  e.preventDefault();
  modalmenu.classList.remove('on');  
})


btn01.addEventListener('click',(e) => {      
  e.preventDefault(); 
  const intro = document.querySelector('#intro').offsetTop;  
  window.scrollTo({top:intro, behavior: 'smooth'})  
})

btn02.addEventListener('click',(e) => {
  e.preventDefault();       
  const intro = document.querySelector('#ex_booth').offsetTop;    
  window.scrollTo({top:intro, behavior: 'smooth'})  
})

btn03.addEventListener('click',(e) => {
  e.preventDefault();       
  const intro = document.querySelector('#advice_area').offsetTop;   
  window.scrollTo({top:intro, behavior: 'smooth'})  
})

}