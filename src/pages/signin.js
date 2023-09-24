/* eslint-disable spaced-comment */
function signin(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const buttonReturn = document.createElement("button");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  const password = document.createElement("input");
  const buttonSignIn2 = document.createElement("button");
  const buttonSignUp2 = document.createElement("button");
  const img = document.createElement("img");
  const appName = document.createElement("h1");

  appName.textContent = "{HOPPER}";
  title.textContent = "Sign In";
  inputEmail.placeholder = "Write your email";
  buttonSignIn2.textContent = "Sign in";
  password.placeholder = "Password";
  img.src = "router/cubo.jpg";
  img.alt = "logo";

  // section to add class names to elements
  buttonSignIn2.classList.add("originalClass");
  buttonSignUp2.classList.add("opositeClass");

  form.append(inputEmail, password, buttonSignIn2);

  //buttonReturn specifications
  buttonReturn.classList.add("opositeClass");
  buttonReturn.textContent = "Return to home";
  buttonReturn.addEventListener("click", () => {
    navigateTo("/");
  });

  //buttonSignUp specifications
  buttonSignUp2.textContent = "Still don't have an account? Sign up!";
  buttonSignUp2.addEventListener("click", () => {
    navigateTo("/signup");
  });

  section.append(img, appName, title, form, buttonSignUp2, buttonReturn);
  return section;
}

export default signin;
