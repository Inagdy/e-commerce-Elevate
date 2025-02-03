import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},

    {path:"home", loadComponent: () => import('./features/pages/home/home.component').then((c) => c.HomeComponent)},
    {path:"login", loadComponent: () => import('./features/pages/login/login.component').then((c) => c.LoginComponent)},
    {path:"regester", loadComponent: () => import('./features/pages/regester/regester.component').then((c) => c.RegesterComponent)}


];
