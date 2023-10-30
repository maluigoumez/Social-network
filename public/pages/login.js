import { login } from '../lib/authService';
import { showMessage } from './showMessage';

function Login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');

  const buttonLogin = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Login';
  inputEmail.placeholder = 'Write your email';
  inputEmail.type = 'email';
  inputEmail.autocomplete = 'current-email';

  password.placeholder = 'Password';
  password.type = 'password';
  password.autocomplete = 'current-password';

  buttonLogin.textContent = 'Log in';
  buttonLogin.type = 'button';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';
  img.className = 'logoInicio';
  section.className = 'seccionInicio';

  form.append(inputEmail, password, buttonLogin);

  buttonReturn.textContent = 'Return to home';

  buttonLogin.addEventListener('click', () => {
    login(inputEmail.value, password.value)
      .then(() => {
        navigateTo('/feed');
        // console.log(res);
        showMessage('Welcome', 'success');
      })
      .catch(() => {
        showMessage('Usuario no existente', 'error');
      });
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, appName, title, form, buttonReturn);
  return section;
}
export default Login;
