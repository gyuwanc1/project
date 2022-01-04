//b_campaign_sub.ks
{
const headBox = document.querySelector('#headBox');
const menuWrap = headBox.querySelector('.menu_wrap');
const mobilBtn = menuWrap.querySelector('.mobile_gnb_btn');
const modalmenu =  headBox.querySelector('.mobile_menu');
const elUl = modalmenu.querySelector('.elUl')
const btn01 = elUl.querySelector('.into_pro')
const btn02 = elUl.querySelector('.watch_movie')

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
  const intro = document.querySelector('#program_int').offsetTop;  
  window.scrollTo({top:intro, behavior: 'smooth'})  
})

btn02.addEventListener('click',(e) => {
  e.preventDefault();       
  const intro = document.querySelector('#program_int').offsetTop;    
  window.scrollTo({top:intro, behavior: 'smooth'})  
})
}