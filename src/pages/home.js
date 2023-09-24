function home(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const buttonSignIn = document.createElement("button");
  const buttonSignUp = document.createElement("button");
  const textWelcome = document.createElement("p");
  const appName = document.createElement("h1");
  const img = document.createElement("img");

  // section to add class names to elements
  buttonSignIn.classList.add("originalClass");
  buttonSignUp.classList.add("opositeClass");

  appName.textContent = "{HOPPER}";
  title.textContent = "Welcome to";
  img.src = "router/cubo.jpg";
  img.alt = "logo";

  textWelcome.textContent =
    "A space created especially for programming lovers. Join and immerse yourself in the world of coding!";
  buttonSignIn.innerHTML = "Sign in";
  buttonSignIn.addEventListener("click", () => {
    navigateTo("/signin");
  });

  buttonSignUp.innerHTML = "Sign up";
  buttonSignUp.addEventListener("click", () => {
    navigateTo("/signup");
  });

  section.append(title, img, appName, textWelcome, buttonSignIn, buttonSignUp);
  return section;
}

export default home;
