import { check } from '../lib/authService';

function Check(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');
  const buttonSing = document.createElement('button');
  const buttonCheck = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Check';
  inputEmail.placeholder = 'Write your email';
  buttonSing.textContent = '';
  password.placeholder = 'Password';
  buttonCheck.textContent = 'Log in';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';

  form.append(inputEmail, password, buttonSing);
  buttonSing.type = 'button';
  buttonCheck.type = 'button';

  buttonReturn.textContent = 'Return to home';

  buttonCheck.addEventListener('click', () => {
    check(inputEmail.value, password.value)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, appName, title, form, buttonCheck, buttonReturn);
  return section;
}
export default Check;
