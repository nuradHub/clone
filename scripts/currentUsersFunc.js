export function operations(){

const timeline = document.querySelector('.js-timeline-setting');
const trippleButton = document.querySelector('.js-tripple-icon');

trippleButton?.addEventListener('click', (e)=> {
  e.stopPropagation();
  if(timeline){
    timeline.style.display = 'block';
  }
});
document?.addEventListener('click', (e)=> {
  if(e.target !== timeline){
    if(timeline){
      timeline.style.display = 'none';
    }
  }
});


function asideSideBar(){

  const asideContent = document.querySelector('.js-aside-footer-content');
  const dropdown = document.getElementById('dropdown');
  const dropup = document.getElementById('dropup');

  dropdown?.addEventListener('click', ()=> {
    asideContent.style.display = 'block'
    dropdown.style.display = 'none';
    dropup.style.display = 'block';
  })

  dropup?.addEventListener('click', ()=> {
    asideContent.style.display = 'none'
    dropup.style.display = 'none';
    dropdown.style.display = 'block';
  })

  const passportContainer = document.querySelector('.js-passport-container1');

  const asideContainer = document.querySelector('.js-aside-container');

  passportContainer?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  })

  asideContainer?.addEventListener('click', (e)=> {
    e.stopPropagation();
  })
  document?.addEventListener('click', (e)=> {
  if(asideContainer){
    asideContainer.style.display = 'none';
  }
  })

}

asideSideBar();

function footerSection(){
  const homeContainer = document.querySelector('.js-home-container');
  const searchContainer = document.querySelector('.search-container');
  const grokContainer = document.querySelector('.grok-container');
  const communityContainer = document.querySelector('.community-container');
  const notificationContainer = document.querySelector('.notification-container');
  const messageContainer = document.querySelector('.message-container');

  document.getElementById('home-icon')?.addEventListener('click', ()=> {
    homeContainer.style.display = 'block';
    searchContainer.style.display = 'none';
    grokContainer.style.display = 'none';
    notificationContainer.style.display = 'none';
    messageContainer.style.display = 'none';
  });

  document.getElementById('search-icon')?.addEventListener('click', ()=> {
    searchContainer.style.display = 'block';
    homeContainer.style.display = 'none';
    grokContainer.style.display = 'none';
    communityContainer.style.display = 'none';
    notificationContainer.style.display = 'none';
    messageContainer.style.display = 'none';
  });

  document.getElementById('grok-icon')?.addEventListener('click', ()=> {
    grokContainer.style.display = 'block';
    searchContainer.style.display = 'none';
    homeContainer.style.display = 'none';
    communityContainer.style.display = 'none';
    notificationContainer.style.display = 'none';
    messageContainer.style.display = 'none';
  });

  document.getElementById('community-icon')?.addEventListener('click', ()=> {
    communityContainer.style.display = 'block';
    grokContainer.style.display = 'none';
    searchContainer.style.display = 'none';
    homeContainer.style.display = 'none';
    notificationContainer.style.display = 'none';
    messageContainer.style.display = 'none';
  });

  document.getElementById('notification-icon')?.addEventListener('click', ()=> {
    notificationContainer.style.display = 'block';
    communityContainer.style.display = 'none';
    grokContainer.style.display = 'none';
    searchContainer.style.display = 'none';
    homeContainer.style.display = 'none';
    messageContainer.style.display = 'none';
    
  });

  document.getElementById('message-icon')?.addEventListener('click', ()=> {
    messageContainer.style.display = 'block';
    notificationContainer.style.display = 'none';
    communityContainer.style.display = 'none';
    grokContainer.style.display = 'none';
    searchContainer.style.display = 'none';
    homeContainer.style.display = 'none';
    
  });

  const passportContainer1 = document.querySelector('.js-passport-container2');

  const passportContainer2 = document.querySelector('.js-passport-container3');

  const passportContainer3 = document.querySelector('.js-passport-container4');

  const passportContainer4 = document.querySelector('.js-passport-container5');

  const passportContainer5 = document.querySelector('.js-passport-container6');

  const asideContainer = document.querySelector('.js-aside-container');

  passportContainer1?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  });

  passportContainer2?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  });

  passportContainer3?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  });

  passportContainer4?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  });

  passportContainer5?.addEventListener('click', (e)=> {
    e.stopPropagation();
    asideContainer.style.display = 'block';
  });

  asideContainer?.addEventListener('click', (e)=> {
    e.stopPropagation();
  });

  document?.addEventListener('click', (e)=> {
  if(asideContainer){
    asideContainer.style.display = 'none';
  }
  });

}
footerSection();
}

