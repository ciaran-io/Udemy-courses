/* eslint-disable */
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';

// DOM Elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('form.form-login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userDataPassword = document.querySelector('.form-user-password');

// Delegation
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Values
    const emailInputVal = document.querySelector('input#email').value;
    const passwordInputVal = document.querySelector('input#password').value;
    login(emailInputVal, passwordInputVal);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm) {
  userDataForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    updateSettings({ name, email }, 'data');
  });
}

if (userDataPassword) {
  userDataPassword.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const savePasswordBtn =userDataPassword.querySelector('button') ;

    savePasswordBtn.textContent ='Updating...'


    const passwordCurrent = document.querySelector(
      'input#password-current'
    ).value;
    const password = document.querySelector('input#password').value;
    const passwordConfirm = document.querySelector(
      'input#password-confirm'
    ).value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );
    
    savePasswordBtn.textContent = 'save password'
    const passwordInputs = userDataPassword.querySelectorAll(
      'input[type="password"]'
    );
    // reset current password input
    passwordInputs.forEach((el) => (el.value = ''));
  });
}
