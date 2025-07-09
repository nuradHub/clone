import {operations} from "./currentUsersFunc.js";

let href = new URL(window.location.href);
let urlSearch = new URLSearchParams(href.search);
let userEmail = urlSearch.get('email');
let userName = urlSearch.get('username');


export const currentUsers = JSON.parse(localStorage.getItem(`${userEmail}`)) || [];

let renderUserPage = '';

const matchUser = currentUsers.find(user=>{  
  return user.email === userEmail && user.username === userName;
})

if(matchUser){
  const today = new Date();
  const dateString = today.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  renderUserPage = `
  
    <div class="contents">
       <div class="home-container js-home-container">
        <div class="top-content1">
          <div class="user-profile-picture">
            <div class="passport-container js-passport-container1">
              <img src="img/nurad.png" alt="">
            </div>
          </div>
          <div class="twitter-icon">
            <img src="icon/twitter-logo-vector-rbg.png" alt="">
          </div>
          <div class="upgrade">
            <h5>Upgrade</h5>
            <img src="icon/triple dot.png" alt="" class="js-tripple-icon">
          </div>
          <div class="timeline-setting js-timeline-setting">Timeline Setting</div>
        </div>

        <div class="middle-content1">
          <div class="foryou">
            <button>For you</button>
          </div>
          <div class="following">
            <button>Following</button>
          </div>
        </div>

        <div class="middle-content2">
          <div class="x-users">
              <h3>Want to see who you know on X?</h3>
              <img src="icon/triple dot.png" alt="">
          </div>
          <p>Take a peek at your contacts.</p>
          <div class="get-started-button">
            <button>Get started</button>
          </div>
        </div>

        <div class="user-container">
         <img src="icon/google-logo-vector-rbg.png" alt="">
          <div class="user-details">
            <h5>Ash</h5>
            <p>You guys are welcome to my page</p>
          </div>
        </div>

        <div class="post-content">
          <h4>Video not available yet</h4>
            <div class="video1">
              <video src="video/1-Scope.mp4" controls type="video/mp4" >Your Browser does not support the video type</video>
            </div>
          <h4>Video not available yet</h4>
            <div class="video2">
              <video src="video/9-Advanced Arrays.mp4" controls type="video/mp4">Your Browser does not support the video type</video>
            </div>
        </div>
    </div>

    <div class="search-container js-search-container">
          <div class="top-content1">
            <div class="user-profile-picture">
              <div class="passport-container js-passport-container2">
                <img src="img/nurad.png" alt="">
              </div>
            </div>
            <input type="text" name="search" id="search" placeholder="Search X">
            <div class="search-bar">
              <img src="/icon/setting-icon.png" alt="" class="js-tripple-icon">
            </div>
          </div>

          <div class="search-middle-content1">
            <div class="foryou">
              <button>For you</button>
            </div>
            <div class="trending">
              <button>Trending</button>
            </div>
            <div class="news">
              <button>News</button>
            </div>
            <div class="sport">
              <button>Sports</button>
            </div>
            <div class="entertainment">
              <button>Entertainment</button>
            </div>
          </div>

          <div class="search-middle-content2">
            <img src="img/banner.jpeg" alt="" id="banner">
          </div>

          <div class="news-container">
            <div class="user-details">
              <h5>Today's News</h5>
              <p>${matchUser.name} has finally become a billionaire</p>
            </div>
          </div>

          <div class="post-content2">
            More News comming soon...
          </div>
      </div>

      <div class="grok-container js-grok-container">
          <div class="top-content1">
            <div class="passport-container js-passport-container3">
              <img src="img/nurad.png" alt="">
            </div>
            <div>
              <h4>Grok 3</h4>
            </div>
            <div class="grok-bar">
              <img src="icon/refresh-icon.png" alt="" class="js-tripple-icon">
              <img src="icon/edit-icon.png" alt="" class="js-tripple-icon">
            </div>
          </div>

          <div class="grok-middle-content1">
            <div class="recent-conversation">
              <img src="icon/refresh-icon.png" alt="" class="js-tripple-icon">
              <span>Recent Conversations</span>
            </div>

            <div class="profilepic-display">
             <input type="text" name="profile1" id="profile1" placeholder="Upload Image as Profile Picture Display" readonly disabled>
             <input type="text" name="profile2" id="profile2" placeholder="Web Development Skills Acquired" readonly disabled>
             <input type="text" name="profile3" id="profile3" placeholder="Telegram Channel @nurad Insights" readonly disabled>
            </div>

            <div class="image-creation">
              <div class="create-image-container">
                <img src="icon/image-icon.png" alt="" class="js-tripple-icon">
                <button type="button">Create Images</button>
              </div>

              <div class="edit-image-container">
                <img src="icon/edit-icon.png" alt="" class="js-tripple-icon">
                <button type="button">Edit Image</button>
              </div>

              <div class="try-voice-container">
                <img src="icon/spaces-icon.png" alt="" class="js-tripple-icon">
                <button type="button">Try Voice Mode</button>
              </div>

            </div>

            <div class="ask-grok">
              <input type="text" name="ask-question" id="ask-question" placeholder="Ask anything" readonly disabled>
              <div class="asked-icons">
                <div class="position1">
                  <img src="icon/paper-clip-icon.png" alt="">
                  <img src="icon/swirl-icon.jpeg" alt="">
                  <img src="icon/light-bulb-icon.png" alt="">
                </div>
                <div class="position2">
                  <img src="icon/slider-icon.png" alt="">
                </div>
              </div>
                
            </div>

          </div>

      </div>


      <div class="community-container js-community-container">
          <div class="top-content1">
            <div class="passport-container js-passport-container4">
              <img src="img/nurad.png" alt="">
            </div>
            <div class="community-title">
              <h4>Community</h4>
            </div>
            <div class="community-bar">
              <img src="icon/search-icon-removebg-preview.png" alt="" class="js-tripple-icon">
              <img src="icon/community-icon-removebg-preview.png" alt="" class="js-tripple-icon">
            </div>
          </div>

          <div class="community-middle-content1">
            <div class="recent-conversation">
              <button class="home">Home</button>
              <button class="explore">Explore</button>
            </div>

            <div class="community-display">
             <button>Sports</button>
             <button>Technology</button>
             <button>Art</button>
             <button>Entertainment</button>
            </div>
          </div>

          <div class="user-container">
            <img src="icon/google-logo-vector-rbg.png" alt="">
            <div class="user-details">
              <h5>Ash</h5>
              <p>You guys are welcome to my Community page</p>
            </div>
          </div>

          <div class="post-content">
            Community Contents comming soon...
          </div>

      </div>


      <div class="notification-container js-notification-container">
          <div class="top-content1">
            <div class="passport-container js-passport-container5">
              <img src="img/nurad.png" alt="">
            </div>
            <div class="notification-title">
              <h4>Notification</h4>
            </div>
            <div class="notification-bar">
              <img src="icon/setting-icon.png" alt="" class="js-tripple-icon">
            </div>
          </div>

          <div class="notification-middle-content1">
            <div class="recent-notification">
              <button class="all">All</button>
              <button class="verified">Verified</button>
              <button class="mention">Mentions</button>
            </div>


            <div class="user-container">
              <img src="icon/google-logo-vector-rbg.png" alt="">
              <div class="user-details">
                <h5>Notification</h5>
                <p>You guys are welcome to Notification page</p>
              </div>
            </div>

            <div class="post-content">
              Notification Contents comming soon...
            </div>

          </div>
      </div>


      <div class="message-container js-message-container">
          <div class="top-content1">
            <div class="passport-container js-passport-container6">
              <img src="img/nurad.png" alt="">
            </div>
            <input type="text" name="message" id="message" placeholder="Search Direct Messages">
            <div class="message-bar">
              <img src="icon/setting-icon.png" alt="" class="js-tripple-icon">
            </div>
          </div>

            <div class="user-container">
              <img src="/icon/google-logo-vector-rbg.png" alt="">
              <div class="user-details">
                <h5>Messages</h5>
                <p>You guys are welcome to Message Section</p>
              </div>
            </div>

            <div class="post-content">
              Message comming soon...
            </div>

      </div>

    <section class="aside-container js-aside-container">

      <div class="aside-header">
        <div class="aside-header-images">
          <div class="passport-container2 js-passport-container7">
            <img src="/img/nurad.png" alt="">
          </div>
          <div class="tripple-icon"><img src="/icon/triple dot.png" alt=""></div>
        </div>
        <div class="aside-header-details">
          <h4>${matchUser.name}</h4>
          <p>@${matchUser.username}</p>
        </div>
        <div class="aside-about-user">
          <div class="entertainment">
            <img src="icon/jobs-icon.png" alt="">
            <span>Entertainment & Recreation</span>
          </div>
          <div class="fct">
            <img src="icon/location-icon.png" alt="">
            <span>Federal Capital Territory, Nig</span>
          </div>
          <div class="join-info">
            <div class="born">
              <img src="icon/dob-icon.png" alt="">
              <span>Born ${matchUser.dob}</span>
            </div> 
            <div class="join">
              <img src="icon/calender-icon.png" alt="">
              <span>Joined ${dateString}</span>
            </div>
          </div>
        </div>
        <div class="aside-header-followers">
          <span>500</span> Following <span>2M</span> Followers
        </div>
      </div>

      <div class="aside-middle-section">
        <div class="chat-content">
          <img src="icon/chat-icon.png" alt="">
          <span>Chat</span>
        </div>
        <div class="bookmark-content">
          <img src="icon/bookmarks-icon.png" alt="">
          <span>Bookmarks</span>
        </div>
        <div class="job-content">
          <img src="icon/jobs-icon.png" alt="">
          <span>Jobs</span>
        </div>
        <div class="list-content">
          <img src="icon/lists-icon.png" alt="">
          <span>Lists</span>
        </div>
        <div class="space-content">
          <img src="icon/spaces-icon.png" alt="">
          <span>Spaces</span>
        </div>
        <div class="monotization-content">
          <img src="icon/monotization-icon.png" alt="">
          <span>Monetization</span>
        </div>
      </div>

      <div class="aside-footer-section">
        <div class="setting-support">
          <span>Settings & Support</span>
          <img src="icon/dropdown.png" id="dropdown" alt="">
          <img src="icon/dropup.png" id="dropup" alt="">
        </div>
        <div class="aside-footer-content js-aside-footer-content">
          <div class="setting-privacy">
            <img src="icon/setting-icon.png" alt="">
            <span>Settings and Privacy</span>
          </div>
          <div class="help-center">
            <img src="icon/help-icon.png" alt="">
            <span>Help Center</span>
          </div>
          <div class="file-upload">
            <input type="file" id="upload" accept="image/*">
          </div>

          <button class="js-logout-button">Log Out</button>
        </div>
      </div>

    </section>
  </div>

  <footer>
    <div class="fixed-footer-content">
      <img src="/icon/home-icon.png" id="home-icon" alt="">
      <img src="/icon/search-icon-removebg-preview.png" id="search-icon" alt="">
      <img src="/icon/grok-removebg-preview.png" id="grok-icon" alt="">
      <img src="/icon/community-icon-removebg-preview.png" id="community-icon" alt="">
      <img src="/icon/notification-removebg-preview.png" id="notification-icon" alt="">
      <img src="/icon/messages-removebg-preview.png" id="message-icon" alt="">
    </div>
  </footer>

  `;
}

