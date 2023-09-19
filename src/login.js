function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');
  const buttonSing = document.createElement('button');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write E-mail';
  buttonSing.textContent = 'Sign in';
  password.placeholder = 'Password';
  buttonLogin.textContent = 'Log in';

  form.append(inputEmail, password, buttonSing);

  buttonReturn.textContent = 'Return to home';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  title.textContent = 'Login';
  section.append(title, form, buttonLogin, buttonReturn);
  return section;
}
export default login;
