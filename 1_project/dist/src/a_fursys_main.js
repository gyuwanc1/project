(()=>{
  //a_fursys_main.js

  window.alert('교육용으로 제작된 웹페이지 입니다.');

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




//---------------------------------------------------
//---------------------------------------------------
//슬라이드 광고

const slideBox = document.querySelector('.slide_box');
const viewBox = slideBox.querySelector('.view_box');
const viewEtc = viewBox.querySelectorAll('li');//유사배열
const slideCv = [].slice.call(viewEtc); //배열화 시키기
// console.log(slideCv);

const slidewidth = 100;

//추가설정 변수
const slideLen = viewEtc.length; //li의 갯수

//기능------------------------------------------

//마지막 li복사하여 맨앞에 넣기
const LastEl = slideCv.at(-1);//마지막 li선택
const copyLi = LastEl.cloneNode(true); //마지막 li복사 cloneNode(true)=>내부요소까지 복제
viewBox.prepend(copyLi); //복제요소를 앞으로 추가첨부는 css에서 nth사용 불가(클래스명으로 할당) 

//변경된 요소의 갯수에 맞게, UL(viewBox)의 사이즈와 li(viewEtc)요소의 사이즈 변경

viewBox.style.width = ( (slideLen + 1) * slidewidth) + '%'; //UL(viewBox) 사이즈 변경
//=========================================


viewBox.style.position = 'relative';
viewBox.style.left = 0; //초기값 설정
viewBox.style.marginLeft = '-100%';
// slideBox.style.overflow='hidden';

//** 위의 3가지는 CSS에서 컨트롤 해도 상관없음
//===========================================

//복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리
const viewEtcRe = viewBox.querySelectorAll('li');
const ReCvt = [].slice.call(viewEtcRe);

ReCvt.forEach((el,idx)=>{
  el.style.width = 100 / (slideLen + 1) + '%'; //li사이즈 변경
}); 
//=======================================================

const prev = slideBox.querySelector('.prev');
const next = slideBox.querySelector('.next');

let i =0; //전역변수로 설정해놔야 반환되는 값이 지속적으로 사용가능
let PERMISSION = true;

viewBox.style.transition='left 300ms ease';

const delay = async (ms = 0) => {
  return await new Promise(resolve => {
    setTimeout(()=>{resolve()},ms)
  })
};

//=================================================이벤트
//==반복활동 함수화
//다음버튼 클릭시 사용하는 함수
const fnAniSlide = async () => {
  await delay();
  viewBox.style.transition='left 300ms ease';
  viewBox.style.left = (-100 * i) + '%'
  await delay(500);
  PERMISSION = true;
}

//이전버튼 클릭시 사용하는 함수
const aniPrev = async( )=>{
  viewBox.style.left = (-100 * i) + '%';
  await delay(500);
  if(i <= -1){
    i = slideLen-1;
    viewBox.style.transition = null;
    viewBox.style.left = (-100 * i) + '%';
  }
  await delay();
  viewBox.style.transition='left 300ms ease';
  PERMISSION = true;
};


//==========================================================이벤트버튼
next.addEventListener('click', e=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION =false;
    i +=1;

    if(i >=slideLen){
      i =0;
      viewBox.style.transition = null;
      viewBox.style.left = 100 + '%';
    }
    fnAniSlide();
    // setTimeout(()=>{
    //   viewBox.style.transition='left 300ms ease';
    //   viewBox.style.left = (-100 * i) + '%';

    //   setTimeout(()=>{
    //     PERMISSION=true;
    //   },500);

    // },300)

  }
})

prev.addEventListener('click', e=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    i -=1;
    aniPrev();
  }
})
//=====================================================================









})()