if(document.querySelector('.content-container')){
  document.querySelector('.content-container').innerHTML = renderUserPage;
}

export function saveCurrentUser(saveUsers){
  localStorage.setItem(`${saveUsers}`, JSON.stringify(currentUsers));
}

let savedImage = localStorage.getItem(`readerResult${matchUser?.username}`);

if(savedImage){
  const uploadContainer1 = document.querySelector('.js-passport-container1');
  const uploadContainer2 = document.querySelector('.js-passport-container2');
  const uploadContainer3 = document.querySelector('.js-passport-container3');
  const uploadContainer4 = document.querySelector('.js-passport-container4');
  const uploadContainer5 = document.querySelector('.js-passport-container5');
  const uploadContainer6 = document.querySelector('.js-passport-container6');
  const uploadContainer7 = document.querySelector('.js-passport-container7');

  let image1 = document.createElement('img');
        image1.src = savedImage;

        let image2 = document.createElement('img');
        image2.src = savedImage;
        
        let image3 = document.createElement('img');
        image3.src = savedImage;

        let image4 = document.createElement('img');
        image4.src = savedImage;

        let image5 = document.createElement('img');
        image5.src = savedImage;

        let image6 = document.createElement('img');
        image6.src = savedImage;
        
        let image7 = document.createElement('img');
        image7.src = savedImage;
        
        uploadContainer1.innerHTML = '';
        uploadContainer2.innerHTML = '';
        uploadContainer3.innerHTML = '';
        uploadContainer4.innerHTML = '';
        uploadContainer5.innerHTML = '';
        uploadContainer6.innerHTML = '';
        uploadContainer7.innerHTML = '';

        uploadContainer1.appendChild(image1);
        uploadContainer2.appendChild(image2);
        uploadContainer3.appendChild(image3);
        uploadContainer4.appendChild(image4);
        uploadContainer5.appendChild(image5);
        uploadContainer6.appendChild(image6);
        uploadContainer7.appendChild(image7);
}

