export const users = JSON.parse(localStorage.getItem('users')) || [];


export function saveUsers(){
  localStorage.setItem('users', JSON.stringify(users))
}