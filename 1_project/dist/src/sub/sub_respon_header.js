//sub_respon_header
{
//선택자
const Body = document.querySelector('body')
const HeadBox = document.querySelector('#headBox');
// const menuWrap = HeadBox.querySelector('.menu_wrap');

// const NavBtn = menuWrap.querySelector('.mobile_gnb_btn');
// const Gnb = menuWrap.querySelector('.gnb');
//디바이스 영역

const setDevice = [ 
  {type:'mobile', size:'1279', nav:'../../../html/temp/sub/mob_sub_header.html', script:'../js/src/b_campaign_sub.js'},
  {type:'pc', nav:'../../../html/temp/sub/pc_sub_header.html'}
]

const mediaSize = `screen and (max-width:${setDevice[0].size}px)`
const mediaMatches = window.matchMedia(mediaSize);

//===============================================================

//기능함수


const Mkscript = (data)=>{
  const mksc = document.createElement('script');
  mksc.setAttribute('src',data);
  mksc.setAttribute('class','navScript');
  Body.append(mksc);
};

const delScript= ()=>{ 
  const scScript=document.querySelector('.navScript');
  if(scScript){scScript.remove();}
  }

const MobileCk = (type = mediaMatches.matches)=>{
  if(type){
    // console.log('mobile버전')
    // menuWrap.append(NavBtn);
    // Body.append( Mkscript(setDevice[0].script) );

    fetch(setDevice[0].nav)
    .then(response=>response.text())
    .then( data => {HeadBox.innerHTML= data } )
    .then( ()=>{Mkscript(setDevice[0].script) })

  }else{
    // console.log('pc버전')       
    fetch(setDevice[1].nav)
    .then(response=>response.text())
    .then( data => {HeadBox.innerHTML= data } )
    .then(delScript())      
  } 
};
MobileCk();
//===============================================================

//이벤트처리
console.log(mediaMatches.matches);

mediaMatches.addEventListener('change',(e)=>{
  // location.reload;  
  MobileCk(e.matches);  
});

}


