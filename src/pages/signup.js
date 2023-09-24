function signup(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const buttonReturn = document.createElement("button");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  const password = document.createElement("input");
  const buttonSignUp2 = document.createElement("button");

  const img = document.createElement("img");
  const appName = document.createElement("h1");

  appName.textContent = "{HOPPER}";
  title.textContent = "Sign Up";
  inputEmail.placeholder = "Write your email";
  buttonSignIn2.textContent = "Sign up";
  password.placeholder = "Password";
  buttonSignUp2.textContent = "Already have an account? Log in!";
  img.src = "router/cubo.jpg";
  img.alt = "logo";

  // section to add class names to elements
  buttonSignUp2.classList.add("opositeClass");
  buttonReturn.classList.add("opositeClass");

  form.append(inputEmail, password, buttonSignUp2);

  buttonReturn.textContent = "Return to home";

  buttonReturn.addEventListener("click", () => {
    navigateTo("/");
  });

  section.append(img, appName, title, form, buttonSignUp2, buttonReturn);
  return section;
}

export default signup;
