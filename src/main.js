// Este es el punto de entrada de tu aplicacion

import login from "./login.js"
import  home  from "./home.js";
import error from "./error.js";

const root = document.getElementById('root');
const routes = [
    { path: '/', component: home},
    { path: '/login', component: login},
    { path: '/error', component: error},
];

const defaultRoute = '/';

function navigateTo(hash){

    console.log({ hash })
    const route = routes.find((routeFound)=> routeFound.path === hash);

    if(route && route.component){
        window.history.pushState(
            {},
            route.path,
            window.location.origin + route.path,
        );
        
        if(root.firstChild){
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component(navigateTo));

    } else{
        navigateTo('/error')
       } 
}

window.onpopstate = () => {
    navigateTo(window.location.pathname)
};
navigateTo(window.location.pathname || defaultRoute);     






