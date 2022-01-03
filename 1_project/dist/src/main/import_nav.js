//import_nav

{
  const path = './temp/main/src/';
  const path02 ='../dist/src/main/djs/';
  const data = {
    mob: path+'mob_nav.html',
    laptop: path+'laptop_nav.html',
    mobJs: path02+'mobile.js'
  }

  // const data = [
  //   {type : 'mobile', url:path+'mob_nav.html', js: path02+'mobile.js'},
  //   {type : 'laptop', url:path+'laptop_nav.html'},
  // ]
  
  const elbody = document.querySelector('body');
  const elNav = document.querySelector('.menu_wrap')
  let ckClass;

  const DelScript = () =>{
    if(!!ckClass){
      ckClass = document.querySelector('.navScript');
      ckClass.remove();
      }
  }

  const MkScript = (url)=>{
    // const ckClass = ?.classList.contains('.navScript');

    DelScript();
  
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src',url);
    mkScript.setAttribute('class', 'navScript');
    console.log('mobile 에서 script 생성', url);
    elbody.append(mkScript);
  
  };
  
  const fnDevicenav = (type, tscript)=>{
    fetch(type)
    .then(reponse=>reponse.text())
    .then(el=>{elNav.innerHTML = el; })
    .then(()=>{
      (!!tscript) ? MkScript(tscript) : DelScript();
    })
    .then(()=>{
      if(!!tscript){  
      console.log(tscript)
      ckClass = document.querySelector('.navScript'); //아  
      }
    })
  };

  // fnDevicenav(data.mob);
  //=================================================
  //브라우저 1280을 기준으로 html 문서 data.mob/data.laptop의 코드로 확인하여 처리
  const deviceSize = `screen and (min-width:1280px)`;
  const mediaQuery = window.matchMedia(deviceSize);
  const fnDevice = ()=>{
    (mediaQuery.matches)?fnDevicenav(data.laptop) : fnDevicenav(data.mob, data.mobJs )
  }
  fnDevice();

  mediaQuery.addEventListener('change', fnDevice)
  
}