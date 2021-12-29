

{
const slideBox = document.querySelector('.slide_box');
const next = slideBox.querySelector('.next');
const viewBox = slideBox.querySelector('.view_box');
const viewBoxLi = viewBox.children;
const viewList = [...viewBoxLi];
const slideLen = viewList.length;

let slideIndex = 0;
const SLIDE_WIDTH = slideBox.clientWidth;
viewBox.style.width = 100 * (slideLen + 1) +'%';
viewList.forEach(el=>{
  el.style.width = (100 / (slideLen + 1) ) + '%';
})

const cloneLI = viewList[0].cloneNode(true);
viewBox.append(cloneLI);

viewBox.style.transition = 'margin-left 300ms ease';

next.addEventListener('click', (e)=>{
  e.preventDefault();
  if(slideIndex < slideLen-1) {
    slideIndex += 1; 
  }else{ 
    slideIndex = 0;    
  }
  const moveWidth = slideIndex *  SLIDE_WIDTH;
  viewBox.style.marginLeft = moveWidth * -1 + 'px';

});

}
//되요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ미친다 
//작동안해요 
//지금은 작동해요 두둥..그럼 렝스로 해여하나요?
//일단 바꿔보고 안되면 해보고 내일 학원에서 ㅎㅎㅎㅎ  