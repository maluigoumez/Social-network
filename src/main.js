// Este es el punto de entrada de tu aplicacion

import { start } from './srtar.js';
import { home } from './home.js'

const root = document.getElementById('root');
root.append(home());

