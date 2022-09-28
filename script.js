const myForm = document.querySelector('#form');
const alerts = document.querySelector('.alerts')
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const username = document.querySelector('#userName');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const submit = document.querySelector('#submit');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(firstName.value === '' || lastName.value === '' || username.value === '' || password.value === '' || confirm_password.value ==='') {
        alerts.classList.add('alerts')
        alerts.innerHTML = 'All fields needs to be filled.'

        setTimeout(() => alerts.remove(), 3000);
    }
    else if(password.value != confirm_password.value) {
        alerts.classList.add('alerts');
        alerts.innerHTML = 'Password must be the same'

        setTimeout(() => alerts.remove(), 3000);
    }
    else {
        alerts.classList.add('success');
        alerts.innerHTML = `${username.value} account created successfully!`;

        setTimeout(() => alerts.remove(), 3000);
    }

    firstName.value = '';
    lastName.value = '';
    username.value = '';
    password.value = '';
    confirm_password.value = '';
}