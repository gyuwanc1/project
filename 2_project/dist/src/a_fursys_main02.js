(()=>{
  //a_fursys_main02.js

//부스 광고

const exBooth = document.querySelector('.ex_booth');
const boothPd = exBooth.querySelector('.booth_pd');
const boothLi = boothPd.querySelectorAll('li');
const slideCv02 = [].slice.call(boothLi); 
const boothwidth = 100;
const slideLen02 = boothLi.length; 
//기능------------------------------------------
const LastEl02 = slideCv02.at(-1);
const copyLi02 = LastEl02.cloneNode(true); 
boothPd.prepend(copyLi02); 

boothPd.style.width = ( (slideLen02 + 1) * boothwidth) + '%'; //UL(viewBox) 사이즈 변경
//=========================================


boothPd.style.position = 'relative';
boothPd.style.left = 0; 
boothPd.style.marginLeft = '-100%';

//===========================================

const boothEtcRe = boothPd.querySelectorAll('li');
const ReCvt02 = [].slice.call(boothEtcRe);

ReCvt02.forEach((el,idx)=>{
  el.style.width = 100 / (slideLen02 + 1) + '%'; //li사이즈 변경
}); 
//=======================================================

const bprev = exBooth.querySelector('.bprev');
const bnext = exBooth.querySelector('.bnext');

let slid_i =0; 
let PERMISSION_02 = true;

boothPd.style.transition='left 300ms ease';

const delay02 = async (ms = 0) => {
  return await new Promise(resolve => {
    setTimeout(()=>{resolve()},ms)
  })
};

//=================================================이벤트
//다음버튼 클릭시 사용하는 함수
const fnAniSlide02 = async () => {
  await delay02();
  boothPd.style.transition='left 300ms ease';
  boothPd.style.left = (-100 * slid_i) + '%'
  await delay02(500);
  PERMISSION_02 = true;
}

//이전버튼 클릭시 사용하는 함수
const aniPrev02 = async( )=>{
  boothPd.style.left = (-100 * slid_i) + '%';
  await delay02(500);
  if(slid_i <= -1){
    slid_i = slideLen02-1;
    boothPd.style.transition = null;
    boothPd.style.left = (-100 * slid_i) + '%';
  }
  await delay02();
  boothPd.style.transition='left 300ms ease';
  PERMISSION_02 = true;
};


//==========================================================이벤트버튼
bnext.addEventListener('click', ev=>{
  ev.preventDefault();
  if(PERMISSION_02){
    PERMISSION_02 =false;
    slid_i +=1;

    if(slid_i >=slideLen02){
      slid_i =0;
      boothPd.style.transition = null;
      boothPd.style.left = 100 + '%';
    }
    fnAniSlide02();
  }
})
bprev.addEventListener('click', ev=>{
  ev.preventDefault();
  if(PERMISSION_02){
    PERMISSION_02 = false;
    slid_i -=1;
    aniPrev02();
  }
})
})()




//스크롤 