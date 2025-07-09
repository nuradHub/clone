import { currentUsers, saveCurrentUser } from "./currentUsers.js";
import { users } from "./users.js";


document.querySelector('.js-sign-in').addEventListener('click', ()=>{
  const signIn = document.querySelector('.js-signin');

  signIn.style.display = 'block';
})

document.querySelector('.js-close-icon').addEventListener('click', ()=>{
 const signIn = document.querySelector('.js-signin');

  signIn.style.display = 'none';
})

document.querySelector('.js-account-button').addEventListener('click', ()=>{
   const signIn = document.querySelector('.js-signin');

  const newAccount = document.querySelector('.js-create-new-account');

  newAccount.style.display = 'block';

  signIn.style.display = 'none';
})

let login = document.getElementById('logins');
let invalidUser = document.querySelector('.js-user');

document.querySelector('.js-signin-button').addEventListener('click', ()=>{
  let loginValue = login.value;
  emailValidation();

  let findUser = users.find(user=>{
    return user.email === loginValue || user.username === loginValue;
  })


  if(findUser){
    let matchCurrentUser = currentUsers.find(currentUser=>{
      return currentUser.email === findUser.email && currentUser.username === findUser.username;
    })
  
    if(matchCurrentUser){
      setTimeout(()=>{
        window.location.href = 'currentUsers.html?email=${findUser.email}&username=${findUser.username}';
      }, 1000);
    }
    if(!matchCurrentUser){
      currentUsers.push(findUser);
      saveCurrentUser(findUser.email);
       setTimeout(()=>{
        window.location.href = `currentUsers.html?email=${findUser.email}&username=${findUser.username}`;
      }, 1000);
    }
   
  }

  if(!findUser){
    invalidUser.style.display = 'block';
    setTimeout(()=>{
      invalidUser.style.display = 'none';
    }, 1000);
  }
  
  console.log(currentUsers)
});

function emailValidation(){
  let validateEmail = login;

  if(!validateEmail.checkValidity()){
    validateEmail.reportValidity();
  }

  return validateEmail;
}