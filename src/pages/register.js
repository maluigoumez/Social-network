import { signup, updateUserProfile } from '../lib/authService';
import { showMessage } from './showMessage';

function Register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputUserName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');
  const buttonSign = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Register';
  inputEmail.placeholder = 'Write your email';
  buttonSign.textContent = 'Sign Up';
  password.placeholder = 'Password';
  password.type = 'password';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';

  inputUserName.placeholder = 'Choose your username';
  inputUserName.type = 'text';
  inputUserName.autocomplete = 'username';
  inputUserName.name = 'username';
  inputUserName.name = 'required';

  inputEmail.placeholder = 'Write your email';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.autocomplete = 'current-email';

  buttonSign.textContent = 'Create account';
  password.placeholder = 'Password';
  password.type = 'password';
  password.autocomplete = 'current-password';

  img.src = 'router/cubo.jpg';
  img.alt = 'logo';
  img.className = 'logoInicio';
  section.className = 'seccionInicio';

  form.append(inputUserName, inputEmail, password, buttonSign);
  buttonSign.type = 'button';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.className = 'opposite';

  function emailVal(stringEmail) {
    const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCorrect = expReg.test(stringEmail);
    if (emailCorrect === false) {
      // console.log(emailCorrect);
      showMessage('Check your email', false);
    }
  }

  buttonSign.addEventListener('click', () => {
    emailVal(inputEmail.value);
    if (inputEmail.value === '' || password.value.length < 6 || password.value.trim() === '') {
      showMessage('Check your data', false);
    } else {
      signup(inputEmail.value, password.value)

        .then(() => {
          updateUserProfile(inputUserName.value)
            .then(() => {
              navigateTo('/feed');
              showMessage(`Welcome ${inputUserName.value}`, 'success');
            });
          // console.log(res);
        })
        .catch(() => {
          // alert(err);
        });
    }
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, appName, title, form, buttonSign, buttonReturn);
  return section;
}
export default Register;