function userUploadPassport(){
  const upload = document.getElementById('upload');
  const uploadContainer1 = document.querySelector('.js-passport-container1');
  const uploadContainer2 = document.querySelector('.js-passport-container2');
  const uploadContainer3 = document.querySelector('.js-passport-container3');
  const uploadContainer4 = document.querySelector('.js-passport-container4');
  const uploadContainer5 = document.querySelector('.js-passport-container5');
  const uploadContainer6 = document.querySelector('.js-passport-container6');
  const uploadContainer7 = document.querySelector('.js-passport-container7');

  upload?.addEventListener('change', (e)=> {
    let file = e.target.files[0];
    if(file && file.type.startsWith('image/')){
      let reader = new FileReader();
      reader.onload = (e)=> {
        let readerResult = e.target.result;
        localStorage.setItem(`readerResult${matchUser?.username}`, readerResult)

        let image1 = document.createElement('img');
        image1.src = readerResult;

        let image2 = document.createElement('img');
        image2.src = readerResult;
        
        let image3 = document.createElement('img');
        image3.src = readerResult;

        let image4 = document.createElement('img');
        image4.src = readerResult;

        let image5 = document.createElement('img');
        image5.src = readerResult;

        let image6 = document.createElement('img');
        image6.src = readerResult;
        
        let image7 = document.createElement('img');
        image7.src = readerResult;
        
        uploadContainer1.innerHTML = '';
        uploadContainer2.innerHTML = '';
        uploadContainer3.innerHTML = '';
        uploadContainer4.innerHTML = '';
        uploadContainer5.innerHTML = '';
        uploadContainer6.innerHTML = '';
        uploadContainer7.innerHTML = '';

        uploadContainer1.appendChild(image1);
        uploadContainer2.appendChild(image2);
        uploadContainer3.appendChild(image3);
        uploadContainer4.appendChild(image4);
        uploadContainer5.appendChild(image5);
        uploadContainer6.appendChild(image6);
        uploadContainer7.appendChild(image7);
      }
      reader.readAsDataURL(file);
    }
  })
}

document.querySelector('.js-logout-button')?.addEventListener('click', ()=> {
  localStorage.removeItem(`${userEmail}`);
  window.location.href = 'index.html';
});

userUploadPassport();
operations();