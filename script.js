const scriptURL1 = 'https://script.google.com/macros/s/AKfycbztxWdhLkx9n9BU8ZvDUGI0ySL5dUUPink1G9vcis_ZqW-7asB-omLjzUB-noqE1rXz/exec'
const form1 = document.forms['google-sheet1']

form1.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzc4OJ1o6x1FedeBoAMfh_bg0MreH5HPJ8JH-kRx9-GYdYlYG2ZnLdBjMd8RatfYW5V/exec'
const form2 = document.forms['google-sheet2']

form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
    .then(response => alert("You have registered for MOOT Court 2022"))
    .catch(error => console.error('Error!', error.message))
})

const mask = document.getElementById('mask')
const registerForm = document.getElementById('register-form')
const mootRegisterForm = document.getElementById('moot-register-form')
 
const registerLink = document.getElementById('register-link')

 document.getElementById("register-link").addEventListener('click',  () => {
  mask.style.display = "block"
  registerForm.style.display = "block"
})
 
 document.getElementById("moot-register-link").addEventListener('click',  () => {
  mask.style.display = "block"
  mootRegisterForm.style.display = "block"
})
 
for (let closeBtn in document.getElementsByClassName("close")) {
    closeBtn.onclick = () => {
        mask.style.display = "none"
        registerForm.style.display = "none"
        mootRegisterForm.style.display = "none"
    }
}
 
 window.onclick = e => {
   if (e.target === mask) {
        mask.style.display = "none"
        registerForm.style.display = "none"
        mootRegisterForm.style.display = "none"
   }
 }