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

const registrationScript =
    "https://script.google.com/macros/s/AKfycbwBFVuY2VQIQ2XexRoIx3sOXgr8Hm5ksGpSezqk5i630e14XNDbNywMwoFHaRc2sCN4/exec";
const registration = document.forms['registration']

const spinner = document.getElementById('loader')

registration.addEventListener('submit', e => {
    e.preventDefault()
    spinner.style.display="block"
    fetch(registrationScript, { method: 'POST', body: new FormData(registration) })
        .then(_ => {alert("Registration Successful. Thank You .")
                    spinner.style.display="none"
                    mask.style.display = "none"
                    registrationForm.style.display = "none"})
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