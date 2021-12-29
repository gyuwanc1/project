

{
const slideBox = document.querySelector('.slide_box');
const next = slideBox.querySelector('.next');
const viewBox = slideBox.querySelector('.view_box');
const viewBoxLi = viewBox.children;
const viewList = [...viewBoxLi];
const slideLen = viewList.length;

let slideIndex = 0;
const SLIDE_WIDTH = slideBox.clientWidth;


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
