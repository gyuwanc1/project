//a_fursys_main02.js

//부스 광고

const exBooth = document.querySelector('.ex_booth');
const boothPd = exBooth.querySelector('.booth_pd');
const boothLi = boothPd.querySelectorAll('li');//유사배열
const slideCv02 = [].slice.call(boothLi); //배열화 시키기
// console.log(slideCv);

const boothwidth = 100;

//추가설정 변수
const slideLen02 = boothLi.length; //li의 갯수

//기능------------------------------------------

//마지막 li복사하여 맨앞에 넣기
const LastEl02 = slideCv02.at(-1);//마지막 li선택
const copyLi02 = LastEl02.cloneNode(true); //마지막 li복사 cloneNode(true)=>내부요소까지 복제
boothPd.prepend(copyLi02); //복제요소를 앞으로 추가첨부는 css에서 nth사용 불가(클래스명으로 할당) 

//변경된 요소의 갯수에 맞게, UL(viewBox)의 사이즈와 li(viewEtc)요소의 사이즈 변경

boothPd.style.width = ( (slideLen02 + 1) * 100) + '%'; //UL(viewBox) 사이즈 변경
//=========================================


boothPd.style.position = 'relative';
boothPd.style.left = 0; //초기값 설정
boothPd.style.marginLeft = '-100%';


//** 위의 3가지는 CSS에서 컨트롤 해도 상관없음
//===========================================

//복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리
const boothEtcRe = boothPd.querySelectorAll('li');
const ReCvt02 = [].slice.call(boothEtcRe);

ReCvt02.forEach((el,idx)=>{
  el.style.width = 100 / (slideLen02 + 1) + '%'; //li사이즈 변경
}); 
//=======================================================

const bprev = exBooth.querySelector('.bprev');
const bnext = exBooth.querySelector('.bnext');

let slid_i =0; //전역변수로 설정해놔야 반환되는 값이 지속적으로 사용가능
let PERMISSION_02 = true;

boothPd.style.transition='left 300ms ease';

const delay02 = async (ms = 0) => {
  return await new Promise(resolve => {
    setTimeout(()=>{resolve()},ms)
  })
};

//=================================================이벤트
//==반복활동 함수화
//다음버튼 클릭시 사용하는 함수
const fnAniSlide02 = async () => {
  await delay02();
  boothPd.style.transition='left 300ms ease';
  boothPd.style.left = (-100 * i) + '%'
  await delay02(500);
  PERMISSION_02 = true;
}

//이전버튼 클릭시 사용하는 함수
const aniPrev02 = async( )=>{
  boothPd.style.left = (-100 * i) + '%';
  await delay02(500);
  if(i <= -1){
    i = slideLen02-1;
    boothPd.style.transition = null;
    boothPd.style.left = (-100 * i) + '%';
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
    i +=1;

    if(i >=slideLen02){
      i =0;
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
    i -=1;
    aniPrev02();
  }
})