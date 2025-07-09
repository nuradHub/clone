import { saveUsers, users } from "./users.js";

let daySelect = document.getElementById('day');

daySelect.innerHTML = `<option value="" disabled hidden selected>Day</option>`;

for(let i = 1; i <= 31; i++){
  daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

let yearSelect = document.getElementById('year');

yearSelect.innerHTML = `<option value="" disabled hidden selected>Year</option>`;

for(let i = 1905; i <= 2025; i++){
 yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

document.querySelector('.js-create-account').addEventListener('click', ()=> {
    let newAccount = document.querySelector('.js-create-new-account');
    newAccount.style.display = 'block';
})

document.querySelector('.js-close-menu').addEventListener('click', ()=> {
  let newAccount = document.querySelector('.js-create-new-account');
  newAccount.style.display = 'none';
})

let nameValue = document.getElementById('name');
let emailValue = document.getElementById('email');
let usernameValue = document.getElementById('username');
let monthSelect = document.getElementById('month');
let inputCounter = document.querySelector('.js-count');
let successMessage = document.querySelector('.js-notify-success');
let notifyFailure = document.querySelector('.js-notify-failure');
let existingUser = document.querySelector('.js-existing-user');

nameValue.addEventListener('input', ()=>{
  inputCounter.innerHTML = nameValue.value.trim().length;
})

document.querySelector('.js-next-button').addEventListener('click', ()=>{
  inputValidity();

  let name = nameValue.value;
  let email = emailValue.value;
  let username = usernameValue.value;

  if(!emailValidity(email) && email!== ''){
    notifyFailure.style.display = 'block';
    setTimeout(()=>{
      notifyFailure.style.display = 'none';
    }, 2000)
    return false;   
  }
  let dob = `${monthSelect.value} ${daySelect.value}, ${yearSelect.value}`;

  let matchUsers = users.find(user=>{
    return user.email === email || user.username === username;
  })

  if(matchUsers){
    existingUser.style.display = 'block';
    setTimeout(()=>{
      existingUser.style.display = 'none';
    },2000);
  }

  if(!matchUsers && name !== '' && email !== '' && username !== '' && dob !== ''){
    users.push({
      name: name,
      email: email,
      username: username,
      dob: dob
    });
    saveUsers();
    successMessage.style.display = 'block';

    setTimeout(()=>{
      window.location.href = 'index.html';
    }, 2000);
  }
})

function inputValidity(){  
  const fields = [nameValue, emailValue, usernameValue,monthSelect, daySelect,yearSelect]

  for(const field of fields){
    if(!field.checkValidity()){
      field.reportValidity();
      return;
    }
  }
}

function emailValidity(email){
  let regEx = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regEx.test(email);
}

