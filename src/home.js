function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const textWelcome = document.createElement('p');

  textWelcome.textContent = 'A space created especially for programming lovers. Join and immerse yourself in the world of coding!';
  buttonLogin.innerHTML = 'Login';
  title.textContent = 'Welcome';

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.append(title, textWelcome, buttonLogin);
  return section;
}
export default home;
