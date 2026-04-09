import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import {Contacto} from './pages/contacto/contacto';
import {Ejercicios} from './pages/ejercicios/ejercicios';
export const routes: Routes = [

{path: "inicio", component: Inicio},
{path: "contacto", component: Contacto},
{path: "ejercicios", component: Ejercicios},
];