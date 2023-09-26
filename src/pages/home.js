function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonSingup = document.createElement('button');
  const textWelcome = document.createElement('p');
  const appName = document.createElement('h1');
  const img = document.createElement('img');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Welcome to';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';

  textWelcome.textContent = 'A space created especially for programming lovers. Join and immerse yourself in the world of coding!';
  buttonLogin.innerHTML = 'Login';
  buttonSingup.innerHTML = 'Sign Up';

  buttonSingup.addEventListener('click', () => {
    navigateTo('/check');
  });

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.append(title, img, appName, textWelcome, buttonLogin, buttonSingup);
  return section;
}

export default home;
