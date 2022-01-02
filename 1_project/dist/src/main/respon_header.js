//respon_header.js

//========================================
/**
 * header 불러오기
 */

{
  const path='./temp/main/'
  const Header='header.html';

  const body=document.querySelector('body');
  const elHeadBox = document.querySelector('#headBox');
  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','../dist/src/main/import_nav.js');
    body.append(mkScript)
  }

  fetch(path+Header)
    .then(response=>response.text() )
    .then((element) => {
      elHeadBox.innerHTML = element;
    })
    .then(()=>{
      fnScript();
    })

}