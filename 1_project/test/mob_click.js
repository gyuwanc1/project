

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

const cloneLI = viewList.at(0).cloneNode(true);
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