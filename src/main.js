// Este es el punto de entrada de tu aplicacion

import {login} from './login.js';
import  {home}  from './home.js'

const root = document.getElementById('root');
const routes = [
    { path: '/', component: home},
    { path: '/login', component: login},
];

const defaultRoute = '/';

function navigateTo(hash){

    console.log({ hash })
    const route = routes.find((routeFind)=>{
        return routeFind.path === hash;
    })

    if(route && route.component){
        window.history.pushState(
            {},
            route.path,
            window.location.origin + route.path,
        );
        console.log("CHECK ROUTE ", route);
        root.innerHTML = '';
        root.appendChild(route.component(navigateTo));
    }

}

navigateTo(window.location.pathname);

