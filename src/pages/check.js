import { signup } from '../lib/authService';

function Check(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');
  const buttonSign = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Check';
  inputEmail.placeholder = 'Write your email';
  buttonSign.textContent = 'Sign Up';
  password.placeholder = 'Password';
  password.type = "password";
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';

  form.append(inputEmail, password, buttonSign);
  buttonSign.type = 'button';

  buttonReturn.textContent = 'Return to home';

  buttonSign.addEventListener('click', () => {
    if (inputEmail.value === '' || password.value.length < 6) { // . trim()
      alert('Verifica tus datos');
    } else {
      signup(inputEmail.value, password.value)
        .then(() => {
        // console.log({ res });
          navigateTo('/feed');
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, appName, title, form, buttonSign, buttonReturn);
  return section;
}
export default Check;
