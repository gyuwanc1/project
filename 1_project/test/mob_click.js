

const slide_box = document.querySelector('.slide_box');
const next = slide_box.querySelector('.next');

next.addEventListener('click', (e)=>{
  e.preventDefault();
  alert('apple test!!');
})
