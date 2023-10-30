// Import the callGoogle function from the googleLogin.js file
import { callGoogle } from '../lib/googleLogin.js';

function home(navigateTo) {
  // Create HTML elements
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonSignup = document.createElement('button');
  const buttonGoogleSignup = document.createElement('button');
  const imageGoogle = document.createElement('img');
  const textWelcome = document.createElement('p');
  const appName = document.createElement('h1');
  const img = document.createElement('img');

  // Set text content and attributes for HTML elements
  appName.textContent = '{HOPPER}';
  title.textContent = 'Welcome to';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';
  img.className = 'logoInicio';

  textWelcome.textContent = 'A space created especially for programming lovers. Join and immerse yourself in the world of coding!';
  buttonLogin.innerHTML = 'Login';
  buttonLogin.className = 'original';
  buttonSignup.innerHTML = 'Sign Up';
  buttonSignup.className = 'opposite';
  section.className = 'seccionInicio';

  // Set image source and alt text for the Google Sign-In button
  imageGoogle.src = 'img/btn_google_signin_light_normal_web.png';
  imageGoogle.alt = 'Google Sign-In';

  // Set the CSS class for the Google Sign-In button
  buttonGoogleSignup.className = 'google';

  // Append the Google Sign-In image to the Google Sign-In button
  buttonGoogleSignup.appendChild(imageGoogle);

  // Add an event listener to callGoogle function when buttonGoogleSignup is clicked
  buttonGoogleSignup.addEventListener('click', () => {
    callGoogle(); // Call your Google login function here
  });

  // Add event listeners to navigate to other pages when buttons are clicked
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignup.addEventListener('click', () => {
    navigateTo('/register');
  });

  // Append all elements to the section
  section.append(
    title,
    img,
    appName,
    textWelcome,
    buttonLogin,
    buttonSignup,
    buttonGoogleSignup,
  );

  // Return the constructed section
  return section;
}

// Export the home function as the default export of this module
export default home;
