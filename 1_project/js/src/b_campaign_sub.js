//b_campaign_sub.ks
{
const headBox = document.querySelector('#headBox');
const menuWrap = headBox.querySelector('.menu_wrap');
const mobilBtn = menuWrap.querySelector('.mobile_gnb_btn');
const modalmenu =  headBox.querySelector('.mobile_menu');

const closeBtn = modalmenu.querySelector('.close_btn');

mobilBtn.addEventListener('click', e =>{
  e.preventDefault();  
  modalmenu.classList.add('on')
});

closeBtn.addEventListener('click', e=> {
  e.preventDefault();
  modalmenu.classList.remove('on');
})
}