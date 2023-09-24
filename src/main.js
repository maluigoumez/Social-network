import home from "./pages/home.js";
import signin from "./pages/signin.js";
import error from "./pages/error.js";
import signup from "./pages/signup.js";

const routes = [
  { path: "/", component: home },
  { path: "/signin", component: signin },
  { path: "/error", component: error },
  { path: "/signup", component: signup },
];

const defaultRoute = "/";
const root = document.getElementById("root");

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo("/error");
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
