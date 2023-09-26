function feed(navigateTo) {
  const barTop = document.createElement('div');
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');
  const textPost = document.createElement('textarea');

  barTop.classList.add('barTop');
  appName.textContent = '{HOPPER}';
  title.textContent = 'Login';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';
  textPost.placeholder = 'what are you thinking?';

  buttonReturn.textContent = 'Return to home';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, textPost, title, buttonReturn);
  return section;
}

export default feed;
