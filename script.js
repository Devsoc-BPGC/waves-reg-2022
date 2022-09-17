const mask = document.getElementById('mask')
const registrationForm = document.getElementById('registration-form')
const mootCourtRegistrationForm = document.getElementById('moot-court-registration-form')

document.getElementById("registration-link").addEventListener('click', () => {
    mask.style.display = "block"
    registrationForm.style.display = "block"
})

// document.getElementById("moot-court-registration-link").addEventListener('click', () => {
//     mask.style.display = "block"
//     mootCourtRegistrationForm.style.display = "block"
// })

mask.addEventListener('click', close)

for (const closeBtn of document.getElementsByClassName('close')) {
    closeBtn.addEventListener('click', close)
}

function close() {
    mask.style.display = "none"
    registrationForm.style.display = "none"
    mootCourtRegistrationForm.style.display = "none"
}

const registrationScript = 'https://script.google.com/macros/s/AKfycbztxWdhLkx9n9BU8ZvDUGI0ySL5dUUPink1G9vcis_ZqW-7asB-omLjzUB-noqE1rXz/exec'
const registration = document.forms['registration']

registration.addEventListener('submit', e => {
    e.preventDefault()
    fetch(registrationScript, { method: 'POST', body: new FormData(registration) })
        .then(_ => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})

const mootCourtRegistrationScript = 'https://script.google.com/macros/s/AKfycbzc4OJ1o6x1FedeBoAMfh_bg0MreH5HPJ8JH-kRx9-GYdYlYG2ZnLdBjMd8RatfYW5V/exec'
const mootCourtRegistraion = document.forms['moot-court-registration']

mootCourtRegistraion.addEventListener('submit', e => {
    e.preventDefault()
    fetch(mootCourtRegistrationScript, { method: 'POST', body: new FormData(mootCourtRegistraion) })
        .then(_ => alert("You have registered for MOOT Court 2022"))
        .catch(error => console.error('Error!', error.message))
})