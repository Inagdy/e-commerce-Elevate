import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},
<<<<<<< HEAD
    {path:"home", loadComponent: () => import('./features/componet/home/home.component').then((c) => c.HomeComponent)}
=======
    {path:"home", loadComponent: () => import('./features/pages/home/home.component').then((c) => c.HomeComponent)}
>>>>>>> navbar-UI
];
